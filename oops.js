

// This is Object Literal 



const userInfo = 
{
    username:"Tushar",
    logincount:"8",
    getUserInfo()
    {
        console.log("This is Function inside the object");
        
        
        
    }
    
}
console.log(userInfo.username);


// Creation of Object 


function Userone(username,signup,count)
{
    this.signup = signup;
    this.count = count;
    this.username = username;

    this.gretting = function()
    {
        console.log(`Welcome To javascript Programming Language ${username}`);
        
    }
    return this
}

const userone1 = new Userone("Tushar",true,8,);
const userone2 = new Userone("John Wick ",false,10);


console.log(userone1.constructor);

// console.log(userone2);

