import sys
from unittest import result
from flask import *
# add modules path to Python paths
sys.path.insert(0, './modules')
# create flask app
app = Flask(__name__)

@app.route("/api/<api>", methods=["GET", "POST"])
def executeAPI(api):
    try:
        apiHandler = __import__(api)
        result = apiHandler.execute(request)
        return result
    except ImportError:
        print("Unable to import API.")
        return "Error in server"
    except:
        print("Error in server")
        return "Error in server"

# run flask app
app.run(debug=True)
