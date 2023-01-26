//Armstrong Number

// const number = 153;
// const char = number.toString().split("");
// if(sum == number){
//     console.log("It's a Armstrong Number");
// } else{
//     console.log("It's not a Armstrong Number");
// }
// console.log(sum);

// Write a JavaScript program to find the most frequent item of an array.
// Sample array: var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output: a ( 5 times )

// const arr1=[3, 'a', 'b', 'b', 2, 3, 'b', 3, 'a', 2, 4, 9, 3];
// let mf = 1;
// let m = 0;
// let item;
// for (let i=0; i<arr1.length; i++)
// {
//         for (let j=i; j<arr1.length; j++)
//         {
//                 if (arr1[i] == arr1[j])
//                  m++;
//                 if (mf<m)
//                 {
//                   mf=m;
//                   item = arr1[i];
//                 }
//         }
//         m=0;
// }
// console.log(`${item} ( ${mf} times ) `) ;

// write a js to check an input is array or not

// const input = [];
// if(typeof(input) === "object"){
//     console.log("it's an Array");
// } else{
//     console.log("it's not an Array");
// }

// Clone an Array

// const arr = [5,"21",[5,3],7];
// const arr1 = [...arr];
// console.log(...arr);
// console.log(...arr1);

// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// const input = [[5,6],2,7,[5,2],"abc"];

// function extract(arr,n){
//     if(arr == null){
//         return void 0;
//     } else if(n == null){
//         return arr[0];
//     } else if(n < 0){
//         return [];
//     } else{
//         return arr.slice(0,n);
//     }
// }
// console.log(extract(input,2));

// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// const input = [[5,6],2,7,[5,2],"abc"];

// function extract(arr,n){
//     if(arr == null){
//         return void 0;
//     } else if(n == null){
//         return arr.slice(-1);
//     } else{
//         return arr.slice(Math.max((arr.length - n),0));
//     }
// }
// console.log(extract(input,2));

// join elements of an array into string

// const input = ["Dog","Cat", "Tiger", "Crow"];
// function combine(arr,seperator){
//     if ( seperator == null){
//         return arr.toString();
//     } else {
//         return arr.join(seperator);
//     }
// }
// console.log(combine(input,"<"));

// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.

// function modify(number) {
//     const char = number.toString();
//     const result = [char[0]];
//     console.log(char);
//   for (i = 1; i < char.length; i++) {
//     if (char[i-1] % 2 === 0 && char[i] % 2 === 0) {
//       result.push("-", char[i]);
//     } else{
//       result.push(char[i]);
//     }
//   }
//   return result;
// }
// console.log(modify(12346586).join(''));

// js to sort an array

// let sort = (...numbers) => {
// for(let i= 0;i<numbers.length; i++){
//   for(let j=0; j<numbers.length; j++){
//     if(numbers[j] > numbers[j + 1]){
//       [numbers[j], numbers[j + 1]] = [numbers[j +1], numbers[j]];
//     }
//   }
// }
//   console.log(numbers);
// }
// sort(6,3,9,0,-1,5);

// Write a JavaScript program to find the most frequent item of an array.

// const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, 3, 2, 4, 9, 3];
// let count =1;
// let m = 0;
// let item;
// for(i=0;i<arr1.length;i++){
//   for(j=i;j<arr1.length;j++){
//     if(arr1[j] == arr1[i]){
//       m++;
//     }
//     if(count < m){
//       count = m;
//       item = arr1[i];
//     }
//   }
//   m = 0;
// }
// console.log(`${item} is repeated ${count} times`);

// Write a JavaScript program which prints the elements of the following array.

// const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for(let i in a){
//   console.log(`row is ${i}`);
//   for(let j in a[i]){
//     console.log(a[i][j]);
//   }
// }

// Write a JavaScript program to find the sum of squares of a numeric vector.
// const numbers = [2,1,4,5];
// let sum =0;
// for(i=0;i < numbers.length;i++){
//   sum += Math.pow(numbers[i],2);
// }
// console.log(sum);

// Write a JavaScript program to compute the sum and product of an array of integers.

// const numbers = [2,1,4,5];
// let sum =0;
// let multi = 1;
// for(i=0;i < numbers.length;i++){
//   sum += numbers[i];
// }
// for(i in numbers){
//   multi *= numbers[i];
// }
// console.log(`summation is (${sum}) and Multiplication is (${multi})`);

