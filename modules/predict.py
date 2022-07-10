import keras
def execute(parameters):
    location = ["./json_model/karmath.json", "./json_model/karmath.h5"]
    try:
        file = open(location[0])
        model = file.read()
        file.close()
        model = keras.models.model_from_json(model)
        model.load_weights(location[1])
        yPred = model.predict(parameters)
        return yPred
    except:
        print("Model not found.")
        return False
