let library =[{title: "Speaking JavaScript",author:"Axel Rauschmayer",pages:460},{title:"Programming JavaSriptt Application",author: "Aric Elliott",pages:254},{title:"Understandign ECMAScript 6",author:"Nicholas C. Zakas",pages:352}];
console.log(library)
library.push({titel:"Learning JavaScript Design Patterns",author: "Addy Osmani",pages:254})
console.log("Libray length:",library.length)
console.log("Books in the library: ");
library.forEach(book=>console.log(book.title));

let lastTwoBooks=library.slice(-2);
console.log("Last Two bolls: ");
lastTwoBooks.forEach(book=>console.log(book.title));
library.shift();
console.log("After removeing first book : ");
console.log("librray lenght ",library.length);
library.forEach(book=>console.log(book.title));
let totalPages = library.reduce((sum,book)=>sum+book.pages,0);
console.log("Total pages in collection: ",totalPages);

