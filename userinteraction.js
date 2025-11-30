//console.log("This is the script text")
                // function helloworld()
                // {
                //     console.log("Hello World")
                // }
                // function confirmDialog()
                // {
                //     let decision = window.confirm("is it ok?")
                //     console.log(decision)
                // }
                // function confirmDialog1()//confirmDialog1()
                // {
                //     let remove = confirm("remove data")
                //     let message = remove?"Deleting Data":"Cancelled1"
                //     console.log(message)
                // }
                // function promptDialogeExample()
                // {
                //     let name = window.prompt("what is your name ","George")
                //     name = name ? name: "anonymouse"
                //     let age = prompt("Hello" + name  + "How old are you?")
                //     alert(name+ "is " + age + "old")
                // }
                //  let isUserReady = confirm("are you ready")
                //  console.log(isUserReady)
                //  if(isUserReady)
                //      alert("User Ready")
                // else
                //     alert("User Not Ready")


                //  let unitPrice = 10
                // let pieces = prompt("How many pieces",0)
                // if(pieces> 0)
                // {
                //     let total = unitPrice * pieces;
                //     console.log(total)
                // }
                // console.log(total);


                // let userAge=prompt("Enter age")
                // let isFemale = false
                // let points = 703
                // let cartValue = 299
                // let shippingCost = 999
                // if(userAge > 21)
                // {
                //     if(cartValue >= 300 || points >= 500)
                //     {
                //         shippingCost = 0
                //     }
                // }
                // alert("shipping Cost "+shippingCost)
                // if(userAge > 21 &&(cartValue >= 300 || points >= 500))//combined
                //      shippingCost = 0
                // alert("shipping Cost "+shippingCost)// 


                // let num = -10
                // if(num >= 0)
                //     console.log("Positive")
                // else
                //     console.log("Negative")
                // 
                // let isUserReady = confirm("are you ready")
                //  console.log(isUserReady)
                //  if(isUserReady)
                //      alert("User Ready")
                // else
                //     alert("User Not Ready")

                // let age = prompt("enter age ")
                // if(age >= 18)
                //     alert("able to vote")
                // else
                //     alert("not to vote")

                //  let age = prompt("enter age ")
                //  if(age >= 18)
                //      alert("able to vote")
                //  else if(age >= 13)
                //     alert("Teenager Welcome")
                //  else
                //      alert("not to vote")

                // let number = prompt("enter number")
                // if(number < 20)
                //     alert("< 20")
                // else if(number < 40)
                //     alert("< 40")
                // else if(number < 60)
                //     alert("< 60")
                // else if(number < 80)
                //     alert("< 80")
                // else
                //     alert("> 80")
                

//  let userage = prompt("enter User age")
//  let parentsApproval = prompt("Parents Approval",true)  
//  if(userage < 21 && parentsApproval)
//     ordervalid = true 
//  if(userage < 21 && !parentsApproval)
//     ordervalid = false
// let  cartValue = prompt("CartValue",300) 
// let points = prompt("Points",500) 
// let shippingCost = 100
// let orderValid = true
// let insuranceCost = 40
// if(userage < 21 && parentsApproval)
//     shippingCost = shippingCost - 5
// if(userage > 65)
//     shippingCost = 0
// if((userage > 21 && userage < 65) && (parentsApproval || cartValue > 300 || points > 500))
//         shippingCost = 0
// let hasInsurance = prompt("Has insurance",true) 
// let promoCode = prompt("Promocode",true) 
// if(hasInsurance && orderValid && !promoCode)
//     shippingCost = shippingCost+insuranceCost
// alert("shipping cost = "+shippingCost)


// let num = prompt("Enter a num",4)
// if(num % 2 == 0)
//     alert("the is even")
// else
//     alert("then num  is dodd")


// let name1 = prompt("enter name","George")
// let age = prompt("Enger age ",21)
// if(age >= 21)
//     alert(name1+ "Your can vote")
// else
//     alert(name1 + "Wait to vote")

// let totprod = prompt("enter total num of prods",10)
// let unitprice = prompt("Enter unit price",10)
// alert("The total price = " + totprod*unitprice)

// let gender = prompt("Enter Gender",'M')
// let age = prompt("Enter age",21)
// if(gender == 'M')
//     if(age >= 21)
//         alert("Boy you can marry")
//     else
//         alert("please wait "+ (21 - age) + " to mary")
// else
//     if(age >= 18)
//         alert("Girl, you can marry")
//     else
//         alert("Girl, please wait "+ (18 - age) + " To marry")

// let mark = prompt("Enter mark ",60)
// if(mark >= 90)
//     prompt("for ",+ mark + "  grade is A")
// else if(mark >= 80)
//     prompt("for " + mark +" grade is B")
// else if(mark >= 70)
//     prompt("for " + mark +" grade is C")
// else if(mark >= 60)
//     prompt("for " + mark +" grade is D")
// else if(mark >= 50)
//     prompt("for " + mark + "  grade is E")
// else
//     prompt("for this " + mark + "  you get Fail")


