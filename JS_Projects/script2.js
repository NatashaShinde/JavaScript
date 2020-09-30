// creating array of possible numbers:
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

// Now we are selecting all the elements on which we are going to work
const hexBtn = document.querySelector('.hexBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');

//We have selected them, now for the button we would want to add a click EventListener
hexBtn.addEventListener('click',getHex);

function getHex()
{
	//now creating var, thats gonna actually hold my hexColor
	let hexCol = '#';

	//now generate remaining 6 numbers over here.
	//so crating for loop that picks these values from this array, 6 times.
	for (let i = 0; i < 6; i++) //loop for making 6 digit color.
	{
	   let random = Math.floor(Math.random()* hexNumbers.length);
	   //console.log(random); //suppose here 5
	   //now we want to add this value to above hexCol over here.
	   hexCol +=hexNumbers[random]; //yaha jo naya randomly hex color bnrae usse hum 
	   //original (random array me dalreye.)

	   //console.log(hexCol); // then here that 5 becomes #5, & this repaet for 6 times.
	   //Then our hex color is ready to print; so lets now print it.
	   bodyBcg.style.backgroundColor = hexCol;
	   hex.innerHTML = hexCol; //remember we had this value of hex, so we would want to place
	   //this hex value, thats why we are using innerHTML





	   //add to this hexCol something that you are picking from this hexNumbers with this random var.
	   //so we have random variable, we are getting a random number,
	   //then we placing random number in HexNumbers bcoz we know that we have an array 
	   //& we are placing this number as a index & whatever we are getting back we are just
	   //adding over here to this # tag so if we run this 6 times we should every time have random
	   //number like this. 

	}
}

