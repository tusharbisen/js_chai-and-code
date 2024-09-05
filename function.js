// function in javascript 
// To study the Declaration of function by parameter and argument

//Declaration of function by using this statement with function keyword

function Cal()
{
   console.log("Hii This tushar");
}

// Call the function 

Cal();


// using return type 
function addTwoNumbers(num1 ,num2)
{
    let result = num1+num2;
   return result
}

console.log (addTwoNumbers(1,2));

// without suing return type 
function addTwoNumbers(num1 ,num2)
{
    let result = num1+num2;
    return result
    
}
 


const result = console.log (addTwoNumbers(1,2));
 


// If the username is declare and the fuction is call that time the default declaration of username is override 
function printMessage(username = "tushar"){ 
    if(!username)
    {
      console.log("Please enter the usename ");
      
    }
    
    console.log(`${username} hi just logged sucessfully`);
    
      return username;
}


// override the tushar declare as a username because tejas is passed as a argument in the function 
printMessage("TEJAS");



