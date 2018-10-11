from keras.preprocessing.image import img_to_array
from keras.applications import imagenet_utils
import numpy as np
import urllib

def prepare_image(image, target):
    # if the image mode is not RGB, convert it
    if image.mode != "RGB":
        image = image.convert("RGB")
    # resize the input image and preprocess it
    image = image.resize(target)
    image = img_to_array(image)
    # return the processed image
    return image
def download_image(url):
    path = "./static/python.jpg"
    urllib.request.urlretrieve(url,path)
    return path
