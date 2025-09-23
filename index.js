//"use strict"// this is the correct use of it
console.log("hello me")
var len = 65
console.log(len)
var un
console.log(un)
let myvar = 10
console.log(myvar)
//let myvar = 20
console.log(myvar)
var un = 100
console.log(un)
let copy= un// un is copied to copy
console.log(copy)
let dec//declaration
dec = 10;//initialisation
console.log(dec)// accessing
console.log("dec = "+dec)
//"use strict"; //to be used in the beginning of code
var length = 22
console.log(length)
//length = length + 2
console.log(length)
length = "44"
console.log("string"+length)/// some issue
//length = length + dec//gets concatenated to string
//what if dec = dec +length  // this way also it works. but verify it as int or string
dec = dec+length// automatic change of type
console.log(dec)
console.log(length)// get the concatednated string as output


// 1  9  25  Monday
/// constants
const nam = "George"
console.log("constant val is ",nam)
//nam = "peter"/// error constant val cant be changed
console.log(nam)
// const age// non initialised const can not work
//console.log("non initialise one is ",age)
/*const age = 50
console.log("initialised const =",age)
let counter 
let height = 180
{
    counter = 2
    console.log("height ",height)
    console.log("counter inside = ",counter)
    let count = 1
    console.log("count = ",count)
    let weight = 100
    //let var1 = 10// let makes local variable
    var var1 = 10// makes global variable

}
count = 3
console.log("count out ",count)
console.log("var = ",var1)
console.log("height",height)
//console.log("weight",weight)
*/
/*
function helloprint()
{
    console.log("Hello")
    console.log("world")
}
console.log("one")
helloprint()
console.log("Two")
helloprint()
*/

/*let counter = 100// global counter
console.log("counter =",counter)
//let counter = 10// not allowed to change one made by let in the same block
{
    let counter = 10  // local counter54
    console.log("counter in block = ",counter)
}
console.log("counter out =",counter)// outside we get the global one only
"""
*/
// var counter = 100
// function printcounter()
// {
//     let counter = 200
//     console.log(counter)
// }
// console.log(counter)
// printcounter()


// let isdatavalid = true;
// let isstringtoolong = false
// let isgameover = false
// let contnueloop = true;
// console.log(false);
// console.log(typeof false);
// console.log(isdatavalid);
// console.log(typeof isdatavalid);

// const year = 1991
// let delayinseconds = 0.00013
// let area = (16* 3.14)
// let halfarea = area/2
// console.log(year)
// console.log(typeof year)
// let a = 10;
// let b = 0x10;
// let c = 0o10;
// let d = 0b10;
// console.log(a);// 10
// console.log(b);//16
// console.log(c);// 8
// console.log(d);// 2  // all printings are done in decimal by default
// let x = 9e3;
// let y = 123e-5;
// console.log(x);
// console.log(y);


// let a = 1/0
// let b = -Infinity
// console.log(a);// infinity
// console.log(b);// -infinity
// console.log(typeof a);
// console.log(typeof b);
// let s= "NOt a number";
// let n = s * 10;
// console.log(n);
// console.log(typeof n);


// let big = 1234999990000n;
// let big2 = 1n;
// console.log(big);
// console.log(typeof big);
// console.log(big2);
// console.log(typeof big2)
// console.log(7n/4n)

//let big3 = 123n+20;// erroer
//let big4 = 100n/0n;  both are errors

// let country = 'malvi'
// let continent = "Africa"
// console.log(country);
// console.log(typeof country);
// console.log(continent)
// console.log(typeof continent);

// let dialog = "He said 'I am too busy' and so it happend "
// console.log(dialog)
// let dialog2 = 'He said "I am too busy" and so it happend '
// console.log(dialog2)// 2 ways of string inside a string




let str = "text";
// let strStr = String(str);
// console.log(`${typeof str} : ${str}`); // -> string : text
// console.log(`${typeof strStr} : ${strStr}`); // -> string : text
// let nr = 42;
// let strNr = String(nr);
// console.log(`${typeof nr} : ${nr}`); // -> number : 42
// console.log(`${typeof strNr} : ${strNr}`); // -> string : 42
// let bl = true;
// let strBl = String(bl);
// console.log(`${typeof bl} : ${bl}`); // -> boolean : true
// console.log(`${typeof strBl} : ${strBl}`); // -> string : true
// 7:38
// let bnr = 123n;
// let strBnr = String(bnr);
// console.log(`${typeof bnr} : ${bnr}`); // -> bigint : 123
// console.log(`${typeof strBnr} : ${strBnr}`); // -> string : 123
// let un = undefined;
// let strUn = String(un);
// console.log(`${typeof un} : ${un}`); // -> undefined : undefined
// console.log(`${typeof strUn} : ${strUn}`); // -> string : undefined
// let n = null;
// let strN = String(n);
// console.log(`${typeof n} : ${n}`); // -> object : null
// console.log(`${typeof strN} : ${strN}`); // -> string : null


