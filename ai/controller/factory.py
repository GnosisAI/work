from algorithms import ResNet, Inception, NasNet, Test
def factoryAlgorithm(name):
    algorithm = None
    if(name == 'ResNet'):
        algorithm = ResNet.ResNet()
    elif(name == 'Inception'):
        algorithm = Inception.Inception()
    elif(name == 'Test'):
        algorithm = Test.Test()
    elif(name == 'NasNet'):
        algorithm = NasNet.NasNet()
    else:
        algorithm = 'not Found'
    return algorithm
