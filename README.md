# Karmath
A Machine learning model to predict the efficiency of employees in workspace. The prediction is based on 11 parameters namely- Experience(yrs),TaskAssigned,TaskCompleted,DeadlinesMet,DeadlinesMissed,number of EOM(Employee of the month) ,EOM points (agg) ,EOY(points),Manager Score,Holidays Taken,Number of hours overtime. 
<br>
The ML model is based on neural network using Data Envelopment Analysis (DEA) which is based on Linear Programming. The user interactions are handled from react based interactive user interface. 
<br>
## Dependencies
Dependencies installation script ( Unix )
```sh
sudo apt install python3 pip3 python3-venv
git clone --recursive git@github.com:ShisuiMadara/HackIISC.git
cd HackIISC
python3 -m venv venv
source venv/bin/activate
pip install -r ./requirements.txt
```

## Technologies used
<ul>
  <li>Python</li>
  <li>pyDEA</li>
  <li>React.js</li>  
  <li>ReCharts </li>
  <li>MUI </li>
  <li>SQLite </li>
  <li>Flask</li>
  </ul>
 
 ## Usage
 The web application has a highly interactive user interface.
 <ul>
 <li>The robust backend handles all the computations, thus all the company has to do is to CLICK !</li>
 <li>The performance is presented in the form of interactive charts.</li>
  <li>Maintaining a curated resource list on how to fill performance reports and how to grow as a developer.</li>
  </ul>
  
 
