// In This Program we will Understand the basic of For Loop as well as Break and Continue Keyword


for (let i = 0; i < 10; i++)
{

    for (let j = 0; j < 10; j++) {
        const element = j;
        console.log(`This is inner loop ${j}`);
        
        
    }
    const element = i;
    console.log(`This outer loop ${i}`); 
    
}


for (let i = 0; i <= 10; i++) 
{
    const element = i;
    console.log(i);
    
  if(i==5)
    {
        console.log("5 id detected");
        break;
        
    }    
    
}

for (let i = 0; i <= 10; i++) 
    {
        const element = i;
        console.log(i);
        
      if(i==5)
        {
            console.log("5 id detected");
            break;
            
        }    
        
    }




    for (let i = 0; i <= 10; i++) 
        {
            const element = i;
            console.log(i);
            
          if(i==5)
            {
                console.log("5 id detected");
                continue;
                
            }    
            
        }