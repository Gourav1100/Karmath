import sys
from unittest import result
from flask import *
# add modules path to Python paths
sys.path.insert(0, './modules')
# create flask app
app = Flask(__name__)

@app.route("/api/<api>", methods=["GET", "POST"])
async def executeAPI(api):
    try:
        apiHandler = __import__(api)
        result = await apiHandler.execute(request)
        return result
    except ImportError:
        print(f"Unable to import {api}.")
        return "Error in server"
    except:
        print("Error in server")
        return "Error in server"

# run flask app
app.run(debug=True)
