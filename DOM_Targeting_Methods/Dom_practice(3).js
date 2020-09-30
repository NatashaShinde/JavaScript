// How To select element is explained in this Tutorial:
/*
element selectors:
1. single element selector
2. multi element selector
*/


/*
//1. single element selector

let element = document.getElementById("myfirst");
//element = element.className; //it will display classNames of above ID.
//element = element.childNodes; //it will display child of id (here is only textnode'(child1)' present in this eg)
//element = element.parentNode; //shows parent of id which is "container" in this eg
  element.style.color = 'red';    //javascript se css change kr skteyy
  element.innerText = "innerTextChanged";
  element.innerHTML = "<b>innerHTMLchanged</b>"
//console.log(element);
  console.log(element.innerHTML); //To grab innerHTML from doc



let sel = document.querySelector("#myfirst");
sel = document.querySelector(".child"); //child naam k class ka jo 1st element hey DOM k andr wo display hoga.
sel = document.querySelector("h1"); //tagName (givs only 1st h1 tag)
sel = document.querySelector("div"); //tagName, (givs only 1st div)
sel.style.color = 'green'; //it makes only 1st div in green color
console.log(sel);
*/





//2. multi element selector
//let elems = document.getElementsByClassName('child');

/*//we are going inside elements (in deeper)
elems = document.getElementsByClassName('container');
console.log(elems[0].getElementsByClassName('child')); //container ke andr jo bhi class="child" hey wo sari aa jae
*/

//now doing itteration & add color to all HTML which is in div
let elems = document.getElementsByTagName('div'); //it gives all div in Doc.
console.log(elems);

Array.from(elems).forEach(function(element) {  //using Array.from we can create new array
	console.log(element); //we got all div in listing form, now add css to it
	element.style.color = 'brown';
})