// let names = ["Geor","thmo","peter","Antony"]
// console.log(names)
// //names.reverse()
// //console.log(names)

// let n2 = names.slice(1,3)
// console.log(n2)

// let n3 = names.slice(0,-1)
// console.log(n3)
// let n4 = names.slice(-1)
// console.log(n4)
// let n5 = names.slice(-2)
// console.log(n5)

// let name1 = ["Sebastian","Augustin"]
// names = names.concat(name1)
// console.log(names)


// let year = 2051
// let newyear = year = 2000
// console.log(year)
// console.log(newyear)

// console.log(2+2*2)
// console.log(2+(2*2))
// console.log((2+2)*2)
// let x = 5;
// let y = 2;
// console.log(x+y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x % y)


 str = "123"
// let n1 = +str
// let n2 = -str
// let n3 = -n2
// let n4 = +"abcd"

// console.log(`${str}:$typeof(str)}`)//// do these below
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()


// let a = 10
// console.log("a :",a)
// console.log("a++ :",a++)
// console.log("a :",a)
// console.log("++a :",++a)

// console.log("a :",a)
// console.log("a-- :",a--)
// console.log("a :",a)
// console.log("--a :",--a)

// let x = .2
// let y = 0.1
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x**y)

//  x = 2
// x+= 4
// console.log(x)
// x-=3
// console.log(x)
// x*=3
// console.log(x)
// x/=3
// console.log(x)
// x/=3
// console.log(x)


// console.log(true&&true)
// console.log(true&&false)
// console.log(false&&true)
// console.log(false&&false)

// console.log(true||true)
// console.log(true||false)
// console.log(false||true)
// console.log(false||false)


// console.log(10===5)
// console.log(10===10)
// console.log(10===10n)
// console.log(10==="10")
// console.log("Alice"==="bob")
// console.log(0===false)
// console.log(undefined===false)
//console.log(NaN===NaN)
// till here === the type conversion is done first and then the comparison
// the below cases == the comparison is done before type check
//  console.log(10==5)
//  console.log(10==10)
//  console.log(10==10n)
//  console.log(10=="10")
//  console.log("Alice"=="bob")
//  console.log(0==false)
//  console.log(undefined==false)
// console.log(NaN==NaN)// the right side part is converted to undefined 
// // which becomes not equal to NaN which isnot converted. but just an error

///with ! operatr
//  console.log(10!==5)//
//  console.log(10!==10)
//  console.log(10!==10n)
//  console.log(10!=="10")
//  console.log("Alice"!=="bob")
//  console.log(0!==false)
//  console.log(undefined!==false)
// console.log(NaN!==NaN)
// till here !== the type conversion is done first and then the comparison
// the below cases == the comparison is done before type check
//   console.log(10!=5)// 
//   console.log(10!=10)
//   console.log(10!=10n)
//   console.log(10!="10")
//   console.log("Alice"!="bob")
//   console.log(0!=false)
//   console.log(undefined!=false)
//  console.log(NaN!=NaN)// == should return false. a strict check.
//  /// but here itis a ! also . so it here gives True
//  //the right side part is converted to undefined 
// // // which becomes not equal to NaN which isnot converted. but just an error
// ///////// in == the strict check is done
// //// in === the anyone equal is fine



// console.log(10<100)
// console.log(101>100)
// console.log(101<"100")
// console.log(101<100)
// console.log(100n<102)
// console.log("10"<20n)
// console.log(101<=100)
// console.log(10>=10n)
// console.log("10"<=20)

//// which one is doing strict comparison === or == ?


// console.log("b" > "a")
// console.log("a" > "B")
// console.log("B" > "A")
// console.log("B" > "4")
// console.log("4" > "1")
// console.log("ab1" < "ab4")
// console.log("ab4" < "abA")
// console.log("abB" < "aba")
// console.log("aba" < "abb")
// console.log("ab" < "ab4")


console.log(true?"True":"False")
console.log(false?"True":"False")
console.log(1 < 10?"True":"False")
console.log(1 > 10?"True":"False")
