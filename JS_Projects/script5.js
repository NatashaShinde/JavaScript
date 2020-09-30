let counter = document.querySelector('.counter');
//const btns = document.querySelector('#btns');
const lowerCountBtn = document.querySelector('#lowerCountBtn');
const addCountBtn = document.querySelector('#addCountBtn');

let count = 0;
addCountBtn.addEventListener('click',incrementCounter);
lowerCountBtn.addEventListener('click',decrementCounter);

function incrementCounter()
{
   count++;
   counter.innerHTML = count; //when we press btn, the function will trigger & increment counter,step1

   if (counter.innerHTML > '0') // step 2
   {
   	counter.style.color='green';
   }
   else if(counter.innerHTML === '0')
   {
   	counter.style.color= 'white';
   }
   //for animation
   counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'}); //step 3
}

function decrementCounter()
{
   count--;
   counter.innerHTML = count; //when we press btn, the function will trigger & decrement counter,step1

    if (counter.innerHTML < '0') // step 2
   {
   	counter.style.color='red';
   }
   else if(counter.innerHTML === '0')
   {
   	counter.style.color= 'white';
   }
  //for animation
   counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});  //step 3
}