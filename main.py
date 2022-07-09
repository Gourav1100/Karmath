import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import os
import csv
import tensorflow as tf
from keras.models import *
from keras.layers import *
from keras.losses import *
from keras.optimizers import *
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

#running DEA on sample file -> the file given by user
#os.system(""" python -m pyDEA.main "parameters.txt" "csv" "" "sample.csv" """)

#merge efficiency parameter to the sample file
data1 = pd.read_csv('sample.csv')
data2 = pd.read_csv('sample_result/EfficiencyScores.csv')

#converting csv to list
with open('sample_result/EfficiencyScores.csv', newline='') as f:
    reader = csv.reader(f)
    listCSV = list(reader)

# print(listCSV)

length = len(listCSV)


efficiencyVRS = []
flag1 = 1
flag2 = 1

print(listCSV)
for i in range(3,length):
    if(listCSV[i][1] == " CRS"):
        break
    if(flag1 == 1 and flag2 == 1):
        #print(float(listCSV[i][-1]))
        efficiencyVRS.append(float(listCSV[i][-1]))
    
    # if(listCSV[i][-1] == " CRS"):
    #     flag1 = 1
    # if(listCSV[i][-1] == "Efficiency"):
    #     flag2 = 1
    


#print(efficiencyVRS)

#update the samples with the efficiency

data1['Efficiency'] = efficiencyVRS

data1.to_csv('RealSample.csv', index=False)

dataReal = pd.read_csv('RealSample.csv')


x = dataReal.iloc[:,1:12].values
y = dataReal.iloc[:,12].values #efficiency in the last

# print(x)
# print(y)
# plt.plot(y)
# plt.show()


xTrain,xTest,yTrain,yTest = train_test_split(x,y,test_size = 0.2, random_state=0)
#Scaling
sc = StandardScaler()
xTrain = sc.fit_transform(xTrain)
xTest = sc.transform(xTest)


# Fitting the Polynomial regression to the dataset  
# from sklearn.linear_model import LinearRegression  
# lin_regs= LinearRegression()  
# lin_regs.fit(xTrain,yTrain)  
# from sklearn.preprocessing import PolynomialFeatures  
# poly_regs= PolynomialFeatures(degree= 3)  
# x_poly= poly_regs.fit_transform(xTrain)  
# lin_reg_2 =LinearRegression()  
# lin_reg_2.fit(x_poly, yTrain)  

# print(x)
# print(y)

# print(x.shape)
# print(y.shape)
# poly_pred = lin_reg_2.predict(poly_regs.fit_transform(xTest))  

# print(poly_pred)
# print(type(poly_pred))
# print(yTest)
# accuracy = 0
# for i in range(len(poly_pred)):
#     accuracy+=((yTest[i]-poly_pred[i])**2)
# accuracy /= len(poly_pred)
# print((accuracy)**1/2)


# cm = confusion_matrix(yTest, poly_pred)
#lin_reg_2.score(poly_pred, yTest)

# prediction_results = get_prediction_results()
# poly_pred = sc.fit_transform(poly_pred)
# print(poly_pred)  
# print("----------------------------------------------------------")
# print(yTest)
# pred = pol_reg.predict(xTest)
# diff = yTest - pred
# print(pd.DataFrame(np.c_[yTest , pred , diff] , columns=['Actual','Predicted','Difference']))

# Visualizing the Polymonial Regression results
# def viz_polymonial():
#     plt.scatter(x, y, color='red')
#     plt.plot(x, pol_reg.predict(poly_reg.fit_transform(x)), color='blue')
#     plt.show()
#     return
# viz_polymonial()



# plt.plot(x_poly)
# plt.show();

classifier = Sequential()
classifier.add(Dense(units = 16, kernel_initializer = "uniform", activation="softplus", input_dim=11)) #2including to 10 excluding
classifier.add(Dense(units = 16, kernel_initializer = "uniform", activation="softplus"))
classifier.add(Dense(units = 16, kernel_initializer = "uniform", activation="softplus"))
classifier.add(Dense(units = 16, kernel_initializer = "uniform", activation="softplus"))
classifier.add(Dense(units = 14, kernel_initializer = "uniform", activation="softplus"))
classifier.add(Dense(units = 3, kernel_initializer = "uniform", activation="softplus"))
classifier.add(Dense(units = 2, kernel_initializer = "uniform", activation="softplus"))
classifier.add(Dense(units = 1, kernel_initializer = "uniform", activation = "sigmoid")) #relu or elu test


classifier.compile(optimizer= nadam(lr=0.001) ,loss=mse)
classifier.fit(xTrain,yTrain,batch_size=10,epochs = 1000)

yPred = classifier.predict(xTest)
# from sklearn.metrics import confusion_matrix, accuracy_score
# # cm = confusion_matrix(yTest, yPred)
# accuracy_score(yTest, yPred)

# print(accuracy_score)

accuracy = 0
for i in range(len(yPred)):
    accuracy+=((yTest[i]-yPred[i])**2)
accuracy /= len(yPred)
print((accuracy)**1/2)

print(yPred)
print(yTest)


