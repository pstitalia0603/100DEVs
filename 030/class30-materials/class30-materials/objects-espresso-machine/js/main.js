//Create an espresso machine class that makes machines with 4 properties and 3 methods


class EspressoMachine{
    constructor(automatic,size,make,model){
        this.automatic = automatic
        this.size = size
        this.make = make
        this.model = model
    }
    coffeeType(){
        console.log('Lungo!')
    }
    baristaSetting(){
        console.log('Need a pro!')
    }
    fillWater(){
        console.log('Need a fill up!')
    }
}

let eMachine1 = new EspressoMachine(true,'large','illy','p22')
