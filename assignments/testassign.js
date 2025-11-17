// /////////////// 1   division by 0 caught and thrown my own method//////////
// function divide(a,b)
// {
//     let msg = "Division by 0 not allowed",c;
//     try
//     {
//         c = a/b;
//         if(b === 0)
//         {
//             msg = "Division by 0 detected"
//             throw msg;
//         }
//     }
//     catch(error)
//     {
//         console.log("Error caught",error);
//     }
//     console.log("result is ",c);
// }
// divide(1000,40);
// divide(1000,0);
//////////////////// 2 ///// Elements of array sent to 
// function divide(a,b)
// {
//     let msg = "Division by 0 not allowed",c;
//     try
//     {
//         c = a/b;
//         if(b === 0)
//         {
//             msg = "Division by 0 detected"
//             throw msg;
//         }
//     }
//     catch(error)
//     {
//         console.log("Error caught",error);
//     }
//     console.log("result is ",c);
// }
// let arr = [10, 20, 0, 33];
// for(let i = 0; i <4; i++)
//     divide(1000,arr[i]);
// /////////////// 2  sum of array and thrown my own method//////////
// let arr = [10, 20, 0, 33];
// function sumArray(arr)
// {

//     if(!arr instanceof Array)
//         throw "Object must be an array"
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(isNaN(arr[i]))
//             throw "Not a number"
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArray([2,3,'l']))
//import math
/////////////////3.    max of an array//////////////////////////
// function findmax(arr)
// {
//     if(!arr instanceof Array)
//         throw "Not an array"

//     return(Math.max(...arr))
// }
// let arr = [20,40,10,5];
// let max = findmax(arr);
// console.log(max)
//////////////4.///////////prime or not ///////////////////////
// function checkprime(num)
// {
//     for(i = 2;i<num/2;i++)
//     {
//         if(num % i == 0)
//             return(0)
//     }
//     return(1)
// }
// let num = 9
// console.log("Num ",num, checkprime(num)?"is Prime Number":"is Not a Prime Number");
// //console.log(checkprime(num)?"Prime Number":"Not Prime");

/////////////////5./////////fibonacci number/////////////
function findfib(num)
{
    if(num == 0 || num == 1)
        return(num)
    return(findfib(num -1)+findfib(num - 2))
}
let num = 5;
console.log("fib of ",num ,"is ",findfib(num));