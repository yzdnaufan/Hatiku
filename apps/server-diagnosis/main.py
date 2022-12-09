#uvicorn apps.server-diagnosis.main:app --reload

# Import API libraries 
from fastapi import FastAPI
from fastapi import Body, FastAPI
from pydantic import BaseModel

#import mongodb libraries
import pymongo
from pymongo import MongoClient

from fastapi.middleware.cors import CORSMiddleware

# Import Utility libraries
import pickle
from typing import Union
import numpy as np
from . import train 

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import SGDClassifier

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model
DTC_model = pickle.load(open('apps\server-diagnosis\models\DTC_model.pkl','rb'))
KNC_model = pickle.load(open('apps\server-diagnosis\models\KNC_model.pkl','rb'))
RFC_model = pickle.load(open('apps\server-diagnosis\models\RFC_model.pkl','rb'))
SGD_model = pickle.load(open('apps\server-diagnosis\models\SGD_model.pkl','rb'))
models = [DTC_model, KNC_model, RFC_model, SGD_model]

expert_system = train.CVDExpertSystem()

@app.get("/")
def hello():
    return {"message":"use /diagnose/ to access diagnosis API"}


@app.post("/diagnose/")
async def root(form_dictionary:dict):
    prediction = predict_risk(form_dictionary)
    diagnosis = diagnose_disease(form_dictionary)
    return {"risk": prediction, "diagnosis": diagnosis}

@app.post("/retrain/")
async def retrain():
    client = MongoClient("mongodb+srv://yazid-belajar:yazid-belajar123@democluster1.rrkucxk.mongodb.net/?retryWrites=true&w=majority")
    db = client.your_database
    collection = db.your_collection
    cursor = collection.find()
    with open('cvd_risk_train.csv', 'w') as f:
        for document in cursor:
            f.write(str(document))
            f.write('\n')
    client.close()

    df=pd.read_csv("cvd_risk_train.csv",sep=',')
    df=df.drop(['id'],axis=1)
    x=df.drop(['cardio'],axis=1)
    y=df['cardio']
    xtrain,xtest,ytrain,ytest=train_test_split(x,y,test_size=.3,random_state=1)    
    rfc=RandomForestClassifier(n_estimators=10)
    rfc.fit(xtrain,ytrain)
    dtc=DecisionTreeClassifier()
    dtc.fit(xtrain,ytrain)
    knc=KNeighborsClassifier()
    knc.fit(xtrain,ytrain)
    sgd=SGDClassifier()
    sgd.fit(xtrain,ytrain)
    pass
    

def predict_risk(form_dictionary:dict):
    positive = 0
    number_of_model = len(models)
    for model in models:
        prediction = model.predict(np.array([form_dictionary["age"], form_dictionary["gender"], form_dictionary["height"], form_dictionary["weight"], form_dictionary["ap_hi"], form_dictionary["ap_lo"], form_dictionary["cholesterol"], form_dictionary["gluc"], form_dictionary["smoke"], form_dictionary["alco"], form_dictionary["active"]]).reshape(1,-1))
        if prediction == [1]:
            positive += 1
    return {"number_of_positive": positive, "number_of_model":number_of_model}

def diagnose_disease(form_dictionary:dict):
    return expert_system.diagnose(form_dictionary)

class FormData(BaseModel):
    age:int
    gender:int
    height:float
    weight:float
    ap_hi:int
    ap_lo:int
    cholesterol:int
    gluc:int
    smoke:int
    alco:int
    active:int
    
class QuestionareData(BaseModel):
    blood_clotting_disorder: bool
    kidney_disease: bool
    chest_pains: bool
    breathlessness: bool
    nausea: bool
    faintings: bool
    fatigue: bool
    swollen_ankles: bool
    drastic_weight_changes: bool 
    bloating: bool
    loss_of_appetite: bool
    dizziness_confusion: bool
    palpitations: bool
    atrial_fibrillation: bool
    sudden_headache: bool
    sudden_lossofvision: bool
    face_dropping: bool
    numbness: bool
    speech_problem: bool
    leg_pain_cramping: bool
    burning_aching_toes: bool
    cool_feet_skin: bool
    redness_colorchanges_skin: bool
    back_pain: bool
    coughing: bool
    hoarseness: bool
    tenderness_pain_chest: bool
    sharp_sudden_pain_upperback: bool
    pain_chest_jaw_neck_arms: bool
    loss_of_consciousness: bool
    difficulty_breathing: bool
    trouble_swallowing_food: bool
    deep_constant_belly_pain: bool
    family_history_coronaryheartdisease: bool
    personal_family_history_blood_bloodvesseldisease: bool