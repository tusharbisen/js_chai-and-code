// Object in javascript Part1 
// We will Learn How to intialize the object


let Myname = Object.create(null)

// console.log(Myname);
const intialiSYM =  Symbol("key1")

const myInfo = {
    name: "Tushar Bisen",
    edu: "BE",
    age: 22,
    email: "tusharbisen32@gmail.com",
    intialiSYM:"hii symbol intialize succsfully"

};

// console.log(myInfo.age);
// console.log(myInfo.email);

let getinfo = function()
{
    console.log("THis is Personal Info of user ");

}

console.log(getinfo());

console.log(`hi this is  symbol ${myInfo.intialiSYM}`);





