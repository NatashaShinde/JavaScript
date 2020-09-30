//DOM Traversal Methods :
// 1.parentNode      :child ko lekr parent ko target krtae.
                      //iska koi parent na ho to kuch na kuch dhudkr parent return krega.

// 2.ParentElement   :child ko lekr parent ko target krtae.
                     //iska koi parent na ho to null return krega         

// 3.Children        :parent ko lekr children ko target krenge 
                     //children sirf html ke tag return (target) krega

// 4.childNodes      :parent ko lekr children ko target krenge 
                     //lekin childnode html ke tag or text bhi(comments,enter,spaces,text node) return krega          
// 5.firstChild                
// 6.firstElementChild         
//  7.lastChild
//  8.lastElementChild
//  9.nextElementSibling
// 10.nextSinling
// 11.previousElementSibling
// 12.previousSibling






//3.To target Children:
                
//var a = document.getElementById("outer").children; //yeh outer ke sare children dikhaega.
//var a = document.getElementById("inner").children[2]; //yeh inner ke particular mentioned children dikhaega
//console.log(a);

//now you want to set styling in it.
// document.getElementById("inner").children[1].style.background = "blue"; //child ko target krke style chng ki.
// var a = document.getElementById("inner").children[1];
// console.log(a);

//now you want to set styling in it & check inner html.
// document.getElementById("inner").children[1].style.background = "blue"; //child ko target krke style chng ki.
// var a = document.getElementById("inner").children[1].innerHTML;
// console.log(a);




//4.To target childNode:
//now you want to set styling in it.
// document.getElementById("inner").children[0].style.background = "blue"; //child ko target krke style chng ki.
// var a = document.getElementById("inner").childNodes[0];
// console.log(a);

//now you want to set styling in it & want to add innerHTML.
document.getElementById("inner").childNodes[1].style.background = "blue"; //child ko target krke style chng ki.
var a = document.getElementById("inner").childNodes[1].innerHTML;
console.log(a);