// let m1 = Number(prompt("Enter m1 ",61))
// let m2 = Number(prompt("Enter m2 ",62))
// let m3 = Number(prompt("Enter m3 ",63))
// let m4 = Number(prompt("Enter m4 ",64))
// let m5 = Number(prompt("Enter m5 ",65))
// //let perc = 5.5
// console.log(m1)
// console.log(m2)
// console.log(m3)
// console.log(m4)
// console.log(m5)
// console.log(m1 + m2 + m3 + m4 + m5)
// let perc = (m1 + m2 + m3 + m4 + m5)/5
// alert ("Your perc is " + perc)


// let orderValid = true
// let shippingCost = 130
// let hasParentApproval = prompt("has parent Approval ?",true)
// let userAge = Number(prompt("Give User Age ",25))
// let cartValue = Number(prompt("Enter Cart Value ",400))
// let points = Number(prompt("Enter points ",600))
// let insuranceCost = 30
// let hasInsurance = true
// let hasPromoCode = false
// if(userAge < 21 && hasParentApproval == false)
//     orderValid = false
// if(userAge < 21 && hasParentApproval)
//     shippingCost = shippingCost - 5
// if(userAge > 65)
//     shippingCost = 0
// if(userAge > 21 && userAge < 65 && hasParentApproval == true ||
//    userAge > 21 && userAge < 65 && cartValue > 300 ||
//    userAge > 21 && userAge < 65 && points > 500)
//     shippingCost = 0
// if(orderValid == true && hasInsurance == true && hasPromoCode == false)
//     shippingCost = shippingCost + insuranceCost
// alert("Shipping Cost = "+shippingCost)
// console.log("Shipping cost = ",shippingCost)



// let price = 48
// let shippingCost = price > 50?0:5
// console.log(`price = ${price}, shipping = ${shippingCost}`)
// // for variables to be written, back tick is to be used!!!!
// // running is by node filename.js

// let start = confirm("start")
// //start?alert("Yes Started"):alert("Aborted")
// let msg = start?"Yes started":"Aborted"
// alert(msg)


// let age = 20
// let msg = age>=18?"Adult":"Minor"
// console.log("checking for age ",msg)

// let number = 20
// let result = number % 2 === 0?"Even":"odd"
// console.log("checking for odd even ",result)


// let isLoggedIn = true
// let msg = isLoggedIn ? "welcome back":"Please log in"
// console.log("logging msg ",msg)


// let score = 85
// let grade = (score >= 90)?"A":(score >= 80)?"B":(score >= 70)?"C":
// (score >= 60)?"D":"F"
// console.log("grade = ",grade)

// let gate = prompt("Engter gate name")
// let win = false
// switch (gate)
// {
//     case "a":
//         alert("gate a empty")
//         break
//     case "b":
//         alert("gate b wins")
//         win = true
//         break
//     case "c":
//         alert("gate c empty")
//         break
//     default:
//         alert("Enter a proper gate")
//         break
// }
// if(win)
//     alert("winner")

// let num = 20
// switch(num)
// {
//     case 1:
//         console.log("One")
//         break;
//     case 2:
//         console.log("Two")
//         break;
//     case 3:
//         console.log("Three")
//         break;
// default: 
//     console.log("Unknown number")
//     break;
// }

// let num = Number(prompt("Give a number ",80))
// if(num >90 && num < 110)
//     alert("Bingo")
// else
//     alert("Try again")

// let num1 = Number(prompt("Enter num1 ",400))
// if(num1<10)
//     alert(num1 +"is less than 10")

// let n = 0
// while(n < 90)
// {
//     console.log(n)
//     n+=10
// }
//  let isOver = false
//  let counter = 1
//  while(isOver == false)
//  {
//     let continueLoop = confirm(`[${counter}] continue the loop`)
//     isOver = continueLoop == true?false:true
//     counter = counter+1
//  }
//  alert("completed the loop")

//   let isOver = false
//   let counter = 1
//   while(!isOver)
//   {
//      isOver = !confirm(`[${counter++}] continue the loop`)
//   }
//   alert("completed the loop")

//let fruits = ["Banana","Grapes","Apple","Pineapple"]
// let index = 0
// let myline = ""
// while(index < fruits.length)
// {
//     //console.log(fruits[index])
//  //   myline += fruits[index]+" "
//     document.write(fruits[index]+" ") // only for browser
//     index++
// }
// console.log(myline)
// console.log(fruits.join(" ")//join with space 


// let num = 2
// while(num <=20)
// {
//     console.log(num)
//     num+=2;
// }
// let num = 2
// let str = ""
// while(num <=20)
// {
//     num+=2
//     str+=num
//     str+=" "
//     //console.log(num)
//     //num+=2;
// }
// console.log(str)

