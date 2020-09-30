//Method - 1 (LESS usable method)

// Assign Events Using the HTML DOM :
//document.getElementById(id).onclick = functionName; // SYNTAX

var element;

//element = document.getElementById("header").onmouseenter = abc;
  element = document.getElementById("header").onclick = abc; //yaha DOM ke ander hi directly onclick event 
                                          //lgane ka naya tarikha or use function ki value assign kr dete hey.

function abc()
{
	document.getElementById("header").style.backgroundColor = "green"; //when click on header 
                                                                      //color change to green
}




