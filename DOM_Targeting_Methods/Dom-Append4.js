// DOM Append Methods:
// 1.appendChild: combine 2 things like tag & text (defination for my understanding.)
// 2.insertBefore
// 3.insertAdjacentElement
// 4.insertAdjacentHTML
// 5.insertAdjacentText


//using first 2 methods: only append
//using last 3 methods: create & append
//element ko create krke unke andr text node ko bhi append kr sktey 
//or append krne ke baad usko bhi kahi specific position pr append kr skteye.


//4.insertAdjacentHTML:
//DOM insertAdjacent Positions: 1.beforebegin 
                              //2.afterbegin 
                              //3.beforeend 
                              //4.afterend
                              
//But if we want to print in between that div then use following method:

//var newElement = document.createElement("h2");

//var newText = document.createTextNode("Hello World !");

//newElement.appendChild(newText);


//no need to write above 3 lines if you are using inserAdjacentHTML
var target = document.getElementById("test"); 
var newElement = "<h2>Hello World !</h2>";
target.insertAdjacentHTML("afterend",newElement);//("position"ke kaha pr esse dalnae,konsa element dalnae)



