//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)


function onlyEvensFinder(arr){
    let onlyEvens = []
    arr.forEach( num => {
    if(num % 2 === 0){
        onlyEvens.push(num)
    }
    } )
    return onlyEvens
}


function filterVersion(arr2){
    return arr2.filter( num => num %2 === 0 );
    }

console.log(onlyEvensFinder([1,2,3,4,5,6]))

console.log(filterVersion([11,12,13,14,15,16]))
