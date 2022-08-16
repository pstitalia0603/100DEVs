//Create an a class and extend it - Can be anything you would like it to be!

class Animal{
    constructor(name){
        this._name = name  //private property -- convention that makes it so it's a convention that says do not rewrite -- underscore signifies to not change!
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()  // from parent
        console.log(`${this.name} barks`)
    }
}

class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this._breed=breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }
}

let simba = new Animal('Simba')

simba.name //"Simba"

simba.name = 'Bob' //nothing happens

let simba2 = new Dog('Simba','Shepard')
let machi = new Dog('The Machine','Pitbull')
let salem = new Cat('Salem','American Shorthair')

let farm = [simba2,machi,salem]

for (a of farm){
    a.speak()
}
