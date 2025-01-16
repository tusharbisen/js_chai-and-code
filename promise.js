// In this Pogram we will Understand the Promises and how can implement in the javascript file

// Here Now Start the Program


// This is First 1)  Promise  i build 



// This the Third 3) promise  i  create 



new Promise(function(resolve,reject)
{

resolve({usename:"Tushar_Bisen", email:"tusharbisen32@gmail.com"});

console.log("In this second Promise in which i add the object in the resolver");
}).then(function(user)
{
     console.log(user);
     
})


// This is Promise Four 4) Promise i create


const promise5 = new Promise(function(resolve,reject)
{
       let error = true;
       if(!error)
       {
       resolve( {usernames:"Tejas Bisen",password:"tushar123" })
       }
       else
       {
        reject(console.log("Something Went Wrong 404"));
       }

})

promise5.then(function(user)
{
      console.log(user);
    return user.usernames;
} ,1000)

.then((usernames)=> {
    console.log(usernames);
})
.catch(function(e)
{
    console.log(e);
    
}).finally(()=> console.log("Finnaly the code is Runnable "));


// In This Promise we use the Asynchronous Javascirpt

const promisefive = new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        let error=true
        if(!error)
        {
            resolve({usernames:"DevenAI",Email:"deven@ai.gmailcom"})

        }
        else
        {
            reject(console.log("Something Went Wrong In Deven AI 404"));
        }
    },1000)  
}
);


async function executeProgram()
{
     try {
        
    
        const result = await promisefive;
     } catch (error) {
        console.log(error);
        
     }
}

executeProgram();



async function execue()
{
    try{
       const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        

        .then(response => response.json())
        .then(json => console.log(json))

        }
        catch(error)
        
        {
            console.log("This code is not Runnable");
        }
    
}
execue()


 
