
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

//////////////////////scenario 2 ///////////////////////////////////

class Image
{
    Title
    Author
    Doc
    constructor(Title,Author,Doc)
    {
        this.Title = Title;
        this.Author = Author;
        this.Doc = Doc;
    }
    printDetails()
    {
        console.log(this.Title,this.Author,this.Doc)
    }

};
let   getImage = function(Title,Author,Doc)
{
    let im = {};
    im.Ttile = Title
    im.Author = Author
    im.Doc = Doc
    let printDetails = function()
    {
        console.log(this.Title,this.Author,this.Doc)
    } 
    return(im)
}
let image1 = new Image("Last Supper","Da Vinchi",2000);
let image2 = new Image("The Last Supper","Leonardo da Vinci", 1495)
let image3 = new Image("Starry Night","Vincent van Gogh", 1889)
let image4 = new Image("The Scream","Edvard Munch", 1893)
let image5 = new Image("Guernica","Pablo Picasso", 1937)
let image6 = new Image("The Kiss","Gustav Klimt", 1907)
let image7 = new Image("Girl With a Pearl Earring","Johannes Vermeer", 1665)
let image8 = new Image("The Birth of Venus","Sandro Botticelli", 1485)
let image9 = new Image("Las Meninas","Diego Velázquez", 1656)
let image10 = new Image("The Creation of Adam","Michelangelo", 1512)

let images = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10]
images.forEach(image=>console.log(image.Title,image.Author,image.Doc))

images1 =[]
let i = 0;///contact["email_"+count] = email
for(i=0;i<10;i++)
images1.push(new Image(images[i].title,images[i].author,images[i].doc))
let im1 = getImage("Title1","Author1","Doc1");
im1.printDetails();
//console.log("0th one is ",images1[0].getTitle,images1[0].getAuthor,images1.getDoc)
//images.forEach(image=>images1[i]=createImage(image.title,image.author,image.doc))
// let Image1 = new createImage("Last Supper","Da Vinchi",2000);
// console.log("Image 1,details ",Image1.getTitle(),Image1.getAuthor(),Image1.getDoc());
// let Image2 = new createImage("the man","AKG",2020);
// console.log("Image2 details : ",  Image2.getTitle(),Image2.getAuthor(),Image2.getDoc());

///////////////////scenario 1 ///////////////////////////////////////
//let createImage= (title,author,doc)=>({title,author,doc})//function(x,y,z)// factory method
//let createImage= (title,author,doc) = function(title,author,doc)//function(x,y,z)// factory method
// function createImage(title,author,doc)
// {//=> ({title,author,doc})
//     return {
//         //let obj = {};
//         title:title,
//         author : author,
//         doc : doc,
//         getTitle =function()
//         {
//             return(title)
//         },
//         getAuthor =function()
//         {
//             return(author)
//         },
//         getDoc =function()
//         {
//             return(doc)
//         }
//     }
// };


// let Image1 = new createImage("Mona Lisa", "Leonardo da Vinci", 1503)
// let Image2 = new createImage("The Last Supper","Leonardo da Vinci", 1495)
// let Image3 = new createImage("Starry Night","Vincent van Gogh", 1889)
// let Image4 = new createImage("The Scream","Edvard Munch", 1893)
// let Image5 = new createImage("Guernica","Pablo Picasso", 1937)
// let Image6 = new createImage("The Kiss","Gustav Klimt", 1907)
// let Image7 = new createImage("Girl With a Pearl Earring","Johannes Vermeer", 1665)
// let Image8 = new createImage("The Birth of Venus","Sandro Botticelli", 1485)
// let Image9 = new createImage("Las Meninas","Diego Velázquez", 1656)
// let Image10 = new createImage("The Creation of Adam","Michelangelo", 1512)
// let images = [Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10]
// images.forEach(image=>console.log(image.title,image.author,image.doc))

// images1 =[]
// let i = 0;///contact["email_"+count] = email
// for(i=0;i<10;i++)
// //images.forEach(image=>images1[i]=createImage(image.title,image.author,image.doc))
// images1.push(createImage(images[i].title,images[i].author,images[i].doc))
// console.log("0th one is ",images1[0].getTitle,images1[0].getAuthor,images1.getDoc)
// //images1.forEach(im=>console.log(im.getTitle(),im.getAuthor(),im.getDoc()))
