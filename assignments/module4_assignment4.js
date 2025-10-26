/////////Removing Duplicates from an Array//////
function removedups(arr)
{
    //if(!arr instanceof(array))
    if(!arr instanceof Array)
    {
        console.log("Bad Array")
        return
    }
    let set1 = new Set(arr)
    let newarr = [...set1]
    return(newarr)
}
let arr1 = [20,40,50,30,20,30,60]
newarr = removedups([20,40,50,30,20,30,60])
console.log(newarr)


// // finding bigger of the 2 numbers
// function findbig(a,b)
// {
//     //if(a instanceof(Number)&& b instanceof(Number))
//     if(typeof a !== "number" || typeof b !== "number")
//     {
//         console.log("Enter proper number")
//         return
//     }
//     else
//     {
//         if(a > b)
//             return(a)
//         return(b)
//     }
// }
// big = (findbig(20,"A"))
// console.log("big is ",big)