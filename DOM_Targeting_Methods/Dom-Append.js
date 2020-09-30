// DOM Append Methods:
// 1.appendChild : to combine 2 things like tag & text (defination for my understanding.)
// 2.insertBefore
// 3.insertAdjacentElement
// 4.insertAdjacentHTML
// 5.insertAdjacentText


//using first 2 methods: only append

// 1.appendChild:
// Javascript ke through HTML me kuch bhi add krne ke lie yeh DOM create methods use hotie.
var newElement = document.createElement("h2"); //it creates new h2 tag in HTML file.

var newText = document.createTextNode("Hello world !") //it creates new Text in HTML file.

//var newComment = document.createComment("This is comment !") //it creates new cooment in HTML file.

//newElement ke andr append(combine) krnae newText ko to eslie following method:
newElement.appendChild(newText); //esse h2 tag me newText print hoga (step 1:yaha dono append hue)

//ab ess new h2 tag ko html ke file ke sath link krnae to following method:
//HTML me jo id="test" hey usko target krke
document.getElementById("test").appendChild(newElement); //(step 2:yaha new variable ke value ko 
                                        //HTML file me append krenge)
       //HTML file me jo bhi pele se wo div me hoga wo pehlr print hoga 
       //or fir last me Append vala part print hoga.
//document.getElementById("test").appendChild(newComment); //to append comment in HTML file.
console.log(newElement);
