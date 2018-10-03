from algorithms.RxNet import RxNet
def factoryAlgorithm(name):
    algorithm = None
    if(name == 'RxNet'):
        algorithm = RxNet()
    else:
        algorithm = RxNet()
    return algorithm