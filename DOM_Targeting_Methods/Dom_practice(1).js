console.log("welcome to tutorial");

let a = document;
a = document.all; //puri html miltie
console.log(a);
/*a = document.body;
a = document.forms[0];*/


/*  
//Array.from ek array bna letae HTML collection se.
//using Array.from we can create new array
//actually document is an object so we cant use array method (forEach()) directly in it.
//then also if we want to use it, then we can put into Array.from(), & then use it.
we can use it instead of for loop.

Array.from(a).forEach(function (element) {
	console.log(element);
})
   */


/*
a = document.links;
a = document.links[0];
a = document.links[0].href;
a = document.href;
console.log(a);
*/


//use document.images and document.scripts & print the list of images & scripts on an HTML page.
a = document.images;
a = document.scripts[0];
console.log(a);
