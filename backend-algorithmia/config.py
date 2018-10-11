import json
import datetime

from bson.objectid import ObjectId

MONGO_URI = "mongodb://zakari:zakari1@ds119662.mlab.com:19662/algorithm"
SERVER_PORT = 8082
SERVER_HOST = '0.0.0.0'

AI_API = 'http://localhost:5001/predict'

class JSONEncoder(json.JSONEncoder):                           
    ''' extend json-encoder class'''
    def default(self, o):                               
        if isinstance(o, ObjectId):
            return str(o)                               
        if isinstance(o, datetime.datetime):
            return str(o)
        return json.JSONEncoder.default(self, o)