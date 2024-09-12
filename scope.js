// To study about local and global scope in javascript 

// var num1 = 10;

// let num2 = 20;

// const num3 = 30;

let a = 300 
                                //  This is Global Scope in this Program 

if(true) 
{
    var num1 = 10;
    let a = 20;
                                           
    let num2 = 20;              

                            //  This is Local scope in this Program 
    const num3 = 30;
  console.log("inner Block" , a);
  

      
}
 console.log(a);
 


 console.log(num1);   
                        //  Declaration of the variable with deffrent datype 
//  console.log(num2);
 
//  console.log(num3);




// ************************************** Part 2 Scope and Hoisting In javascript ************************

function one()
{

  const username = "TUSHAR";

   function two()
   {
     const website = "CHAI AND CODE";   
     
     console.log(username);    
  // We can access the parent in the child scope or function 
      
   } 

   two();

// console.log(website);

}
one();

// Declare the Function 

addone(6);
function addone(num)
{
 return num +1;
  
}

console.log(addone(5));

// We can declare a function using two method using name of the function and variable name assign to the function 
//  const addtwo  is also known as mini Hoisting 


const addtwo = function(num)
{
  return num +2 ;
}

console.log(addtwo(5));