// let num = 20
// let str = ""
// while(num >= 1)
// {
//     str+=num
//     num-=2
//     str+=" "
// }
// console.log(str)

// let isOver
// let counter = 1
// do
// {
///                   within back tic the entire message having variable and message
//// any variable to be represented is within [] and within {} but before { the $
//     isOver= !confirm(`[${counter++}] continue the loop`)
// }while(!isOver)


// let condition = false
// while(condition)
// {
//     console.log("A while loop exec")
// }

// do
// {
//     console.log("A do while condition exec")
// }while(condition);

// let str = "George"
// let i = 0;
// do
// {
//     console.log(str[i])
//     i++
// }while(i<str.length);

// for(let i = 0;i<5;i++)
//     console.log(i)

// let vals = [10,20,30,60]
// let sum = 0
// for(let i = 0;i<vals.length;i++)
//     sum = sum + vals[i]
// console.log("sum = "+sum)

// let vals = [ 4,6,7,8,3,2]
// let evec= 0;
// for(let i = 0;i <vals.length;i++)
//     if(vals[i]%2=== 0)
//         evec++
// console.log("Even count = "+evec)

// let fruits = ["Jackfruit","Apple","Banana","Pineapple"]
// for(let i = fruits.length-1;i>=0;i--)
//     console.log(fruits[i])

// let names= []
// let isOver = false
// while (!isOver)
// {
//     let name = prompt("enter a name")
//     if(name != null)
//         names.push(name)
//     else
//         isOver = true
// }
// for(let i = 0;i<names.length;i++)
//     console.log(names[i])

// let vals=[10,30,50,70,100,150,200,300]
// console.log("<-------- left to right ---------->")
// for(i = 0;i<vals.length;i++)
//     console.log(vals[i])
// console.log("<-------- right  to left---------->")
// for(i = vals.length;i>=0;i--)
//     console.log(vals[i])
// console.log("<--------alternat ---------->")
// for(i = 0;i<vals.length;i+=2)
// //     console.log(vals[i])
// let vals=[10,30,50,70,100,150,200,300]
// for (a of vals)
//     console.log("a  ="+ a)
// let sum = 0
// for(let a = 0;a<vals.length;a++)
//     sum = sum + vals[a]

// console.log("sum = "+sum)
// sum = 0
// for(a of vals)
//     sum = sum + a
// console.log("sum = "+sum)

// let cities = [{name:"New York",population:234.6e6},
// {name:"New delhi",population:453.56e7}]
// for(let city of cities)
//     if(city.population > 300e6)
//         console.log("city "+city.name+ "population  "+city.population)

// let user = {name:"george",surname:"Athan",age:65,email:"gathappilly@gmail.com"};
// for(let key in user)
// {
//     console.log("key ",key)
//     console.log("value ",user[key])
// }

// let names = ["Alice", "Bob", "Charlie"];
// for (let name of names)
// {
//     console.log(name);
// }
// let fruits = ["apple", "banana", "mango"];
// for (let fruit of fruits)
// {
//     console.log(fruit);
// }

// let user =
// {
//     name: "george",
//     age: 64
// };
// for (let key in user)
// console.log(`${key}:${user[key]}`)

// let array1 = ["a","b","c"] 
// for(const elem of array1)// works also with orwithout const
//     console.log(elem)

// let i = 0;  ///// do later
// while(true)
// {
//     console.log(i)
//     console.log("...")
//     if(i>=5)
//     {
//         i++
//         console.log("now breaking")
//         break;
//     }
//     console.log("loop brooken")
    
// }
// console.log("We are out of the loop")

// let i = 0;
// for(i = 1;i<= 5;i++)
// {
//     if(i == 3)
//     {
//         continue;
//     }
//     console.log(i)
// }

// let fruits = ["Apple","Banana","Mango","Cherry","Orange","grapes"]
// for(i = 0;i<fruits.length;i++)
// {
//     if(fruits[i] == "Mango")
//     {
//         console.log("Mango found at "+i)
//         break;/// with an without
//     }
//     console.log(fruits[i])
// }
// console.log("Outside the loop")

// for(let i = 1;i<= 10;i++)
// {
//     if(i%2 === 1)
//         continue
//     console.log(i)
// }



// let gate = prompt("enter a gate name a,b,c,d")
// let win = false
// switch(gate)
// {
//     case "A":
//     case "a":
//     case "1":
//         alert("gate A empty")
//         break
//     case "B":
//     case "b":
//     case "2":
//     alert("Gate B empty")
//     break
//     case "C":
//     case "c":
//     case "3":
//         alert("Gate C win")
//         win = true
//         break
//     case "D":
//     case "d":
//     case "4":   
//     alert("Gate D empty")
//     break;
// default:
//     alert("Enter a proper gate")
// }

