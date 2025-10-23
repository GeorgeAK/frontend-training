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


// let age = Number(prompt("Enter Height",1.78))
// let weight = Number(prompt("Enter weight",75))
// let bmi = weight/(age*age)
// if(bmi < 16)
//     alert("For "+bmi +"  you are  severely thin")
// else if(bmi < 17)
//     alert("For "+bmi +"  you are  Moderate thin")
// else if(bmi < 18.5)
//     alert("For "+bmi +"  you are  Mild thin")
// else if(bmi < 25)
//     alert("For "+bmi +"  you are  Normal")
// else if(bmi < 30)
//     alert("For "+bmi +"  you are  Overweight")
// else if(bmi < 35)
//     alert("For ",+bmi +"  you are Obese 1")
// else if(bmi < 40)
//     alert("For "+bmi +"  obese 2")
// else
//     alert("For  "+ bmi + "  you are obese 3")



// Assignment 4
/// numbers from 100 to 0 as 90,80, 70
// for(let n = 100;n>=0;n-=10)
//     console.log(n)

//// with start and end
// let start = Number(prompt("enter the start"))
// let end = Number(prompt("Eneter the end number"))
// if(start > end)
//     for(let n = start;n>=end;n-=10)
//         //alert(n)
//         console.log(n)


// let numbers = [21,45,100,12,11,78,61,4,39,22];
// for(n of numbers)
//    // console.log(n);
//     if(n % 2 == 0)
//         console.log(n)


// let library =[{title: "Speaking JavaScript",author:"Axel Rauschmayer",pages:460},{title:"Programming JavaSriptt Application",author: "Aric Elliott",pages:254},{title:"Understandign ECMAScript 6",author:"Nicholas C. Zakas",pages:352}];
// console.log(library)
// library.push({titel:"Learning JavaScript Design Patterns",author: "Addy Osmani",pages:254})
// console.log("Libray length:",library.length)
// console.log("Books in the library: ");
// library.forEach(book=>console.log(book.title));

// let lastTwoBooks=library.slice(-2);
// console.log("Last Two bolls: ");
// lastTwoBooks.forEach(book=>console.log(book.title));
// library.shift();
// console.log("After removeing first book : ");
// console.log("librray lenght ",library.length);
// library.forEach(book=>console.log(book.title));
// let totalPages = library.reduce((sum,book)=>sum+book.pages,0);
// console.log("Total pages in collection: ",totalPages);

// let contacts = [{name:"George",age:64},{name:"Thomas",age:65},
//     {name:"John",age:70},{name:"Francis",age:80}]
// // for (c of contacts)
// //     console.log(c)
// console.log(contacts[0])
// console.log(contacts[contacts.length-1])
// contacts.push({name:"Kathu",age:50})
// for(a of contacts)
//     console.log(a)

////////////////// switch case and contact updation//////////////////
// let contacts = [{name:"George",age:64},{name:"Thomas",age:65},
//     {name:"John",age:70},{name:"Francis",age:80}]
// let cont = 1
// for(;cont;)
// {
//     let opt = Number(prompt("enter a choice 1.  first    2. last 3. all 4. exit"))
//     //alert("your option is "+opt)
//     switch(opt)
//     {
//         case 1:
//             console.log(contacts[0])
//             break;
//         case 2:
//             console.log(contacts[contacts.length-1])
//             break;
//         case 3:
//             for( c of contacts)
//                 console.log(c)
//             break
//         case 4:
//             let name1 = prompt("Enter the name");
//             let age = Number(prompt("Enter the age"))
//             //let str = "[{'name':"+name1 + "age :"+age+"}]"// try on my own
//             //let st = " My name is "+nam1+ " and i am a teacher"
//             let str = "{name: "+ name1+ "age :" + age +"}"///still not right
//              contacts.push(str)
//             // for(a of contacts)
//             //     console.log(a)
//             break
            
//         default:
//             alert("Enter a valid choice")
//     }
//     cont = Number(prompt("Continue 1/0"))
// }


// for (c of contacts)
//     console.log(c)
// console.log(contacts[0])
// console.log(contacts[contacts.length-1])
// contacts.push({name:"Kathu",age:50})
// for(a of contacts)
//     console.log(a)


///////////////homework on 15  10  25  wednesday////////////////////
//// //////////   1 to print first 10 even numbers  /////////////////
// let count = 0
// for(let n = 1;count <10;n++)
//     if(n%2 == 0)
//     {
//         count++;
//         console.log(n)
//     }


///////////////////2.  sum of quotients of nums divided by 3////////////////
// let sum = 0
// for(let n = 1;n<=9;n++)
//     sum += n/3
// console.log(" sum = "+sum)

////////////3            numbers upto 5 with their quitient on dividing by 2////////
// let n = 1
// do
// {
//     console.log(n,n/2)
//     n+=1
// }while(n<6)

///////////////// 4   password matching ////////////////////
// let pw = 7
// do
// {
//     let num = Number(prompt("enter a number"))
//     if(num != pw)
//         alert("NO match")
//     else
//         alert("Perfect Match")
// }while(num !== pw);

///////////////sum of n natural numbers//////////////
// let end = Number(prompt("Enter Start"))
// let sum = 0
// for(let n = 1;n<=end;n++)
//     sum = sum + n;
// alert("sum = "+sum)


///////////factorial
// let num = 6
// let fact = 1
// for(let n = 1;n<=6;n++)
//     fact = fact * n
// alert("Factoria of "+num + " = "+ fact)

////  how many divisible by 3 and 5
// let count = 0
// for(let n = 1;n<=100;n++)
//     if(n%3 == 0 && n % 5 == 0)
//         count++
// alert("The count of 3 and 5 divisible is "+ count)



///// first perfect squares below 50

//  for(let num = 1; num*num<= 100;num++)
//     console.log(num*num)

/////////////primes btwn 1 and 50////////////////
// for  (let num = 1;num<=50;num++)
// {
//     let prime = true
//     for(let n = 2;n<num/2;n++)
//         if(num % n == 0)
//         {
//             prime = false
//             break
//         }
//         if(prime)
//             console.log(num, end = " ")
// }