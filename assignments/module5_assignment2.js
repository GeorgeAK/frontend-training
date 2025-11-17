//////////////////task 1    division by 0 as a custom error thrown
// function div(a,b)
// {
//     if(b === 0)
//     {
//         throw new RangeError("division by 0 not allowed")
//     }
// }
// console.log(div(10,0))
// ////////////////////task 2 array and try catch throw////////////
// let ar = [500,200,150,0,20,10]
// for(i =0;i<6;i++)
// {
//     try
//     {
//         console.log(1000/ar[i])
//     }
//     catch(error1)
//     {
//         if(arr[i] === 0)
//             throw("Division by 0 error")
//     }
//     // finally
//     // {
//     //     console.log("Array element is zero")
//     // }
// }

////////////////////task 2 array and try catch throw////////////
function div(a,b)
{
    try
    {
        c = a/b

    }
    catch(error1)
    {
        throw new RangeError("division by 0 not allowed")
    }
}
let ar = [500,200,150,0,20,10]
for(i =0;i<6;i++)
{
        console.log(div(1000,ar[i]))
}