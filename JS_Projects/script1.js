//target button and body

const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

//create array to hold background colors, which we are going to use.
const colors = ['yellow','red','green','#3b5998','purple','lightblue'];

colorBtn.addEventListener('click',changeColor); //here changeColor is function

function changeColor()
{
   //bodyBcg.style.backgroundColor = colors[2];
   let random = Math.floor(Math.random()*colors.length)
   bodyBcg.style.backgroundColor = colors[random]; //yaha random color select krke usse hme 
   //body ke background me set krnae eslie bodyBcg pr styling krke wo random color dia jarae. 
}
