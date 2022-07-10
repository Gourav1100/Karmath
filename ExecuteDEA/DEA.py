import pandas as pd
import os
import csv
from keras.models import *
from keras.layers import *
from keras.losses import *
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
# load crs values from csv file
for i in range(3,length):
    if(listCSV[i][1] == " CRS"):
        break
    efficiencyVRS.append(float(listCSV[i][-1]))

#update the samples with the efficiency
data1['Efficiency'] = efficiencyVRS
data1.to_csv('RealSample.csv', index=False)
dataReal = pd.read_csv('RealSample.csv')

# load DEA data
x = dataReal.iloc[:,1:12].values
y = dataReal.iloc[:,12].values #efficiency in the last
# split data into training and testing
xTrain,xTest,yTrain,yTest = train_test_split(x,y,test_size = 0.2, random_state=0)
# Scaling
sc = StandardScaler()
xTrain = sc.fit_transform(xTrain)
xTest = sc.transform(xTest)
# define architecture
classifier = Sequential()
classifier.add(Dense(units = 16, kernel_initializer = "uniform", activation="softplus", input_dim=11)) #2including to 10 excluding
classifier.add(Dense(units = 16, kernel_initializer = "uniform", activation="softplus"))
classifier.add(Dense(units = 16, kernel_initializer = "uniform", activation="softplus"))
classifier.add(Dense(units = 16, kernel_initializer = "uniform", activation="softplus"))
classifier.add(Dense(units = 14, kernel_initializer = "uniform", activation="softplus"))
classifier.add(Dense(units = 3, kernel_initializer = "uniform", activation="softplus"))
classifier.add(Dense(units = 2, kernel_initializer = "uniform", activation="softplus"))
classifier.add(Dense(units = 1, kernel_initializer = "uniform", activation = "sigmoid"))
# compile model
classifier.compile(optimizer= nadam(lr=0.001) ,loss=mse)
# fit values and start training
classifier.fit(xTrain,yTrain,batch_size=10,epochs = 1000)
# print model summary
print(classifier.summary())
# store model to json
json_model = classifier.to_json()
with open( './karmath.json', 'w' ) as json_file:
    json_file.write(json_model)
classifier.save_weights('./karmath.h5')
# predict testing data
yPred = classifier.predict(xTest)
# calculate error
root_mean_squared_error = 0
for i in range(len(yPred)):
    root_mean_squared_error+=((yTest[i]-yPred[i])**2)
root_mean_squared_error /= len(yPred)
print((root_mean_squared_error)**1/2)


