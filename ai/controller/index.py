from factory import factoryAlgorithm
import flask
app = flask.Flask(__name__)
@app.route("/predict/<name>", methods=["POST"])
def predict(name):
    model = factoryAlgorithm(name)
    data = {}
    payload = {}
    if flask.request.method == "POST":
        if flask.request.files.get("image"):
            payload["image"] = flask.request.files["image"]
            data = model.predict(payload)
    # return the data dictionary as a JSON response
    return flask.jsonify(data)
if __name__ == "__main__":
    print(("* Loading Keras model and Flask starting server..."
        "please wait until server has fully started"))
    app.run()