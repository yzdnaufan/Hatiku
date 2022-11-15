#uvicorn apps.server-diagnosis.main:app --reload

# Import libraries
import pickle
from typing import Union
from fastapi import FastAPI
import numpy as np

app = FastAPI()

# Load the model
DTC_model = pickle.load(open('apps\server-diagnosis\models\DTC_model.pkl','rb'))
KNC_model = pickle.load(open('apps\server-diagnosis\models\KNC_model.pkl','rb'))
RFC_model = pickle.load(open('apps\server-diagnosis\models\RFC_model.pkl','rb'))
SGD_model = pickle.load(open('apps\server-diagnosis\models\SGD_model.pkl','rb'))
models = [DTC_model, KNC_model, RFC_model, SGD_model]

@app.post("/")
async def root(age:int,gender:int,height:float,weight:float,ap_hi:int,ap_lo:int,cholesterol:int,gluc:int,smoke:int,alco:int,active:int):
    prediction = predict_risk(age, gender, height, weight, ap_hi, ap_lo, cholesterol, gluc, smoke, alco, active)
    return {"number_of_positive": prediction["number_of_positive"], "number_of_model": prediction["number_of_model"]}


def predict_risk(age:int,gender:int,height:float,weight:float,ap_hi:int,ap_lo:int,cholesterol:int,gluc:int,smoke:int,alco:int,active:int):
    vote = 0
    number_of_model = len(models)
    for model in models:
        prediction = model.predict(np.array([age, gender, height, weight, ap_hi, ap_lo, cholesterol, gluc, smoke, alco, active]).reshape(1,-1))
        if prediction == [1]:
            vote += 1
    return {"number_of_positive": vote, "number_of_model":number_of_model}

