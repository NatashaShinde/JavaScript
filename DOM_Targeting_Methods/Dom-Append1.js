// DOM Append Methods:
// 1.appendChild: combine 2 things like tag & text (defination for my understanding.)
// 2.insertBefore
// 3.insertAdjacentElement
// 4.insertAdjacentHTML
// 5.insertAdjacentText


//using first 2 methods: only append

//2.insertBefore
//But if we want to print in between that div then use following method:

var newElement = document.createElement("h2");

var newText = document.createTextNode("Hello World !");

newElement.appendChild(newText);

var target = document.getElementById("test"); //To yeh hamara target id hogya.
                                        // eske andr heading ko append krnae.

target.insertBefore(newElement,target.childNodes[0]) 
//(kisko yaha append krnae,kisse pehle append krnae..
//to yaha target variable ko insert krnae eslie target likha or target ke andr jo bhi child nodes aare the
//eslie childNodes likha or usme se bhi jo 0 index pr hey usse bhi pehle h2 jo new tag hey waha append krnae)
//also you can write [1][2][3] anything where you want to insert new thing.



