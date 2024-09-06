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


// *************************************------------END-----------***************************************

// Function Part 2 accesing the function using object and array 


function PrintMessage(){
 console.log("This is Tushar");
  
}

console.log(printMessage("AFA"))


// Using rest Operator in the function and rest operator also called as Spread Operator Its Totally depend on the sitauion where we use the particular Operator 
function calculateCart(...numbers){
   return numbers;
}

console.log(calculateCart(56,65,776,));


// Accessing the object using function 

// Create a Object 

 const movies = {
  Name:"Breaking Bad",
  Director:"KK Misra",
  prices:"2000cr"
 }

 function getdataofMovies(getinfomovies){
   console.log(`This is name of the movie ${movies.Name} & This is price of movie${movies.prices}`);
   
 }

//  Execute the Function 

console.log(getdataofMovies(movies.Director))


// Accessing the Array using function 

// Create a Array 

const fruit = ['mango','banana','apple','pineapple'];

// Creating a Function 
// accessing the array of index 2 
function GetINFO(getindexof)
{
  console.log(`the index of 2 is  ${fruit[2]}`);
  
}


console.log(GetINFO())

