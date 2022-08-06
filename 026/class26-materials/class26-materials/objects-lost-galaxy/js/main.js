//Create a pizza object that has four properties and three methods

let pizza = {}


pizza.size = 'large'
pizza.toppings = ['spinach','onion','cheese','banana peppers']
pizza.crust='thin'
pizza.sauce='light'

pizza.estimatedDeliveryTime=function(){
    console.log('Calculating...')
}

pizza.slices = function(){
    console.log("i want 2 slices")
}


//as constructor
function Pizza(size,toppings,crust,sauce){
    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce
}


let pizzaOne = new Pizza('small',['pepperoni','extra cheese'],'thin','heavy')

let pizzaTwo = new Pizza('medium',['banana peppers','mushrooms'],'thick','light')
