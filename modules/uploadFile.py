from werkzeug.utils import secure_filename
import os

ALLOWED_EXTENSIONS = {'csv'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def execute(request, UPLOAD_FOLDER):
    file = request.files['csv']
    if file.filename == '':
        return "No selected file"
    elif file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        # file.save(os.path.join(UPLOAD_FOLDER, filename))      # use for multiple users
        file.save(os.path.join(UPLOAD_FOLDER, 'sample.csv'))    # use for single user
        os.system("ls")
        return "success"
    return "failed"
