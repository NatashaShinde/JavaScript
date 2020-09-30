const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);

function nextSlide(){
   container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'}); //animation
   if (counter === 4) {
      counter = -1;
   }
   counter++;

   //change actual value from background.
   container.style.backgroundImage = `url(bcg-${counter}.jpeg)`;
}


function prevSlide(){
   container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'}); //animation
   if (counter === 0) {
      counter = 5;
   }
   counter--;

   //change actual value from background.
   container.style.backgroundImage = `url(bcg-${counter}.jpeg)`;
}