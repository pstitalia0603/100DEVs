//Create an array of movie titles. Loop through the array and add each element to the h2.

let movies =['title1','title2','title3']

// for (let i=0;i<movies.length;i++){
//     document.querySelector('h2').innerText += movies[i];
// }

movies.forEach((x,i) => document.querySelector('h2').innerText=movies)



//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

let nums = [10,20,30]

// for (let i2=0,i2<nums.length;i2+=3){
//     nums[i2]
// }

nums.forEach((item,i) => {
    nums[i]+=3
})

console.log(nums)



//Find the average of all the numbers from question two

let sum = 0

// nums.forEach((num0)=> sum += num){

// }

let nums2 = [10,20,30]

for (let i=0;i<nums2.length;i++){
    sum+=nums2[i]
    //sum = sum + nums[i]
}

console.log("average: " + sum/nums2.length)
