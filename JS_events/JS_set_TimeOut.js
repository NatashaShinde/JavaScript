// JavaScript Animation:
// 1.setTimeout() :esse function sirf ek hi baar chltae jo hmne yaha pr time dia hotae.
// 2.clearTimeout(): diye hue time se pehle hi function ko stop krne k lie ye method use hotae.


// settimeout(functionName,millisecond) //(SYNTAX) 1000ms = 1 second

// var timeoutID = setTimeout(Anim, 5000);  //setInterval timeoutID var me hey

// function Anim()
// {  
// 	var target = document.getElementById("test"); //target kia id ko
// 	target.style.width = "500px";// 3 sec ke baad width 500px se bdhrgi, wo bhi 1 hi baar.
// 	//console.log("Hello"); // 3 sec ke baad msg print hoga pr wo 1 hi baar print hoga.
// }

// function stopAnimation()
// {
// 	clearTimeout(timeoutID);
// }


//using in-built function
//we can use addEventListener method in it.
var timeoutID = setTimeout(function()
{
	document.getElementById("test").style.width = "500px";
	
},5000);

function stopAnimation()
{
	clearTimeout(timeoutID);
}






//Another tutorial (geeky tuts)
//Basic type : 1
// function changeCss()
// {
// 	document.getElementById("test").style.width = "500px";
// }

// setTimeout(changeCss,2000);


//Type 2: cut whole function of tpe 1 & paste it in chageCss here=>// setTimeout(changeCss,2000); 
// setTimeout(function changeCss()
// {
// 	document.getElementById("test").style.width = "500px";
// },2000);


//Type 3 : same as above only make the function annonymous (no need to give function name)
// setTimeout(function()
// {
// 	document.getElementById("test").style.width = "500px";
// },2000);


//Type 4 : using arrow & annonymous(no need to give function name) function
// setTimeout(() => {
// 	document.getElementById("test").style.width = "500px";
// }, 2000);


//clear Timeout method
// var timeoutID = setTimeout(() => {
// 	document.getElementById("test").style.width = "500px";
// },5000);

// function clrTime(){
// 	clearTimeout(timeoutID); //put above parameter var in it
// }
// document.getElementById("myBtn").addEventListener("click",clrTime); //use clrTime function for button

