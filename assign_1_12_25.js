//////////////////////////1/////////////////
// let n = -3
// if(n < 0)
// {
//         throw new RangeError("Max Value 20")
// }
// console.log("n = ",n)
/////////////////2///////////////////
// function checknum(n)
// {
//     if(n %2 == 0)
//          throw new RangeError("num is Even ")
// }
// checknum(20);
//////////////////////3/////////////////
// function calcop(a,b)
// {
//     if(b == 0)
//          throw new RangeError("Can't divide by 0 ")
//     return a/b;
// }
// res = calcop(120,0);
// console.log(res)

////////////////5///////////////
// function validateage(age)
// {
//     if(age < 0 || age > 110)
//     {
//         age = -999
//         throw new RangeError("age limit violated ")
//     }
//     return age;
// }
// age = 0
// function promptDialogue()
// {
//     age = Number(prompt("age = ?"))
//     alert("Age is " + age)
// }
// res = validateage(age);
// if(res<0)
//     promptDialogeExampleg()
// console.log("age = ",res)

function validateInputs(a,b)
{
    if(typeof(a)==="number"&& typeof(b)==="number")
    {    
        return(1)
    }
    else
    {
        throw new RangeEroor("Both should be number")
        return(-1)
    }
}
if(validateInputs(16,'aaa') == 1)
    console.log("Both are numbers")
else
    console.log("At least one is not a number")
