// Continue with control flow Truthy values nad Falsy Value

const useremail = "h@hitesh.ai";

if(useremail)
{
    console.log("Got email");
    
}
else
{
    console.log("dont have a mail.");
    
}

// Check Array Empty or not Using if condition
const arry = [];
if(arry.length === 0)
{
   console.log("The array is empty ");
   
}
else
{
    console.log("The Array is not Empty");
    
}


// Check the object is empty or not

 const obj = {}

 if(Object.keys(obj).length === 0)
 {
     console.log("the Object is  Empty");
     
 }
 else
 {
    console.log("the array is  not empty");
    
 }

//  Nullish Coalescing operator   ??

const val1 = 10 ?? 20;

console.log(val1);

const Val1 = null ?? 20;

console.log(val1);









