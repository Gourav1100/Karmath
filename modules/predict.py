import tensorflow as tf
import sqlite3
def execute(request):
    req = request.get_json(force=True)
    print(req)
    location = ["./json_model/karmath.json", "./json_model/karmath.h5"]
    try:
        file = open(location[0])
        model = file.read()
        file.close()
        model = tf.keras.models.model_from_json(model)
        model.load_weights(location[1])
        yPred = model.predict(req)
        conn = sqlite3.connect('./db.db')
        conn.execute(f"INSERT INTO history(email, date, efficiency) VALUES({request['email']}, , {yPred[0] * 100})")
        return "Success"
    except:
        print("Model not found.")
        return "Failed"