// Remove duplicates from a JavaScript array

// const numbers = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
// console.log(... new Set(numbers));

// function removeDuplicates(nums){
//   let out = [],
//   obj = {};

//   for(i=0 ; i < nums.length ; i++){
//     obj[nums[i]] = 0;
//   }
//   for(x in obj){
//     out.push(x);
//   }
//   return out;
// }

// let result = removeDuplicates(numbers);
// console.log(numbers);
// console.log(result);

//  Write a JavaScript program to find the leap years in a given range of years.

// function findLeapYear(firstYear, lastYear) {
//   let yearRange = [];

//   for (i = firstYear; i <= lastYear; i++) {
//     yearRange.push(i);
//   }

//   let result = [];
//   yearRange.forEach((year) => {
//     if (testYear(year)) {
//       result.push(year);
//     }
//   });
//   return result;
// }

// function testYear(year){
//   if(year%4 == 0 || year % 400 ==0){
//     return year;
//   } else{
//     return false;
//   }
// }
// console.log(findLeapYear(2000,2020));

//  Write a JavaScript program to perform a binary search.

// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

// function summation(arr1, arr2) {
//   let pos = 0;
//   let result = [];
//   if (arr1.length === 0) {
//     return "Array1 is null";
//   }

//   if (arr2.length === 0) {
//     return "Array2 is null";
//   }
//   while (pos < arr1.length && pos < arr2.length) {
//     result.push(arr1[pos] + arr2[pos]);
//     pos++;
//   }

//   if(pos == arr1.length){
//     for(let i = pos; i < arr2.length ; i++){
//         result.push(arr2[i]);
//       }
//   }

//   if(pos == arr2.length){
//     for(let i = pos; i < arr1.length ; i++){
//         result.push(arr1[i]);
//       }
//   }

//   return result;
// }

// console.log(summation([2,8,4,3,1],[0,5,3,7,4,6]));

//  Write a JavaScript program to find duplicate values in a JavaScript array.

// function findDuplicates(arr) {
//   let result = [],
//     obj = {};

//   arr.forEach((item) => {
//     if (!obj[item]) obj[item] = 0;
//     obj[item] += 1;
//   });
//   console.log(obj);
//   for (x in obj) {
//     if (obj[x] >= 2) {
//       result.push(x);
//     }
//   }
//   return result;
// }

// console.log(findDuplicates([1, 3, 5, 2, 3, 5, 1, 6, 9, 3]));


// Write a JavaScript program to compute the union of two arrays.

// function union(arra1, arra2) {
  
//   if ((arra1 == null) || (arra2==null)) 
//     return void 0;
  
//   let obj = {};
 
//   for (let i = arra1.length-1; i >= 0; -- i){
//     obj[arra1[i]] = arra1[i];
//   }
 
//   for (let i = arra2.length-1; i >= 0; -- i){
//     obj[arra2[i]] = arra2[i];
//   } 
//   let  result = [];
 
//   for (let n in obj)
//   { 
//     if (obj.hasOwnProperty(n)){
//        result.push(obj[n]);
//     }
//   }
 
//   return  result;
// }
// console.log(union([1, 2, 3], [100, 2, 1, 10]));


// Write a JavaScript function to find an array contains a specific element.

// function removeElement(arr,element){
//   let index = arr.indexOf(element);
//   if(index > -1){
//     arr.splice(index,1);
//   } else{
//     return "The element is not in this array."
//   }
//   return arr;
// }
// console.log(removeElement([2,4,5,6,8,0],8));


// Write a JavaScript function to move an array element from one position to another.

// function move(arr, old_index, new_index) {
//   while (old_index < 0) {
//       old_index += arr.length;
//   }
//   while (new_index < 0) {
//       new_index += arr.length;
//   }
//   if (new_index >= arr.length) {
//       var k = new_index - arr.length;
//       while ((k--) + 1) {
//           arr.push(undefined);
//       }
//   }
//    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
//  return arr;
// }

// console.log(move([10, 20, 30, 40, 50], 0, 2));

// console.log(move([10, 20, 30, 40, 50], -1, -2));

