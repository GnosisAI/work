from keras.applications import ResNet50
from keras.applications import imagenet_utils
from PIL import Image
import numpy as np
import io

from algorithms.algorithm import algorithm
from algorithms.preprocess.image import prepare_image

class RxNet(algorithm):

    def __init__(self):
        super().__init__(name='Rxnet')
        self.model =  ResNet50(weights="imagenet")

    def preprocess(self, payload):
        image = payload["image"].read()
        image = Image.open(io.BytesIO(image))
        # preprocess the image and prepare it for classification
        return prepare_image(image, target=(224, 224))

    def predict(self, payload):
        
        data = {"success": False}
        image = self.preprocess(payload)
        # classify the input image and then initialize the list
        # of predictions to return to the client
        preds = self.model.predict(image)
        results = imagenet_utils.decode_predictions(preds)
        data["predictions"] = []
        # loop over the results and add them to the list of
        # returned predictions
        for (_,  label, prob) in results[0]:
            r = {"label": label, "probability": float(prob)}
            data["predictions"].append(r)
        
        data["success"] = True
        # return predictions
        return data