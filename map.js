// Map Function in JS

// Using  Map function in array
const Mynum = [1,2,3,4,5,6,7,8,9,10];

const num = Mynum.map((item)=> item + 10);

// console.log(num);

// using chaining method in program
let values = num.map((item)=>item *10 , num.filter((num)=>num>=50))

console.log(values);


// ***************************************************************************************
// Using Reduce method in javascript

const shoping_cart = [
    {
        item:"book",
        price:299
    },
    {
        item:"js",
        price:399
    },
    {
        item:"java",
        price:499
    },
    {
        item:"C++",
        price:599
    },
    {
        item:"ruby",
        price:899
    },
];

// Adding price in shoping car using reduce function 
const addcal = shoping_cart.reduce((acc,item)=> acc + item.price,0);


console.log(addcal);




