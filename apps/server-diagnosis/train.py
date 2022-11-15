import pandas as pd
import numpy as np
import pickle
print("Import Library Succeed")

df=pd.read_csv("apps\server-diagnosis\input\cvd_risk_train.csv",sep=',')
df=df.drop(['id'],axis=1)
x=df.drop(['cardio'],axis=1)
y=df['cardio']
print("Import Data Succeed")

from sklearn.model_selection import train_test_split
xtrain,xtest,ytrain,ytest=train_test_split(x,y,test_size=.3,random_state=1)

from sklearn.ensemble import RandomForestClassifier
rfc=RandomForestClassifier(n_estimators=10)
rfc.fit(xtrain,ytrain)
rfc.predict(xtest)
pickle.dump(rfc, open('apps\server-diagnosis\models\RFC_model.pkl','wb'))
print("RFC Training Complete" + ", Accuracy: " + str(rfc.score(xtest,ytest)))

from sklearn.tree import DecisionTreeClassifier
dtc=DecisionTreeClassifier()
dtc.fit(xtrain,ytrain)
dtc.predict(xtest)
pickle.dump(dtc, open('apps\server-diagnosis\models\DTC_model.pkl','wb'))
print("DTC Training Complete" + ", Accuracy: " + str(dtc.score(xtest,ytest)))

from sklearn.neighbors import KNeighborsClassifier
knc=KNeighborsClassifier()
knc.fit(xtrain,ytrain)
knc.predict(xtest)
pickle.dump(knc, open('apps\server-diagnosis\models\KNC_model.pkl','wb'))
print("KNC Training Complete" + ", Accuracy: " + str(knc.score(xtest,ytest)))

from sklearn.linear_model import SGDClassifier
sgd=SGDClassifier()
sgd.fit(xtrain,ytrain)
sgd.predict(xtest)
pickle.dump(sgd, open('apps\server-diagnosis\models\SGD_model.pkl','wb'))
print("SGD Training Complete" + ", Accuracy: " + str(sgd.score(xtest,ytest)))
