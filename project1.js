const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
// console.log(buttons);

buttons.forEach(function (buttons){
    console.log(buttons);
    buttons.addEventListener('click' , function(e){
        // console.log(e);
        // console.log(e.target);

         if(e.target.id ==='Grey'){
            body.style.backgroundColor = e.target.id;
         }
      
         if(e.target.id ==='Yellow'){
            body.style.backgroundColor = e.target.id;
         }
         

         if(e.target.id ==='Red'){
            body.style.backgroundColor = e.target.id;
         }


         if(e.target.id ==='Pink'){
            body.style.backgroundColor = e.target.id;
         }


         if(e.target.id ==='Green'){
            body.style.backgroundColor = e.target.id;
         }
    })
    
})