// let temperatures;
// let temps
// let meanTemp
// let sum =0
// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// getMeanTemp(temperatures)
// temps = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]
// getMeanTemp(temps)
// for(i = 0;i<temperatures.length;i++)
//     sum = sum + temperatures[i]
// meanTemp = sum/temperatures.length;
// console.log("mean temp = "+meanTemp)
// function getMeanTemp(temperatures)
// {
//     sum = 0
//     for(i = 0;i<temperatures.length;i++)
//         sum = sum + temperatures[i]
//     meanTemp = sum/temperatures.length;
//     console.log(meanTemp)
// }

// showName();
// function showName()
// {
//     console.log(name)
// }
// //let name = "Alice"
// var name = "Alice"  /// output is undefined


// let name = "Alice"/// variable and functions before used/called
// function showName()
// {
//     console.log(name)
// }
// showName();
//var name = "Alice"  /// output is undefined


// function sayHello()
// {
//     console.log("Hello")
// }
// console.log("About to call say hello")
// sayHello();
// console.log("Function call done")
// function showMessage()
// {
//     console.log("hello everyone")
// }
// showMessage()   //////////// corrected


// let userName = 'john'
// function showMessage()
// {
//     let msg = "Hello "+ userName
//     console.log("msguuuuuuuu = "+userName)///  working
//     console.log("new msg = ",msg)
// }
// showMessage()
// console.log("usernaame = ",userName)///again check
//console.log("msg = ",msg) not accessible as defined within a block

// function showMessage()
// {
//     console.log("Message 2")
//     return
//     console.log("Message,3")// not executed as return
// }
// console.log("message 1");
// showMessage()
// console.log("messge 4");



// function getTrue()
// {
//     return(true)
// }
// let test = getTrue()
// if(test)
//     console.log("yas")
// else
//     console.log("NO")

// let temperatures;
// let temps
// let meanTemp
// let sum =0
function getMeanTemp(temperatures)
{
    sum = 0
    for(i = 0;i<temperatures.length;i++)
        sum = sum + temperatures[i]
    //meanTemp = sum/temperatures.length;
    return(sum/temperatures.length)
}

// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// meanTemp = getMeanTemp(temperatures)
// console.log("mean temp = ",meanTemp)
// temps = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]
// console.log("mean temps = ",getMeanTemp(temps))
// for(i = 0;i<temperatures.length;i++)
//     sum = sum + temperatures[i]
// meanTemp = sum/temperatures.length;
//let mt = getMeanTemp(temperatures)
//console.log("mean temp = "+mt)

// function add(first,second)
// {
//     console.log("first = "+first)
//     console.log("second = "+second)
//     let res = first+second
//     console.log("result of add = "+res)
// }
// add(7,5);

// function checkAge(name,age,contact)
// {
//     console.log("name = "+name)
//     console.log("age = "+age)
//     console.log("contact = "+contact)
//     if(age >= 18)
//         console.log("You can vote")
//     else
//         console.log("Oh wait")
// }
// checkAge("George",60,946857)
// #checkAge(60,9,"George") # takes the variables wrongly

// let names = ["Alice","George","Thomas","Antony"]
// let name = getName(names,5)# if array out of bounds, it gives the answer as undefined
// console.log(name)
// function getName(array,index)
// {
//     return(array[index])
// }

// let count = 0;
// function sayHello()
// {
//     let count = 10;
//     console.log("in function count = "+count)
// }
// sayHello();
// console.log("count outside "+count)

// function add(first,second)
// {
//     console.log("in fucntion first = "+first+" and second = "+second)
//     return(first + second)
// }
// let first = 10, second = 20,third = 30,forth = 40
// add(first,second)
// console.log("Outside First = "+first+ " second = "+second)
// add(second,third)
// console.log("Outside First = "+first+ " second = "+second)

// let a = 100, b = 200, c = 300
// function test(a)
// {
//     let b = 10;
//     console.log("in Func a = ",a)
//     console.log("in fun b = ",b)
//     console.log("in fun c = ",c)
// }
// test(1)
// console.log("outside a = ",a,"b = ",b,"c = ",c)

// function showMessage(message)
// {
//     console.log(`Message: ${message}`)
// }
// console.log(showMessage)
// let sm = showMessage/// a function (call) is equated to a variable
// console.log("sm =",sm)
// sm("sm")// here sm means a call to showMessage function, argument being "sm"
// showMessage("ShowMessage")///// understand this clearly// another clear call of shlow Message
// // function, with argument as "showMessage"


// function doNothing()
// {
//     return undefined
// }
// let a = doNothing()// result of funtin assigned
// let b = doNothing// funciton name assigned to
// console.log(typeof a)
// console.log(typeof b)


