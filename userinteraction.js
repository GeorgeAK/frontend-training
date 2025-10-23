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
// function getMeanTemp(temperatures)
// {
//     sum = 0
//     for(i = 0;i<temperatures.length;i++)
//         sum = sum + temperatures[i]
//     //meanTemp = sum/temperatures.length;
//     return(sum/temperatures.length)
// }

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

function showMessage(message)
{
    console.log(`Message: ${message}`)
}
console.log(showMessage)
let sm = showMessage/// a function (call) is equated to a variable
console.log("sm =",sm)
sm("sm")// here sm means a call to showMessage function, argument being "sm"
showMessage("ShowMessage")///// understand this clearly// another clear call of shlow Message
// function, with argument as "showMessage"