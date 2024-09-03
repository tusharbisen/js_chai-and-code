// Object in Javascript Part 2 
// How to create a Singleton onject and constructor based object 


// singleton object creation 

const userinfo = Object();
userinfo.id1 = "1002";
userinfo.Age = "18";
userinfo.email = "tusharbisen32@gmail.com";
userinfo.Mob = "9168383674";

console.log(`This is value assign by . operator ${userinfo.Mob}`);



// Constructor based object creation 

const tinderinfo = 
{
    id:"1001",
    name:"tushar",
    email:"tusharbisen32@gmail.com",
    mob_no:"9168383674",
    age:"18"
}

// console.log(userinfo);
// console.log(tinderinfo);


const obj1 = {1:"a", 2:"b"}

const obj2 = {3:"c", 4:"d"}

// Combine two object using method object.assign
const obj3 = Object.assign( obj1 , obj2) 

console.log(obj3);

// using Spread Operator 

console.log({... obj1} ,{... obj2});


// Accesing the value by using method object.keys()
console.log(Object.keys(userinfo));

// accessing the values by using method object.values()

console.log(Object.values(userinfo));

console.log(Object.entries(userinfo));







