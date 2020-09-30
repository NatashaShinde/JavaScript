//DOM ReplaceChild() Method:
// 1.replaceChild
// 2.removeChild



// 2.removeChild:
// var newElement = document.createElement("li");

// var newText = document.createTextNode("WOW new text");

// newElement.appendChild(newText);

//no need to write above lines.
var target = document.getElementById("list"); //yaha HTML file mese list id ko target kia 
              //qki list uska parent Node hey. to parent ko target krnae. 
var oldElement = target.children[1];// ess element ko hme remove krnae. Or wo element hmare target ke 
                     //andr he hey eslie target. likha or uska 1st children hme chie eslie .children[0]

// console.log(oldElement);
//now using replaceChild Method

target.removeChild(oldElement); //target. lia qki essi ke andr ke child ko replace krnae,
                            //(jisko reove krnae woi element bracket me aaega.)