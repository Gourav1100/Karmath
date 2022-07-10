import sys
from unittest import result
from flask import *
from flask_cors import *
# add modules path to Python paths
sys.path.insert(0, './modules')
# create flask app
app = Flask(__name__)
# enable cors
cors = CORS(app, resources={r'/api/*': {'origins': "*"}})
# enable file upload
UPLOAD_FOLDER = "./ExecuteDEA/"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# define dynamic routing
@app.route("/api/<api>", methods=["GET", "POST"])
def executeAPI(api):
    try:
        apiHandler = __import__(api)
        if api == "uploadFile":
            result = apiHandler.execute(request, UPLOAD_FOLDER)
        else:
            result = apiHandler.execute(request)
        return result
    except ImportError:
        print("Unable to import API.")
        return "Error in server"
    except Exception as err:
        print("Error in server - ")
        print(err)
        return "Error in server"

# run flask app
app.run(debug=True)
