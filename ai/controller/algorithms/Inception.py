from keras.applications import InceptionV3, imagenet_utils
import numpy as np
from keras.preprocessing.image import load_img

from keras.applications.inception_v3 import preprocess_input
from algorithms.algorithm import algorithm
from algorithms.preprocess.image import prepare_image, download_image

class Inception(algorithm):

    def __init__(self):
        super().__init__(name='Rxnet')
        self.model =  InceptionV3(weights="imagenet")

    def preprocess(self, payload):

        url = payload["image"]
        path = download_image(url)
        image = load_img(path)
        image = prepare_image(image, target=(299, 299))
        return np.expand_dims(preprocess_input(image), axis=0)


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
