import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import os
import csv
import tensorflow as tf
from keras.models import *
from keras.layers import *
from keras.optimizers import *
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

#running DEA on sample file -> the file given by user
os.system(""" python -m pyDEA.main "parameters.txt" "csv" "" "sample.csv" """)

#merge efficiency parameter to the sample file
data1 = pd.read_csv('sample.csv')
data2 = pd.read_csv('sample_result/EfficiencyScores.csv')

#converting csv to list
with open('sample_result/EfficiencyScores.csv', newline='') as f:
    reader = csv.reader(f)
    listCSV = list(reader)



length = len(listCSV)


efficiencyVRS = []
flag1 = 1
flag2 = 1

for i in range(3,length):
    if(listCSV[i][1] == " CRS"):
        break
    if(flag1 == 1 and flag2 == 1):
     
        efficiencyVRS.append(float(listCSV[i][-1]))


print(efficiencyVRS)

#update the samples with the efficiency

data1['Efficiency'] = efficiencyVRS

data1.to_csv('RealSample.csv', index=False)

dataReal = pd.read_csv('RealSample.csv')


x = dataReal.iloc[:,1:11].values
y = dataReal.iloc[:,11].values #efficiency in the last

xTrain,xTest,yTrain,yTest = train_test_split(x,y,test_size = 0.2, random_state=0)

 #Fitting the Polynomial regression to the dataset  
from sklearn.linear_model import LinearRegression  
lin_regs= LinearRegression()  
lin_regs.fit(x,y)  
from sklearn.preprocessing import PolynomialFeatures  
poly_regs= PolynomialFeatures(degree= 3)  
x_poly= poly_regs.fit_transform(x)  
lin_reg_2 =LinearRegression()  
lin_reg_2.fit(x_poly, y)  

print(x)
print(y)

print(x.shape)
print(y.shape)
poly_pred = lin_reg_2.predict(poly_regs.fit_transform(xTest))  

print(poly_pred)
print(type(poly_pred))
print(yTest)
error = 0
for i in range(len(poly_pred)):
    error+=((yTest[i]-poly_pred[i])/yTest[i])
error /= len(poly_pred)
print(100-(error*100))

