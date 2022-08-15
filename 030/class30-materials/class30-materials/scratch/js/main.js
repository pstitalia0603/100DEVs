//Non-object version

// let hourlyRate = 250
// let hours = 160
// let taxRate = .35

// function calculateProfit(rate,numOfHours,taxes){
//     return rate* numOfHours * (1-taxes)
// }

// function holdForTaxes(profitMade){
//     return hourlyRate * hours - profitMade
// }

// let profit = calculateProfit(hourlyRate,hours,taxRate)

// let taxesHeld = holdForTaxes(profit)

// console.log(`Profit: ${profit}`)

// console.log(`Taxes Withheld: ${taxesHeld}`)

//fusing data and functionality into object == Encapsulation
//turn into an object
let seriousBusienssPerson = {
    hourlyRate:250,
    hours:160,
    taxRate:.25,
    calculateProfit: function(){
        return this.hourlyRate * this.hours * (1- this.taxRate)
    },
    calculateTaxesHeld: function(){
        return this.hourlyRate * this.hours - this.calculateProfit()
    }
}
