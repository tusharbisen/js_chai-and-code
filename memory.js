// Stack Memory and Heap Memory 

// In Stack memory in which storred the Primitive Datatype

// In Heap Memory stored the non Primitive Datatype Also called as Refrence Variable

//  Stack Memory Example 
 let username = " TusharBisen"

 let username2 = username

 console.log(username)

 console.log(username2);


//  Heap Memory Example

let userinfo = {
    Email:"tusharbisen32@gmail.com",
    id:"1001"

}

let userinfo2 =  userinfo;
userinfo2.Email="tejas"

console.log(userinfo)

console.log(userinfo)
