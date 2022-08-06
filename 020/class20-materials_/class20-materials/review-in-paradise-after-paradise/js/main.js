// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".


function takeArray(nums){
    if (nums[0] < nums[nums.length-1]){
        alert('Hi')
    } else if (nums[0] > nums[nums.length-1]){
        alert('Bye')
    } else {
        alert('We close in an hour')
    }
}

takeArray([30,40,34,23,99])

takeArray([4,4,5,4,4])

takeArray([4,5,6,8,9,11])
