//Dom_practice(3).js file me kaise Dom elements ko select krteye wo dekha
//or ab ees tutorail me uss element ke parent, children or siblings ko kaise target kr sktye wo sikhenge.

/*//difference in child & children:

let cont = document.querySelector(".no");
cont = document.querySelector(".container");
//cont = cont.childNodes; 
//Above line makes code lengthy, to get childNodes. So u can directly put into console.log
console.log(cont.childNodes);  //it return all comments, text etc....
console.log(cont.children); //it return only main elements like div, tags, etc...*/

/*
let cont = document.querySelector(".container");
let nodeName = cont.childNodes[0].nodeName;
let nodeType = cont.childNodes[0].nodeType;
console.log(nodeName);
console.log(nodeType);

/* 
NodeTypes numbers:
1 for element
2 for Attribute
3 for Text Node
8 for comment
9 for document
10 for docType

*/


let container = document.querySelector(".container");

//console.log(container.children); //container ke sb childrens
//console.log(container.children[1]); //container ka 1st children
//console.log(container.children[1].children);
//container k children mese 1st element or uss element ke children
//console.log(container.children[1].children[0].children);
//container k children mese 1st element or uss 1st element ke children ka children

//Tip: Element likhenge whw element milega, element nahi likhoge to simply comments, spaces, text milega.
console.log(container.firstChild); //can get text, comment jo bhi pehle aarie
console.log(container.firstElementChild); //can get element jo bhi pehla aatae
console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.childElementCount);//count of child elements
console.log(container.firstElementChild.parentNode); 
          //firstElementChild ka parent milega or uss parentNode ki diff types mila skteye output me.
console.log(container.firstElementChild.nextSibling); //firstElementChild ka next sibling(bhai) milega
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling); //uski next sibling