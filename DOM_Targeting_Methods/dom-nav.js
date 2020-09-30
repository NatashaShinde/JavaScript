//DOM Traversal Methods :
// 1.parentNode      :child ko lekr parent ko target krtae.
                      //iska koi parent na ho to kuch na kuch dhudkr parent return krega. 
                                
// 2.ParentElement   :child ko lekr parent ko target krtae.
                     //iska koi parent na ho to null return krega         
// 3.Children                   
// 4.childNodes                
// 5.firstChild                
// 6.firstElementChild         
//  7.lastChild
//  8.lastElementChild
//  9.nextElementSibling
// 10.nextSinling
// 11.previousElementSibling
// 12.previousSibling


//1.To target ParentElement 
//var a = document.getElementById("inner").parentElement;  //inner ke parent ko target krnae. 
                                                           //so result will be outer div.
                                                      //(here parent is outer class & child is inner class)
//var a = document.getElementById("outer").parentElement;  // outer ke parent ko target krnae.
                                                         //so result will be body div.
//var a = document.body.parentElement;    //body ka parent ko target krnae. 
                                                           //so result will be html div.

// document.getElementById("inner").parentElement.style.background = "red"; //child ko use krke parent ki
//                 //property change ki. mtlb parent ko target kia.(here parent is outer class)
// var a = document.getElementById("inner").parentElement;

// console.log(a);

// document.getElementById("child-c").parentElement.style.background = "red"; //child ko use krke parent ki
//                 //property change ki. mtlb parent ko target kia.(here parent is inner class)
// var a = document.getElementById("child-c").parentElement;

// console.log(a);

// document.getElementById("child-c").parentElement.style.background = "red"; //child ko use krke parent ki
//                 //property change ki. mtlb parent ko target kia.(here parent is inner class)
// var a = document.getElementById("child-c").parentElement;

// console.log(a);



//2.To target ParentNode:

// document.getElementById("child-c").parentNode.style.background = "red"; //same as above.
                
// var a = document.getElementById("child-c").parentNode;

// console.log(a);

document.getElementById("child-c").parentNode.style.background = "red"; //same as above.
                
//var a = document.getElementById("main").parentNode; //it return document, means it return something.
var a = document.getElementById("main").parentElement; //it return null, means it return nothing.

//the above 2 line diff is the main dif betwn parentElement & parentNode.
console.log(a);