import binascii
import os

def getToken():
    newToken = binascii.hexlify(os.urandom(16))
    return newToken.decode()

