console.log("hello world");
/*
document.getElementById('heading').addEventListener('click', function(){
	console.log('You have clicked the Heading !');
	location.href = "//codewithharry.com";  //it will hit uhh on that loaction
});
*/

document.getElementById("heading").addEventListener("click", function(e){
	//let variable;
	let variable = e.target;
	variable = e.target.className; 
	variable = e.target.classList;
	variable = Array.from(e.target.classList); //it gives Array of class Names
	variable = e.target.id;
    variable = e.offsetX; //element ke kitne durr aapne click kiae wo numbers se show krega
    variable = e.offsetY;
    variable = e.clientX; //browser window se kitna durr click kia wo btaega
    variable = e.clientY;
	
	console.log("You have clicked the Heading !");
	//console.log(e);
	console.log(variable);
});