import binascii
import os

validTokens = []
def getToken():
    newToken = binascii.hexlify(os.urandom(16))
    return newToken

