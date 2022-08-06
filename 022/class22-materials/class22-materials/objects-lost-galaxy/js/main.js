//Create a mouse object that has four properties and three methods

let mouse = {}

mouse.numButtons = 3;
mouse.usbInput = true;
mouse.color='red';
mouse.stationary=false;

mouse.leftClick = function(){
    console.log('LEFT CLICK')
}

mouse.rightClick = function(){
    console.log('Right Click')
}

mouse.scroll = function(){
    console.log('Scrolling!')
}


//constructor as template for objects

function MakeMouse(mouseNumButtons,mouseUsbInput,mouseColor,mouseStationary){
    this.numButtons = mouseNumButtons
    this.usbInput = mouseUsbInput
    this.color = mouseColor
    this.stationary = mouseStationary
    this.leftClick = function(){
        console.log('Left Click')
    }
    this.rightClick = function(){
        console.log('Right Click')
    }
    this.scroll = function(){
        alert(`Scrolling is connected to ${this.usbInput} USB devices`)
    }
}

let mouse1 = new MakeMouse(3,false,'green',true)