// function add(a,b)
// {
//     return(a+b)
// }
// function multiply(a,b)
// {
//     return(a*b)
// }
//  function operation(func,first,second)
// {
//     return(func(first,second))
// }
// console.log(operation(add,10,20))
// console.log(operation(multiply,10,20))


// let myadd = function(a,b)// making a named function
// {
//     return(a+b)
// }
// console.log(myadd(20,40))// calling a named function
//console.log(operation(function(a,b){    return a+b},40,60))// no name is 
// is given to this function. yet this function is called and
// executed
//console.log(operation
// function getMeanTemp(temperature)
// {
//     if(!temperature instanceof Array)// validation of arguments
//         return(NaN)
//     let sum = 0;
//     for(let i = 0;i<temperature.length;i++)
//         sum = sum + temperature[i]
//     return(sum/temperature.length)
// }
// console.log(getMeanTemp([20,30,45]))
//console.log(oper(getMeanTemp,[20,30,45]))   // do this too

// function add(a,b)
// {
//     if(typeof a !== "number" || typeof b !== "number")
//         return("Invalid input: numbers expected")
//     return(a+b)
// }
// console.log(operation(add,"ten",20))


// function add(a,b)
// {
//     return(a+b)
// }
// function multiply(a,b)
// {
//     return(a*b)
// }
// function oper(func,first,second)
// {
//     return(func(first,second))
// }
// console.log(oper(add,10,20))
// console.log(oper(multiply,10,20))
// in the place of operation, we can use oper or any word consistently

// let inner = function()
// {
//     console.log("Inner 1");
// }
// let outer = function (callback)
// {
//     console.log("outer 1")
//     callback()
//     console.log("outer 2")
// }
// console.log("test 1")
// outer(inner);
// console.log("test 2")

// function calculate (a,b,operation)
// {
//     return(operation(a,b))
// }
// function add (x,y)
// {
//     return(x+y)
// }
// function subtract(x,y)
// {
//     return(x-y)
// }
// console.log(calculate(5,3,add))
// console.log(calculate(5,3,subtract))

// console.log("start")
// setTimeout(function()//anonymous function
// {
//     console.log("This one runs in 5 second")
// },5000)
// console.log("end")
// let counter = 0
// console.log("Start")
// let intervalId = setInterval(function()
// {
//     console.log("Repeating ",++counter)
// },2000)
// setTimeout(function()
// {
//     clearInterval(intervalId);
//     console.log("Stopped");
// },5500)
// console.log("end")
// window.addEventListener("click",function()
// {
//     console.log("clicked")
// })

// filter method
// let arr = [1,2,3,4,5,6,7,8,9,10];
// //print(arr)
// let evenarr = arr.filter(function(element)
// {
//     if(element%2 === 0)
//         return true
//     return false
// })
// console.log(arr)
// console.log(evenarr)
// filter function 2
// let arr = ["Aditya","Diksha","Sandeep","George","Thomas"]
// let sel = arr.filter(function(elem)
// {    
// //    if(elem  == "Aditya"|| elem == "Diksha")
//     if(elem  !== "Aditya"&& elem !== "Diksha")
//     {
//         return true
//     }
//     return false
// })
// console.log(sel)

// let arr = ["Aditya","Diksha","Sandeep","George","Thomas"]
// let sel = arr.map(function(elem)
// {    
//     if(elem  == "Aditya")
//     {
//         return "Aditya Gupta"
//     }
//     return elem + "---"
// })
// console.log(sel)
///try with numeric value/// done

// let arr = [3,5,7,1,8,9,4]
// let sel = arr.map(function (elem)
//     {
//         if (elem < 6) 
//             return(elem+3)
//         return(elem)
//     })
// console.log(arr)
// console.log(sel)

// function sum(a,b)  // Arrow funciton like inline function
// {
//     return(a + b)
// }
// console.log(sum(5,3))
// let newSum = (a,b) =>a+b
// console.log(newSum(5,4))
// /// in arrows if {} used then return statement needed

let names=["Alice","Eve","John"]
// function showName(element)
// {
//     console.log(element)
// }
// names.forEach(showName)

// let showName= (element)=>console.log(element)
// names.forEach(showName)// jh

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let myFunction = (element) => console.log(element + 11)
// arr.forEach(myFunction)
// console.log(arr)

// let square = x => x*x
// console.log(square(5))

// function factorial(n)
// {
//     return n > 1 ? n*factorial(n-1):1
// }
// console.log(factorial(5))

// function factorial(n)
// {
//     let result = 1
//     while(n > 1)
//     {
//         result *= n
//         n--
//     }
//     return(result)
// }
// console.log(factorial(4))


// let count = 1
// setintervalID = setInterval(()=>
// {
//     console.log(count++)
// },1000);
// setTimeout(()=>
// {
//     clearInterval(intervalID)
// },(10*1000)+100)


