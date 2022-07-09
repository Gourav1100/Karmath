from dataclasses import field, fields
from datetime import datetime
from getpass import getuser
from itertools import filterfalse
from pickle import TRUE
import sqlite3
import time
import binascii
import os
from urllib import request
import Oauth
import json


def insertToken(request):
    
    conn = sqlite3.connect('G:/HackIISC/HackIISC/modules/db.db')
    email = request['email']
    password = request['password']
    cursor = conn.execute("SELECT password FROM user WHERE email=\'" + email + '\'')
    cursor = cursor.fetchall()
    if len(cursor) == 0: return 'User not Found!', 404 
    if cursor[0][0] != password: return 'Incorrect! Password', 401
    token = Oauth.getToken()
    cursor = conn.execute("SELECT * FROM validtokens WHERE token=\"" + str(token)+'\"')
    cursor  = cursor.fetchall()
    if(len(cursor) != 0):
        return False
    else:
        conn.execute("INSERT INTO validtokens VALUES (\"" + token+"\"," + str(int(time.time())) + ","+ str(int(time.time() + 3600)) +",\""+ email +"\")")
        conn.commit()
        return token

def validToken(request):
    conn = sqlite3.connect('G:/HackIISC/HackIISC/modules/db.db')
    email = request['email']
    token = request['token']
    cursor = conn.execute("SELECT * FROM validtokens WHERE token=\"" + str(token)+'\"')
    cursor  = cursor.fetchall()
    if(len(cursor) == 0):
        return False
    if int(time.time()) > cursor[0][2]:
        conn.execute("DELETE FROM validtokens WHERE token=\"" + token + "\"")
        conn.commit()
        return False
    if cursor[0][3] != email:
        return False
    return True

def createUser(request):
    conn = sqlite3.connect('G:/HackIISC/HackIISC/modules/db.db')
    print(request['name'])
    fields = f"\'{request['name']}\', \'{request['company']}\', \'{request['branch']}\', \'{request['domain']}\', {request['phone']}, \'{request['email']}\',\'{request['password']}\'"
    print(fields)
    fieldlist = "name, company, branch, domain, phone, email, password"
    req = "INSERT INTO user(" + fieldlist + ") VALUES(" + fields + ")"
    conn.execute(req)
    conn.commit()
    return 'User Added Successfully'

def getUser(request):
    conn = sqlite3.connect('G:/HackIISC/HackIISC/modules/db.db')
    cursor = conn.execute("SELECT * FROM user WHERE email=\'" + request['email']+ '\'')
    cursor = cursor.fetchall()
    if(len(cursor) == 0): return 'User does not exist', 404
    dict = {

        'Name' : cursor[0][1],
        'Company': cursor[0][2],
        'Branch': cursor[0][3],
        'Domain': cursor[0][4],
        'Phone': cursor[0][5],
        'Email': cursor[0][6]
    }
    return json.dumps(dict, indent = 4)

def createBranch(request):
    conn = sqlite3.connect('G:/HackIISC/HackIISC/modules/db.db')
    fields = f"\'{request['name']}\', \'{request['company']}\', \'{request['email']}\',\'{request['password']}\'"
    fieldlist = "name, company, email, password"
    req = "INSERT INTO branch(" + fieldlist + ") VALUES(" + fields + ")"
    conn.execute(req)
    conn.commit()
    cursor = conn.execute("SELECT * FROM company WHERE name=\'" + request['company'] + '\'')
    print(fields)
    cursor = cursor.fetchall()
    if len(cursor) == 0:
        conn.execute("INSERT INTO company(name) VALUES(\'" + request['company'] + "\')")
        conn.commit()
    return 'Branch Added Successfully'

def getBranch(request):
    conn = sqlite3.connect('G:/HackIISC/HackIISC/modules/db.db')
    cursor = conn.execute("SELECT * FROM branch WHERE email=\'" + request['email']+ '\'')
    cursor = cursor.fetchall()
    if(len(cursor) == 0): return 'Branch does not exist', 404
    dict = {
        'Name' : cursor[0][0],
        'Company': cursor[0][1],
        'Email': cursor[0][2]
    }
    return json.dumps(dict, indent = 4)

def getEfficiencyHistory(request):
    conn = sqlite3.connect('G:/HackIISC/HackIISC/modules/db.db')
    cursor = conn.execute("SELECT date, efficiency FROM history WHERE email=\'" + request['email']+ '\' ORDER BY date ASC')
    cursor = cursor.fetchall()
    avg = 0
    arr = []
    i = 0
    while i < len(cursor):
        avg = avg + cursor[i][1]
        d = {'date': cursor[i][0], 'Efficiency': cursor[i][1]}
        arr.append(d)
        i = i + 1
    if len(cursor)>0:
       avg/=len(cursor)
    dict = {"avg" : avg, "data": arr}
    return json.dumps(dict)

def getCompanyComparision(request):
    conn = sqlite3.connect('G:/HackIISC/HackIISC/modules/db.db')
    cursor = conn.execute(f"SELECT * FROM branch WHERE email='{request['email']}'")
    cursor = cursor.fetchone()
    table = cursor[1] + "_" + cursor[0]
    branchavg = cursor[5]
    cursor = conn.execute(f"SELECT average FROM company WHERE name='{cursor[1]}'")
    cursor = cursor.fetchone()
    compavg = cursor[0]
    cursor = conn.execute(f"SELECT efficiency FROM {table} ORDER BY efficiency ASC")
    arr=[]
    cursor = cursor.fetchall()
    for i in range(0, len(cursor)):
        d = {"EmpID": i, "Efficiency": cursor[i][0]}
        arr.append(d)
    dict = {"data":arr, "branch": branchavg, "company": compavg}
    return json.dumps(dict)

def getEfficiencyComparision(request):


def execute(request):
    req = request.get_json(force=True)
    print(req['action'])
    if(req['action'] == "auth"):
        return insertToken(req)
    if req['action'] == 'createUser': return createUser(req)
    if req['action'] == 'createBranch': return createBranch(req)
    else:
        if validToken(req) == False: return "Invalid Auth Token!", 401
        if req['action'] == 'getUser' : return getUser(req)
        if req['action'] == 'getBranch' : return getBranch(req)
    return "FAILED"


    