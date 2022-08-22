//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name,age,height,weight,specialMove){
    this.name = name
    this.age = age
    this.height = height
    this.weight = weight
    this.specialMove = specialMove
    this.bestMove = function(){
        console.log('Finish him!')
    }
    this.taunt = function(){
        console.log(`You can't handle my ${this.specialMove}`)
    }
    this.win = function(){
        console.log('Gotcha!')
    }
}

let ryu = new StreetFighter('Ryu',23,"5ft 9in",156,'spinning bird kick')

let george = new StreetFighter('George', 43, "6ft 12in",260,'total tornado')


//as class version

class StreetFighter2{
    constructor(name,age,height,weight,specialMove){
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
        this.specialMove = specialMove
    }
    taunt(){
        console.log(`You can't handle my ${this.specialMove}`)
    }
    win(){
        console.log('Gotcha!')
    }
}

let pikayu = new StreetFighter2('Pikayu',12,"2ft 1in",23,'electricity')
