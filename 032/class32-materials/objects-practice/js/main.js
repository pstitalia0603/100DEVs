// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism

class Contractor{
    constructor(name,role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, my name is ${this._name}. I am on the ${this._role} team at #100Devs!`)
    }
}

// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, my name is ${this._name}. I am on the ${this._role} team at #100Devs!`)
//     }
// }


class Front extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, my name is ${this._name}. I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}


// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, my name is ${this._name}. I am on the ${this._role} team at #100Devs and I use ${this._tech}.`)
//     }
// }


class Back extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, my name is ${this._name}.I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}


// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, my name is ${this._name}. I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }

let ella = new Contractor('Ella','front-end')
let nico = new Front('Nico','frontend','react')
let gianluca = new Back('Gianluca','fullstack','node')

let agency = [ella,nico,gianluca]

for (person of agency){
    person.sayHello()
}

// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
