/*let btn = document.getElementById('btn').addEventListener("click",func1);
function func1(e) {
	console.log("Thanks", e);
	e.preventDefault();  //to prevent default behaviour of type = submit
}

*/

/*
let btn = document.getElementById('btn');
btn.addEventListener("click", func1);
btn.addEventListener("dblclick", func2);
btn.addEventListener("mousedown", func3);

function func1(e) {
	console.log("Its single click", e);
	e.preventDefault();  //to prevent default behaviour of type = submit
}

function func2(e){
	console.log("its Double click", e);
	e.preventDefault();
}

function func3(e){
	console.log("its mousedown event", e);
	e.preventDefault();
}
*/


/*
document.querySelector(".no").addEventListener("mouseenter", function(){
	console.log("You entered no class element");
})

document.querySelector(".no").addEventListener("mouseleave", function(){
	console.log("You exited no class element");
})*/



document.querySelector(".container").addEventListener("mousemove", function(e){
	console.log(e.offsetX, e.offsetY);
	//document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX + e.offsetY})`;
	//document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX})`;
	//document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`;
	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 54)`;
	console.log("You triggered mouse move event");
})