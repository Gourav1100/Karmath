from dataclasses import fields
from getpass import getuser
from itertools import filterfalse
import sqlite3
import time
import binascii
import os
from urllib import request
import Oauth
import json


def insertToken(request):
    conn = sqlite3.connect('G:/HackIISC/HackIISC/modules/db.db')
    email = request.json().body.email
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
    email = request.json().body.email
    token = request.json().token
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
    temp = request.json().body
    fields = f"\'{temp.name}\', \'{temp.company}\', \'{temp.branch}\', \'{temp.domain}\', \'{temp.phone}\', \'{temp.email}\',\'{temp.password}\'"
    fieldlist = "name, company, branch, domain, phone, email, password"
    req = "INSERT INTO user(" + fieldlist + ") VALUES(" + fields + ")"
    conn.execute(req)
    conn.commit()

def getUser(request):
    conn = sqlite3.connect('G:/HackIISC/HackIISC/modules/db.db')
    temp = request.json()
    cursor = conn.execute("SELECT * FROM user WHERE email=\'" + temp.body.email + '\'')
    cursor = cursor.fetchall()
    if(len(cursor) == 0): return False
    dict = {
        'Name' : cursor[0][1],
        'Company': cursor[0][2],
        'Branch': cursor[0][3],
        'Domain': cursor[0][4],
        'Phone': cursor[0][5],
        'Email': cursor[0][6]
    }
    return json.dumps(dict, indent = 4)

def execute(request):
    body = request.json().body
    action = request.json().action

print(getUser(123))