// try
// {
//     console.log("Starting of try")
//     let a = 10
//     console.lg(a/0) // from here it went out thru the catch error window
//     console.log("Ending of Try")
// }
// catch(error)
// {
//       console.log("starting of catch")
//       console.log(error)
//       console.log("ending of catch")
// }

// let arr = 1//[1,2,3,4,5]
// if (arr instanceof Array)
//     console.log("Yes we got an array")
// else
//     console.log("Not an array")
// let a = -2
// try
// {
//     a = b
// }
// catch(error)
// {
//     if(error instanceof ReferenceError)
//     {
//         console.log("Reference Error",error)
//         a = 2
//     }
//     else
//     {
//         console.log("Other Errroe"+ error)
//     }
// }
// finally
// {
//     console.log("finally a = ",a)
// }

// console.log(" outside a = ",a)

// let a = -2
// try
// {
//     a = b
// }
// catch(error)
// {
//     try
//     {
//         console.log(b)
//     }
//     catch(error2)
//     {
//         console.log("second catech",error2)
//     }
// }
// finally
// {
//     console.log("Finally")
// }
// console.log("stary")
// throw(100)
// console.log("End")

// console.log("start")
// throw(ReferenceError("this is a reference eroor"))
// console.log("End")

// console.log("start")
// try
// {
//     console.log(100)
// }
// catch(error)
// {
//     console.log(error)
// }
// console.log("end")


// function factorial(n)
// {
//     if(n>20)
//     {
//         throw new RangeError("Max Value 20")
//         }
//     let result = 1
//     for(;n>1;n--)
//         result*=n
//     return(result)
// }
// console.log(factorial(3))
// console.log(factorial(5))
// console.log(factorial(8))
// console.log(factorial(20))
// console.log(factorial(1000))


// function average(a,b)
// {
//     return(a+b/2)
// }
// console.log(average(2,10))
// console.log(average(5,5))

// function largest(a,b,c)
// {
//     if(a>b && a>c)
//         return(a)
//     else if(b>a && b>c)
//         return(b)
//     else
//         return(c)
// }
// console.log(largest(1,2,3))
// console.log(largest(1,2,3));
// console.log(largest(3,2,1));
// console.log(largest(2,2,1));
// console.log("befoer debugger")
// debugger
// console.log("After Debugger")

// function outer()
// {
//     let name = "outer"
//     let str = "inner"
//     return str
// }
// function inner()
// {
//     let name = "inner"
//     return "Hello !"
// }
// console.log("Before Outer call")
// debugger
// console.log(outer())
// console.log("Afgter outer() call")

//// assignment nov 14
// function divid(a,b)
// {
//     try
//     {
//         c = a/b
//     }
//     catch(error1)
//     {
//         if(b == 0)
//         {
//             throw "Division by Zero"
//         }
//         Finally
//         {
//             console.log("result =",c);
//         }
//     }
// }
// divid(12,2)

// let part = 0;
// console.time("Leibniz")
// for(let k= 0;k<10000000;k++)
//     part = part + (-1)**k/(2*k+1)
// console.timeEnd("Leibniz")
// let pi = part * 4;
// console.log(pi)

// let end = 2;
// for(let i=1;i<end;i++)
// {
//     console.log(i);
// }

// let contact = {}
// console.log("contact = ",contact)
// console.log("type = ",typeof contact)
// contact.tel ="9496-998769"
// console.log("contact = ",contact)
// console.log("tel = ",contact.tel)
// console.log("type = ",typeof contact)
// console.log("tel = ",contact.tel)
// contact["#code"] = 123// use the [] and "" for such things
// console.log(contact["#code"])
// contact["email.work"] = "abcd@gmail.com"
// contact["email.personal"] = "efgh@gmail.com"
// console.log(contact["email.work"])
// console.log(contact["email.personal"])
// console.log(contact.email)
// //contact."first name" = "George"///error  need [ and string]
// contact["first name"] = "George"
// console.log(contact["first name"])

// let contact =
// {
//     email_1: "abcd@gmail.com",
//     email_2: "efgh@gmail.com"
// };
// for(i = 1;i<=2;i++)
// {
//     let key = "email_"+i
//     console.log(key)
//     console.log(contact[key])
// }

// let contact ={}
// let email = prompt("Enter email")
// let count = 1
// while(email)
// {
//     contact["email_"+count] = email
//     count++
//     email = prompt("Enter email")
// }
// console.log("contact = ",contact)
// for(let count1 = 1;count1<=Object.keys(contact).length;count1++)
//     console.log(contact["email_"+count1])


// let test = 
// {
//     nr:10,
//     b:false,
//     str: "George",
//     arr: [10,20,30],
//     obj: 
//     {
//          x:10,
//          y:20,
//     },
//     fn: function(arg){ console.log(arg)}
// };
// test.fn(123)
// console.log("1 index",test.arr[1])
// console.log("y from object of obj",test.obj.y)
// console.log("string from ",test.str)
// console.log("number from object ",test.nr)
// console.log("boolean ",test.b)

