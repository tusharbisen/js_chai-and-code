// In this Program we Study about the given code below

let num = 10;
let num1 = 20;

function add(num , num1)
{
 let total = num +num1;
 return total;
}


let result = add(10,20);


console.log(result);


// In above example for Javascript Execution context 

// in this program we will understnad the how to  execute the javascript code 

// *  Phases of Javascript Execution Context 
//   Phase 1 :-  Global Execution Phase
//   Phase 2 :-  Memory Creation Phase 
//   Phase 3 :-  Execuiton  Phase

// Phase 1 :-  In this gobla EP in which the code run in the {} this Block and the code in save in THIS keyword 
// Phase 2:- after the memory creation phase in which allocate the memroy of declaring varible 
// Phase 3:- In phase 3 in which the Exection phase in which actual assign the value to the variable and execute the 
// Arthamatic and Logical Operation 

// Note :-  Suppose we Declare the function then automatically create a new variable context in the memory and in which inlcude
// new variable execution phase and execution thread after execute the phase then automatically delete the new variale pahse 


// after exectute the Javscript execution context then introdueced the new thing which is called as Callstack


//  Callstack :-  In the callstack in which the used LIFO approach 

//  Example of Callstack 

function one()
{
    console.log("this is one");
    two();
    
}

function two()
{
    console.log("this is two");
    three();
}
function three()
{
    console.log("This is three");
    
}
console.log(one());
console.log(two());
console.log(three());

