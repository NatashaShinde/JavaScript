//DOM Create Methods:
// 1.createElement  :it creates new paragraph in HTML file.
// 2.createTextNode :it creates new Text in HTML file.
// 3.createComment  :it creates new cooment in HTML file.

// Javascript ke through HTML me kuch bhi add krne ke lie yeh DOM create methods use hotie.
var newElement = document.createElement("p"); //it creates new paragraph in HTML file.
console.log(newElement);

var newText = document.createTextNode("Hello world !") //it creates new Text in HTML file.
console.log(newText);

var newComment = document.createComment("This is comment !") //it creates new cooment in HTML file.
console.log(newComment);