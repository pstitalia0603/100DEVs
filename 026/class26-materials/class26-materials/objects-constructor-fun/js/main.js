//Create a constructor with 4 properties and 3 methods

function Pizza(size,toppings,crust,sauce){
    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce
    this.estimatedDeliveryTime = function(){
        console.log('Calculating...')
    }
}


let pizzaOne = new Pizza('small',['pepperoni','extra cheese'],'thin','heavy')

let pizzaTwo = new Pizza('medium',['banana peppers','mushrooms'],'thick','light')
