from itertools import filterfalse
import sqlite3
import time
import binascii
import os
from urllib import request
import Oauth


def insertToken(request):
    conn = sqlite3.connect('G:/HackIISC/HackIISC/modules/db.db')
    email = request.json().body.email
    email = "Hello"
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
    temp = request.json()
