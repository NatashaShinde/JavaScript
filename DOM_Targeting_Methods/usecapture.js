//UseCapture:

//addEventListener(event,function,useCapture); // SYNTAX
//useCapture returns result in true or false case.

//DOM addEventListener() Method : 

//document.getElementById(id).addEventListener("click",functionName); //SYNTAX 1
//document.getElementById(id).addEventListener("click",function(){...statement....});  //SYNTAX 2


document.querySelector("#inner").addEventListener("click",function(){
	alert("Inner Div");
},true);

document.querySelector("#outer").addEventListener("click",function(){
	alert("Outer Div");
},true);
