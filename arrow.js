// To study The arrow Function and this keyword in javascript

// create a Object 

const user = 
{
     username:"Tushar",
     price:344,

     showMessage : function ()
     {
        // console.log("Welcome to the series of Javadcript Programming");
    
        console.log(`${this.username} , This is username of chai`);
         
    }

}


// In above code  in which used the this keyword 

//  console.log(user);


//  console.log(user.showMessage());
 
 console.log(user.showMessage());
 const username = "Tejas"

 console.log(user.showMessage());


// *Important * :- In Arrow Function or any normal function in which we can not used the this keyword only access in the object 


// Define the Function
function IndiasLatent () 
 {
    console.log("Welcome to india Gots LAtest ");
    
 }

 IndiasLatent()


// Creating a Arrow Function 
 const funny = (num1,num2) => 
    { 
        return num1 + num2 ;
    } 

console.log(funny(1 ,4));  


// implicit Return in the Arrow Function 


const Funny = (num1,num2) => (num1 + num2);

console.log(Funny(2,5))