// let point =
// {
//     x:0,
//     y:0,
//     moveHorizontally:function(distance)
//     {
//         this.x = this.x + distance
//     },
//     moveVertically:function(distance)
//     {
//         this.y = this.y+distance
//     }
// }
// console.log(point.x)
// point.moveHorizontally(30)
// console.log(point.x)

// let contact = 
// {
//     tel:"45 56 98",
//     email:"gathappilly200@gmail.com"
// }
// console.log("tel =",contact.tel)
// console.log("email =",contact.email)
// contact.email = ["gathappilly@gmail.com","abcd@gmail.com"]
// console.log("email 0 = ",contact.email[0])
// console.log("email 1 = ",contact.email[1])
// contact.email = 
// {
//     private: "abc",
//     work:"xyz"
// };
// console.log("contact.private email =",contact.email.private)
// console.log("contact.work email =",contact.email.work)
// delete contact.email.work
// console.log("contact.work email =",contact.email.work)
// if(contact.email.work)// when work email is not there, this if evaluates to false
// {
//     console.log("this is if working")
// }
// if("private" in contact.email)
// {
//     console.log("This is private email",contact.email.private)
// }


// let contact = 
// {
//     tel:"45 56 98",
//     email:"gathappilly200@gmail.com"
// };
// for (x in contact)
//     console.log(x)
//     console.log(x+ ":",contact[x])
// let propArr = Object.keys(contact)
// console.log(propArr)
// con

// const contact = 
// {
//     tel:"45 56 98",
//     email:"gathappilly200@gmail.com"
// };
// //contact = {} not allowed
// contact.tel = "123456"
// contact.name= "George"
// for (x in contact)
//     console.log(x)
//     console.log(x+ ":",contact[x])
// let propArr = Object.keys(contact)
// console.log(propArr)


// const make the object not equatable to another object
// but deleting or modifyong a property is possible
//// === compares value and type
/// == compares only the value
// var point1={x:10,y:20};
// var point2={x:10,y:20};
// console.log(point1 === point2)// false
// let point3 = point1
// point1.x = 30
// console.log(point1.x)
// console.log(point3.x)
// console.log(point1 === point3)// true


// var point11={x:10,y:20};
// var point2={x:10,y:20};
// point11 = point11;
// let point3 = {}
// Object.assign(point3,point11)
// console.log(point3.x)
// console.log(point2.y)
// point11.x = 30
// point11.y = 50
// console.log("point11.x",point11.x)
// console.log("point11.y",point11.y)

// console.log("point2.x",point2.x)
// console.log("point2.y",point2.y)

// console.log(point11 === point11)
// console.log(point2 === point2)

// var point0={x:10,y:20};
// var point1={x:10,y:20};
// point1 = point0;//only an alias or addresses the same
// let point3 = {}
// Object.assign(point3,point0)// strictly different copies
// console.log(point3.x)
// console.log(point3.y)
// point1.x = 30
// point1.y = 50
// console.log("point0.x",point0.x)
// console.log("point0.y",point0.y)

// console.log("point1.x",point1.x)
// console.log("point1.y",point1.y)

// console.log(point3 === point0)// not strictly the same
// console.log(point3 == point0)// even otherwise not same

// console.log(point1 === point0)// not strictly the same
// console.log(point1 == point0)// even otherwise not same


// var point0={x:10,y:20};
// var point1={x:10,y:20};
// point1 = point0;//only an alias or addresses the same
// let point3 = {}
// Object.assign(point3,point0)// strictly different copies 3 and 0
// console.log("point3.x ",point3.x)
// console.log("point3.y ",point3.y)

// let point4={}
// Object.assign(point4,point1,z= 100)
// console.log(point4)
// point0.x = 30
// point0.y = 50
// console.log("new point0.x",point0.x)//
// console.log("new point0.y",point0.y)

// // console.log("point1.x",point1.x)
// // console.log("point1.y",point1.y)

// console.log("point 3 and 0 strictly", point3 === point0)// not strictly the same
// console.log("point 3 and 0 not strictly",point3 == point0)// even otherwise not same

// // console.log(point1 === point0)// not strictly the same
// // console.log(point1 == point0)// even otherwise not same

// console.log("point 1 and 0 strictly", point1 === point0)// not strictly the same
// console.log("point 1 and 0 not strictly",point1 == point0)// even otherwise not same

// var point1={x:10,y:20};

// let contact = 
// {
//     tel:"45 56 98",
//     email:"gathappilly200@gmail.com",
//     point1
// };

// let contact1 = contact
// console.log(" ",contact)
// console.log("1",contact1)
// console.log("contact1==contact", contact1== contact)
// console.log("contact1===contact", contact1=== contact)

