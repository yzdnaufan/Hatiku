import pandas as pd
import numpy as np
import seaborn
import matplotlib.pyplot as plt
import pickle

df=pd.read_csv("CVDRiskPrediction_train.csv",sep=',')
df=df.drop(['id'],axis=1)
x=df.drop(['cardio'],axis=1)
y=df['cardio']

from sklearn.model_selection import train_test_split
xtrain,xtest,ytrain,ytest=train_test_split(x,y,test_size=.3,random_state=1)

from sklearn.ensemble import RandomForestClassifier
rfc=RandomForestClassifier(n_estimators=1000)
rfc.fit(xtrain,ytrain)
rfc.predict(xtest)
rfc.score(xtest,ytest)
pickle.dump(rfc, open('models\RFC_model.pkl','wb'))

from sklearn.tree import DecisionTreeClassifier
dtc=DecisionTreeClassifier()
dtc.fit(xtrain,ytrain)
dtc.predict(xtest)
dtc.score(xtest,ytest)

pickle.dump(dtc, open('models\DTC_model.pkl','wb'))

from sklearn.neighbors import KNeighborsClassifier
knc=KNeighborsClassifier()
knc.fit(xtrain,ytrain)
knc.predict(xtest)
knc.score(xtest,ytest)

pickle.dump(knc, open('models\KNC_model.pkl','wb'))

from sklearn.linear_model import SGDClassifier
sgd=SGDClassifier()
sgd.fit(xtrain,ytrain)
sgd.predict(xtest)
sgd.score(xtest,ytest)

pickle.dump(sgd, open('models\SGD_model.pkl','wb'))