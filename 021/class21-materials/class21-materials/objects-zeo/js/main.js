//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

//properties are variables

stopwatch.color = 'black'
stopwatch.shape ='circle'
stopwatch.brand='brand1'
stopwatch.model='model1'

//methods are functions

stopwatch.start = function (){
    console.log('STARTING')
}

stopwatch.stop = function(){
    console.log('STOPPING')
}

stopwatch.sayBrand = function(){
    console.log(stopwatch.brand)
}
