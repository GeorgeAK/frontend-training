// let library =[{title: "Speaking JavaScript",author:"Axel Rauschmayer",pages:460},{title:"Programming JavaSriptt Application",author: "Aric Elliott",pages:254},{title:"Understandign ECMAScript 6",author:"Nicholas C. Zakas",pages:352}];
// console.log(library)
//  library.push({title:"Learning JavaScript Design Patterns",author: "Addy Osmani",pages:254})
 //////////////////push has not pushed the title propely.
 // in the listing of 4 books now, there is undefinede
//  console.log("New Libray :",library)
//  console.log("Libray length:",library.length)
//  console.log("Books in the library: ");
//  library.forEach(book=>console.log(book.title))

//  console.log("New Libray :",library)
//  console.log("Libray length:",library.length)
//  console.log("Books in the library Authors: ");
//  library.forEach(book=>console.log(book.author))

// let lastTwoBooks=library.slice(-2);
// console.log("Last Two books: ");
// lastTwoBooks.forEach(book=>console.log(book.title));
// library.shift();
// console.log("After removeing first book : ");
// console.log("libray length ",library.length);
// library.forEach(book=>console.log(book.title));
// let totalPages = library.reduce((sum,book)=>sum+book.pages,0);
// console.log("Total pages in collection: ",totalPages);

// console.log("New Libray :",library)
//  console.log("Libray length:",library.length)
//  console.log("Books in the library: ");
//  library.forEach(book=>console.log(book.title))

// console.log("Books in the library pages: ");
// library.forEach(book=>console.log(book.pages))
// console.log("Books in the library Authors: ");
// library.forEach(book=>console.log(book.author))
// console.log("Books in the library TITLES: ");
// library.forEach(book=>console.log(book.title))

// let paintings = 
// [
//     {title:"Mona Lisa",artist:"Da Vinci", doc:1503},
//     {title: "The last supper", artist:"Da vinci", doc: 1495},
//     {title: "The starry night", artist: "Vincent Gough", doc:1889},
//     {titel: "The scream", author: "David Munch", doc:1893},
//     { title: "Guernica", author:"Pablo Picasso", doc:1937},
//     {title: "THe kiss", author:"Gustav Kisk",  doc:1907},
//     {title:"Teh girl with pearl Earring",author:"Johannas Vermar",doc:1665},
//     {title: "THe birth of vinus", author:"Sandro Viticelli", doc:1485},
//     {title:"Las Meninas", author:"Diego Velasques",doc:1656},
//     {title:"TEH creation of Adam", author:"Michael Angelo", doc:1512}
// ];
// paintings.forEach(paintings=>console.log(paintings))



// let contact = 
// {
//     age : 36,
//     firstname: "Athappilly",
//     lastname: "George",
//     getfullname()
//     {return(`${this.firstname} ${this.lastname}`)},
//     getage()
//     {
//     return(this.age)
//     },
//     setage(a)
//     {
//         if(a>0) this.age = a
//     }
       // return obj;
 //};
// let keys = Object.keys(contact);
// console.log("keys = ",keys);


// let image = 
// {
//     title : "Title",
//     author: "Author",
//     doc: "doc",
//     getfulldetails()
//     {return(`${this.title} ${this.author} ${this.doc}`)},
//     //getage()
//     //{
//     //return(this.age)
//     //},
//     // setage(a)
//     // {
//     //     if(a>0) this.age = a
//     // }
// };


// let createcolorpoint = function(x,y,color)
// {
//     let _info = "object under construction";
//     let _color = color;
//     console.log(_info);
    
//     this.x = x,
//     this.y = y,
//     this.getcolor =function() 
//     {
//         return _color
//     }
    
// }
// let coloredpoint1 = new createcolorpoint(1,1,"red");
// let coloredpoint2 = new createcolorpoint(2,2,"green");
// console.log("coloredpoint 1,getcolor ",coloredpoint1.getcolor());
// console.log("coloredpoint 2,getcolor ",coloredpoint2.getcolor());





// let createImage = function(title,author,doc)
// {
//     this.title = title,
//     this.author = author,
//     this.doc = doc,
//     this.getTitle =function()
//     {
//         return(this.title)
//     },
//     this.getAuthor =function()
//     {
//             return(this.author)
//     },
//     this.getDoc =function()
//     {
//             return(this.doc)
//     }
// };


// let point1 = createpoint(1,1);
// let point2 = createpoint(2,3);



// let Image1 = new createImage("Last Supper","Da Vinchi",2000);
// console.log("Image 1,details ",Image1.getTitle(),Image1.getAuthor(),Image1.getDoc());
// let Image2 = new createImage("the man","AKG",2020);
// console.log("Image2 details : ",  Image2.getTitle(),Image2.getAuthor(),Image2.getDoc());


//let createImage= (title,author,doc)=>({title,author,doc})//function(x,y,z)// factory method
//let createImage= (title,author,doc) = function(title,author,doc)//function(x,y,z)// factory method
function createImage(title,author,doc)
{//=> ({title,author,doc})
    return {
        //let obj = {};
        title:title,
        author : author,
        doc : doc,
        getTitle =function()
        {
            return(title)
        },
        getAuthor =function()
        {
            return(author)
        },
        getDoc =function()
        {
            return(doc)
        }
    }
};
let Image1 = new createImage("Mona Lisa", "Leonardo da Vinci", 1503)
let Image2 = new createImage("The Last Supper","Leonardo da Vinci", 1495)
let Image3 = new createImage("Starry Night","Vincent van Gogh", 1889)
let Image4 = new createImage("The Scream","Edvard Munch", 1893)
let Image5 = new createImage("Guernica","Pablo Picasso", 1937)
let Image6 = new createImage("The Kiss","Gustav Klimt", 1907)
let Image7 = new createImage("Girl With a Pearl Earring","Johannes Vermeer", 1665)
let Image8 = new createImage("The Birth of Venus","Sandro Botticelli", 1485)
let Image9 = new createImage("Las Meninas","Diego Velázquez", 1656)
let Image10 = new createImage("The Creation of Adam","Michelangelo", 1512)
let images = [Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10]
images.forEach(image=>console.log(image.title,image.author,image.doc))

images1 =[]
let i = 0;///contact["email_"+count] = email
for(i=0;i<10;i++)
//images.forEach(image=>images1[i]=createImage(image.title,image.author,image.doc))
images1.push(createImage(images[i].title,images[i].author,images[i].doc))
console.log("0th one is ",images1[0].getTitle,images1[0].getAuthor,images1.getDoc)
//images1.forEach(im=>console.log(im.getTitle(),im.getAuthor(),im.getDoc()))
