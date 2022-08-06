//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows =['show1','show2','show3']

tvShows.forEach(x => console.log(x))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let arrNums = [45,34,23,33,22,916]

let onlyEvens = arr => arr.filter(n => n%2 === 0)

console.log(onlyEvens(arrNums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumSecondLowAndHigh(arr){
    let sorted = arr.sort((a,b) => a-b)
    alert ( sorted[1] + sorted[sorted.length -2])
}
alert("This is the sort: ")
sumSecondLowAndHigh([2,3,1,5,4])
