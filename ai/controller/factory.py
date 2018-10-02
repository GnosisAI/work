from algorithms.RxNet import RxNet
def factoryAlgorithm(name):
    algorithm = None
    if(name == 'RxNet'):
        algorithm = RxNet()
    elif(name == ''):
        algorithm =  ''
    return algorithm