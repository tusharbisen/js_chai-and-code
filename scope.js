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