// contact3 = {}
// Object.assign(contact3,contact)
// console.log("contact3==contact", contact3== contact)
// console.log("contact3===contact", contact3=== contact)


// var point0={x:10,y:20};
// var point1={x:10,y:20};
// point1 = point0;//only an alias or addresses the same
// let point3 = {}
// Object.assign(point3,point0)// strictly different copies 3 and 0
// console.log("point3.x ",point3.x)
// console.log("point3.y ",point3.y)

// let point4={}
// let point5 = {}
// Object.assign(point4,point1,{z: 100})
// console.log("point4 = ",point4)
// //z is added to point4
// Object.assign(point5,point4,{z : 120,color:"red"})// if same key overwrite from left to right
// console.log("point5 = ",point5)
// let point6 ={}

// point6={...point5}// spreader operator spreads/explods the qualities and assigns
// console.log("point6 = ",point6)
// console.log("point6 === point6",point6===point5)//gets false. means are different

// let arr1 =[1,2,3,4]
// let arr2 = [5,6,7,8]
// let comarr=[...arr1,...arr2]
// console.log(arr1);
// console.log(arr2);
// console.log(comarr);
// comarr=[10,11,12,...arr1,30,40]
// console.log(comarr);
// comarr=[10,11,12,...arr1]
// console.log(comarr);
// comarr=[...arr1,50,60]
// console.log(comarr);
// /// spreader ... works both for objects and arrays
// /// first or second or in btween the array can be kept


// function sum(a,b,c)
// {
//     return(a+b+c)
// }
// let arr = [3,4,5]
// let val = sum(...arr)// the spread values of arr are sent as args to sum
// console.log("sum = ",val)

// let str = "George"
// let chararr =[...str]/// str gets spread into chararr
// console.log(chararr)


// let obj = {
//     x:10,
//     y:20,
//     z:
//     {
//         a: 100,
//         b: 200
//     }
// }
// let obj1={}
// Object.assign(obj1,obj)
// console.log("obj = ",obj)
// console.log("obj1 = ",obj1)
// console.log("obj === obj1",obj===obj1)
// obj.z.a = 150// inner element not changed
// obj.x = 15// outer element changed
// console.log("changing z.a to 150")
// console.log("changing x to 15")
// console.log("obj =",obj)
// console.log("obj1 =",obj1)



// let deepClone = function(obj)
// {
//     let newObj = {...obj}
//     for(property in newObj)
//     {
//         if(typeof(newObj[property] === "object"))
//         {
//             newObj[property]=deepClone(newObj[property])
//         }
//     }
// }
// let obj = {
//     x:10,
//     y:20,
//     z:
//     {
//         a: 100,
//         b: 200
//     }
// }
// let obj1={}
// obj1= deepClone(obj)
// console.log(obj1===obj)
// console.log(obj)
// console.log(obj1)


/// 27 11 25
// let circle =
// {
//     radius:100,
//     center:
//     {
//         x:0,
//         y:10
//     },
//     // gettype: function()
//     gettype()/// in deep cloning, the inner classes also get completely
//     // copied separately.else the inner classes are copied only as reference
//     {
//         //return("circle")
//         return(typeof circle.radius === "number")?"circle":"Unknown"
//     },/// if circle is used, radius is given as abc but if this, unknown
//     // comes which is right
//     getradius()
//     {
//         return(this.radius)// this points to the actual context
//     }
// };
// console.log(circle.radius)
// console.log("circle center x ",circle.center.x)
// //console.log("type is ",circle.gettype())// here the more general 
// // higher context may be referred
// console.log("type",circle["gettype"]())
// let circle1 = {...circle}
// circle1.radius = "abc"
// console.log("radius",circle1.getradius())
// console.log("type ",circle1.gettype())


// let contact = 
// {
//     _tel : 233453456,
//     get tel()
//     {
//         console.log("tel = ")
//         return(this._tel)
//     },
//     set tel(t)
//     {
//         console.log('using setter')
//         this._tel = t
//     }
// };
// console.log(contact.tel)
// contact.tel = "1000000"
// console.log(contact.tel)
// contact.email = "abcd.gmail.com"
// console.log("contact emali = ",contact.email)


let contact = 
{
    _tel : 233453456,
    _age:36,
    _firstname:"george",
    _lastname:"Athappilly",
    get fullname()
    {
        return `${this._firstname}," ",${this._lastname}`
    },
    get age()
    {
        return(this._age)
    },
    get tel()
    {
        console.log("tel = ")
        return(this._tel)
    },
    set tel(t)
    {
        console.log('using setter')
        this._tel = t
    },
    set age(a)
    {
        if (a > 0)
            this._age = a
        else
            console.log("setting negaive age")
    }
};
console.log(contact.fullname)
contact.tel = "1000000"
contact.age = -20
console.log(contact.age)
console.log(contact.tel)
contact.email = "abcd.gmail.com"
console.log("contact emali = ",contact.email)