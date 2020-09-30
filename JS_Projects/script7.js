const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

//loop through all the Btns 
for(let i=0; i<btns.length; i++){     //grabing value & put it on screen
   btns[i].addEventListener('click', function() {
      let number = btns[i].getAttribute('data-num');  // here using data num which is in HTML file.
                            //after pressing key we have to store it, for that using getAttribute
      screen.value += number // This is screen which is holding our value.
   })
}


equalBtn.addEventListener('click', function(){

   if(screen.value === ''){   //if you press only = then, alert will display.
        alert("Input is empty !");
   }
   else{

   let value = eval(screen.value); //evaluate value in javascript
   screen.value = value;  //after evalution(operation) whatever value we get, store it in screen.
}
})



clearBtn.addEventListener('click', function(){
   screen.value = "";
})