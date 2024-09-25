// High order function 
// create a array

const arr = [1,2,3,4,5];

// Used for of loop in array 

 for (const num of arr) 
   {
    console.log(num);
   }


// Used For of loop in object
// Using for of loop the object is not interable in for of loop 

// const  county =
// {
//     IN: "India",
//     USA: "United State Of America",
//     CA: "Caneda"
// }
 

//  for (const con of county) {
   //  console.log(con);
    
    
//  }

// used Map Function 

// Using for of loop interable in the map function 

const subject = new Map()

subject.set('js' , "Javascript");
subject.set('py' , "Python");
subject.set('java' , "Java");
subject.set('rb' , "ruby");

// console.log(subject);

for (const [key, value] of subject) 
   {

   console.log(key,value);
      
   }

// *************************************************************************************************

// Using For in Loop 
// Can not iterable in array in for inb loop 

// const book = ['read','write','speak','learn'];
// for (const bookname in book) 
//    {
//       console.log(`${bookname}: ${book[bookname]}`);
      
//    }


   // Creating a Object

   const State = 
   {
      'mh':"Maharastra",
      'mp':"Madya Pradesh",
      'pnj': "Punjab"
   } 

   for (const state_name in State)
       {
         console.log(`${state_name}: ${State[state_name]}`);
      
     
   }








 
   
   // ***********************************************************************************************************

   // Using for each high order Function 

// using for each loop in function 
const coding = ['js','java','ruby'];

coding.forEach(function (item) 
{
    console.log(item);
    
})



// using for each loop using arrow function 
coding.forEach((list)=>
{
   console.log(list);
   
})



