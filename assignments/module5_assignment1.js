// let counter = 0
// let intervalId = setInterval(function()// the function which works
// {// at every 200 interval
//     console.log(++counter)
// },200)
// setTimeout(function()
// {/// decides when to stop the setinterval: the repeating fucntion to stop. 
//     clearInterval(intervalId);
// },2110)


// for (i = 1;i<= 10;i++)
//     setInterval()

// /// do as follows
// let count = 1
// setintervalID = setInterval(()=>
// {
//     console.log(count++)
// },1000);
// setTimeout(()=>
// {
//     clearInterval(intervalID)
// },(10*1000)+100)





/////////////////iterative version
// setTimeout(function()//anonymous function
// {
//     console.log("Here I am")
// },200)
// function countup(num)
// {
//     setTimeOut();
//     console.log(num);
// }
// for(num = 1;num<=10;num++)
// {
//     countup(num);
// }

// /////second attempt on iterative version
// function printnum(num)
// {
//     console.log(num);
// }
// setTimeout(function(num)//anonymous function
// {
//     //console.log("Here I am")
//     printnum(num);
// },200)
// let counter = 0
// let intervalId = setInterval(function()
// {
//     console.log(++counter)
// },200)
// setTimeout(function()
// {
//     clearInterval(intervalId);
// },2110)




// third attempt on iterative function
/// here is a working program //////////
// setTimeout(function()//anonymous function
// {/// this makes clock tick at every 200 units
//     console.log("Here I am")// and works only once
// },200)////////////this works only once and is only a example
// let counter = 0
// let intervalId = setInterval(function()// the function which works
// {// at every 200 interval
//     console.log(++counter)
// },200)
// setTimeout(function()// so in this case, we can make our loop here
// {/// decides when to stop the setinterval: the repeating fucntion to stop. 
//     clearInterval(intervalId);
// },2110)


//////////////THIS MUCH IS ENOUGH TO RUN THE COUNTER//////
// let counter = 0
// let intervalId = setInterval(function()// the function which works
// {// at every 200 interval
//     console.log("Hi")
// },200)
// for(let i = 1;i<=5;i++)
// {
//     print(i);
//     delay(2)
// }// here is a working program //////////
// setTimeout(function()//anonymous function
// {/// this makes clock tick at every 200 units
//     console.log("Here I am")// and works only once
// },200)

// setTimeout(function()// so in this case, we can make our loop here
// {/// decides when to stop the setinterval: the repeating fucntion to stop. 
//     clearInterval(intervalId);
// },2110)










// function greetUser(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback(); // Execute the callback function
// }
// function sayGoodbye() {
//   console.log("Goodbye!");
// }
// greetUser("Alice", sayGoodbye); // Passing sayGoo




// let library =[{title: "Speaking JavaScript",author:"Axel Rauschmayer",pages:460},{title:"Programming JavaSriptt Application",author: "Aric Elliott",pages:254},{title:"Understandign ECMAScript 6",author:"Nicholas C. Zakas",pages:352}];
// console.log(library)
// library.push({titel:"Learning JavaScript Design Patterns",author: "Addy Osmani",pages:254})
// console.log("Libray length:",library.length)
// console.log("Books in the library: ");
// library.forEach(book=>console.log(book.title));

// let lastTwoBooks=library.slice(-2);
// console.log("Last Two books: ");
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

//////////// switch case and contact updation//////////////////
let contacts = [{name:"George",age:64},{name:"Thomas",age:65},
    {name:"John",age:70},{name:"Francis",age:80}]
function showContact(contacts,i)
{
    if(!contacts instanceof Array)
        console.log("contacts is not array")
    else
    //if(contacts isInstanceof Array)
    console.log(contacts[i])
}
function addContact(contacts,name,age)
{
    if(!contacts instanceof Array)
    {
        console.log("contacts is not array")
        return// these returns are not properly working
    }
    else if(!name instanceof String)
    {
        console.log("Name is not proper")
        return// these returns are not properly working
    }
    else if(!age instanceof Number)
    {
        console.log("age is to be a proper integer")
        alert("age is to be a proper integer")
        return// these returns are not properly working
    }
    else
    {
        console.log("Adding")
        contacts.push({"name":name,"age":age})
    }
}
let cont = 1
for(;;)
{
    let opt = Number(prompt("enter a choice 1.  first    2. last 3. all 4. add contact. -n. exit"))
    //alert("your option is "+opt)
    //console.log("Your option is "+opt)
    if(opt < 0)
      break
    switch(opt)
    {
        case 1:// to show the first contact
            showContact(contacts,0)
            break;
        case 2:// to show the last 3 contacts
            //console.log(contacts[contacts.length-1])
            for(let i=contacts.length-4;i<contacts.length-1;i++)
                showContact(contacts,i)
            break;
        case 3:// to show all contacts
            for( i =0;i<contacts.length;i++)
              showContact(contacts,i)
            break
        case 4:// to add contact
            let name1 = prompt("Enter the name");
            let age = Number(prompt("Enter the age"))
            addContact(contacts,name1,age)
            break    
        default:
            alert("Enter a valid choice")
    }
    //cont = Number(prompt("Continue 1/0"))
}
///// summorial of a given number
// function sumup(n)
// {
//     //return (n > 1 ? n+sumup(n-1):1)
//     if(n == 1|| n == 0)
//         return(1)
//     return(n+sumup(n-1))
// }
// console.log("Now the fact of summorial of 5 is",sumup(5))

//// an arrow function to return sum of 3 numbers
// let sum3= (a,b,c) => a+b+c
// console.log("sum of 3 nums by arrow ",sum3(4,5,6))



