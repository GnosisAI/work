from algorithms.algorithm import algorithm
class Test(algorithm):
    def __init__(self):
        super().__init__(name='Rxnet')
    def predict(self, value):    
        msg = {"sucess": True}
        return msg

