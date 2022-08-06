//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

//properties
function MakeProSkater(skateBoardColor,age,yearsExperience,handedNess){
    this.boardColor=skateBoardColor
    this.age=age
    this.yearsExperience=yearsExperience
    this.handedNess=handedNess
}

//methods
this.bestMove = function(){
    console.log('Xeusd')
}

this.flip=function(){
    console.log('KickFlip!')
}

this.taunt=function(){
    console.log(`Don't make me use my ${this.bestMove}`)
}

let skater1 = new MakeProSkater('blue',21,7,'left')
let skater2 = new MakeProSkater('red',27,9,'right')
