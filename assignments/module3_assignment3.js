///////////// the html file is akg_assignment.html/////////////////

//let num1 = Number(prompt("Enter num1"))
//let cartValue = Number(prompt("Enter Cart Value ",400))
//if(Number.isNaN(num2)==0)
//    alert(num1 + "  is a number")
//if(Number.isNaN(num1)==0)
//    alert(num1 + "  is a number")
///////////////////11111111111111111 calculator/////////////////////
// let res = 0
// let num1 = Number(prompt("Enter num1 ",400))
// let num2 = Number(prompt("Enter num2 ",5))
// let opr = (prompt("Enter operation","+"))
// let isnum1= true
// let isnum2 = true
// let opvalid = false
// if(opr == "+" || opr == "-" || opr == "*" || opr == "/")
//     opvalid = true
// isnum1 = Number.isNaN(num1)?false:true
// isnum2 = Number.isNaN(num2)?false:true

// if(isnum1)
// {
//     if(isnum2)
//     {
//         if(opvalid)
//         {

//             if( opr == "+")
//             {
//                 res = num1+num2;
//                 alert("The result is "+ res)
//             }
//             else if( opr == "/")
//             {
//                 res = num1/num2;
//                 alert("The result is "+ res)
//             }
//             else if( opr == "-")
//             {
//                 res = num1-num2;
//                 alert("The result is "+ res)
//             }
//             else if( opr == "*")
//             {
//                 res = num1*num2;
//                 alert("The result is "+ res)
//             }
//         }
//         else
//             alert("Your operator is not valid")
//     }
//     else
//         alert("your second number is invalid")
// }
// else
//     alert("your first number is invalid")

////////////////22222222222222222222 positive negative///////////////
// let num = Number(prompt("enter a number",400))
// if(num < 0)
//     alert(num + " is negative")
// else
//     alert(num + "  is positive")

////////////////33333333333333333 even or odd///////////////
// let num = Number(prompt("enter a number",400))
// if(num % 2 == 0)
//     alert(num + " is Even")
// else
//     alert(num + "  is Odd")



//////////////////////444444444444444444444 greater of 2////////////////
// let a = Number(prompt("enter a number",4))
// let b = Number(prompt("enter a number",3))
// if(a > b)
//     alert(a + " is greater than" + b)
// else
//     alert(b + " is greater than" + a)



///////////////////////555555555555555Grade on marks///////////////////
// let mark = Number(prompt("Enter the mark ",90))
// let grade = 'A'
// if(mark >= 90)
//     grade = 'A'
// else if (mark >= 80)
//     grade = 'B'
//     else if(mark >= 70)
//         grade = 'C'
//         else if(mark >= 60)
//             grade = 'D'
//             else if(mark >=50)
//                 grade = 'E'
//                 else 
//                     grade = 'F'
// alert("grade for mark = "+ mark + " is " + grade)


////////////////////6666666666666 ticket price on age////////////////////
// let ticketPrice = 100
// let age = Number(prompt("Enter age",20))
// if(age < 5)
//     ticketPrice = 0
// else if(age < 60)
//     ticketPrice = 50
//     else ticketPrice = 30
// alert("For your age of "+age+ "  ticket price is "+ ticketPrice)

////////////////////////777777777777777 Leap Year    NOT OK     ////////////////
// let year = Number(prompt("Enter a year",2000))
// let isLeap = false
// // if(year % 400 == 0 || year % 100 == 0 && year % 400 == 0)
// //     alert("the year "+ year + "  is a leap year")
// // else
// //     alert("the year "+ year + "  is not a leap year")
// if(year % 4 != 0)
//     isLeap = false
// else if(year % 100 != 0)
//     isLeap = true
//     else if(year % 400 != 0)
//         isLeap = false
// if(isLeap)
//     alert("The year "+ year + " is a Leap Year")
// else
//     alert("The year "+ year + " is a Not a Leap Year")


////////////////////8888888888888888888Discount on purchase amount /////////////
// let disc = 0
// let PA = Number(prompt("Enter Purchase Amount",400))
// if(PA > 100)
//     if(PA < 200)
//         disc = 20
//     else if(PA < 500)
//         disc = 50
//         else
//             disc = 100
// alert("For Purchase amout = "+ PA + "Discount is " + disc)


////////////////////////////999999999999999 Time based greeting //////////////
// dt = new Date()
// let hr = dt.getHours()
// let min = dt.getMinutes()
// let secs = dt.getSeconds()
// //alert("hr = "+ hr + "  Mins = "+ min + "  secs = "+secs)
// if(hr <12)
//     alert("hr = "+ hr + "  Mins = "+ min + "  secs = "+secs+ " Good Morning")
// else if(hr < 17)
//     alert("hr = "+ hr + "  Mins = "+ min + "  secs = "+secs + "  Good Evening")
// else 
//     alert("hr = "+ hr + "  Mins = "+ min + "  secs = "+secs+ "  Good Night")



///////////////////////10101010101010  random number guessing//////////////////
// let num = Math.random()
// let max = 10
// let min = 5
// let num1 = Number(prompt("Entetr a number betwen  "+min + " and"+ max))

// //alert("num = " +num)
// num = Math.floor(Math.random()*(max -min+1)+min)
// alert("num = "+ num)
// if(num == num1)
//     alert("You win")
// else
//     alert("You lost it")

/////////////////////BMI CALCULATION//////////////////////


let age = Number(prompt("Enter Height",1.78))
let weight = Number(prompt("Enter weight",75))
let bmi = weight/(age*age)
if(bmi < 16)
    alert("For "+bmi +"  you are  severely thin")
else if(bmi < 17)
    alert("For "+bmi +"  you are  Moderate thin")
else if(bmi < 18.5)
    alert("For "+bmi +"  you are  Mild thin")
else if(bmi < 25)
    alert("For "+bmi +"  you are  Normal")
else if(bmi < 30)
    alert("For "+bmi +"  you are  Overweight")
else if(bmi < 35)
    alert("For ",+bmi +"  you are Obese 1")
else if(bmi < 40)
    alert("For "+bmi +"  obese 2")
else
    alert("For  "+ bmi + "  you are obese 3")


