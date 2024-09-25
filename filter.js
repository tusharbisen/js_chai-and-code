// Filter functionin javascript 

const Mynum = [1,2,3,4,5,6,7,8,9,10];

const values = Mynum.filter( (item) => item >=5)

// console.log(values);



const book = 
[
   {
    title:"Bookone",
    genre:"history",
    publish:2009
   },
   {
    title:"Booktwo",
    genre:"hindi",
    publish:2010
   },
   {
    title:"Bookthree",
    genre:"marathi",
    publish:2009
   },
   {
    title:"Bookfour",
    genre:"geography",
    publish:2009
   },
   {
    title:"Bookfive",
    genre:"history",
    publish:2009
   },
   {
    title:"Booksix",
    genre:"hindi",
    publish:1967
   },
   {
    title:"Bookseven",
    genre:"history",
    publish:2009
   }
];

let userbook = book.filter((item)=>item.genre === "hindi");

userbook = book.filter((item)=>item.genre === "hindi" && item.publish>=1967);


console.log(userbook);


