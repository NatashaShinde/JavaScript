//DOM ReplaceChild() Method:
// 1.replaceChild
// 2.removeChild



// 1.replaceChild:

var newElement = document.createElement("li");

var newText = document.createTextNode("WOW new text");

newElement.appendChild(newText);

var target = document.getElementById("list"); //yaha HTML file mese list id ko target kia
                       //qki list uska parent Node hey. to parent ko target krnae. 
var oldElement = target.children[0];// ess element ko hme replace krnae. Or wo element hmare target ke 
                 //andr he hey eslie target. likha or uska 1st children hme chie eslie .children[0]

// console.log(oldElement);
//now using replaceChild Method

target.replaceChild(newElement, oldElement); //target. lia qki essi ke andr ke child ko replace krnae,
                            //(newElement(replace k baad wala), oldElement(replace k pehle wala))