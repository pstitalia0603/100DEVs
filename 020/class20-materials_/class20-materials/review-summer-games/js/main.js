//Create a function that takes in an array of numbers. Multiply each number together and alert the product.


function arrNums(arr){
    let product=1;
   // arr.forEach(x => product *= x)
   for (let x=0;x <arr.length;x++){
    product *= arr[x]
   }
    alert(product)

}
arrNums([5,4,3,2,1])
