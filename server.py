# Import libraries
from email import message
import numpy as np
from flask import Flask, request, jsonify
import pickle
import json

app = Flask(__name__)
# Load the model
DTC_model = pickle.load(open('models\DTC_model.pkl','rb'))
KNC_model = pickle.load(open('models\KNC_model.pkl','rb'))
RFC_model = pickle.load(open('models\RFC_model.pkl','rb'))
SGD_model = pickle.load(open('models\SGD_model.pkl','rb'))
models = [DTC_model, KNC_model, RFC_model, SGD_model]

@app.route('/api',methods=['POST'])

def predict():
    predictions = {}
    # Get the data from the POST request.
    data = request.get_json(force=True)
    vote = 0
    for model in models:
        prediction = model.predict(np.array([data['age'], data['gender'], data['height'], data['weight'], data['ap_hi'], data['ap_lo'], data['cholesterol'], data['gluc'], data['smoke'], data['alco'], data['active']]).reshape(1,-1))
        if prediction == [1]:
            vote += 1 
    
    message = str(vote) + " out of " + str(len(models)) + " of our model determine that you are at risk of any cardiovascular disease."
    return jsonify(message)

if __name__ == '__main__':
    app.run(port=5000, debug=True)