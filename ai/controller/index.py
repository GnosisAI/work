from factory import factoryAlgorithm
import flask
from algorithms.preprocess.image import download_image
import json
app = flask.Flask(__name__)
@app.route("/predict/<name>", methods=["POST"])
def predict(name):
    data = {"work":"false"}
    if flask.request.method == "POST":
        model = factoryAlgorithm(name)
        url = flask.request.form["image"]
        path_img = download_image(url)
        payload = {"image": path_img}
        data = model.predict(payload)
        
    # return the data dictionary as a JSON response
    return json.dumps(data)
if __name__ == "__main__":
    print(("* Loading Keras model and Flask starting server..."
        "please wait until server has fully started"))
    app.run()