// Creating, Removing & Replacing Elements in this Tutorial:
/*
//creating Element:
let elem = document.createElement("li");

//Now add a className to created <li> element:
elem.className = "childul";
elem.id = "createdLi";
elem.setAttribute("title", "myTitle");
elem.innerText = "Hello this is created by Harry";
elem.innerHTML = "<b>Hello this is created by Harry</b>";
console.log(elem);

//ab created elements ko document me add krnae:
//uske lie use appendChild(), setAttribute() methods.
//ab jo HTML file me <ul class="this"> esme hme naye created elements ko add krnae.
//To uske lie pehle HTML file se <ul class="this"> esse grab krna pdega yaha

let ul = document.querySelector("ul.this"); //className can be multiple so select particular 
                                         //(yaha <ul> ki this class ko target kia.)
    ul.appendChild(elem);   //uppr jo element create kia (elem) tha usko add kia (ul) me.                               
console.log(ul);
*/


//instead of writing innerText or innerHTML we can use following method:
let elem = document.createElement("li");
let text = document.createTextNode("I am a text Node");
elem.appendChild(text);

elem.className = "childul";
elem.id = "createdLi";
elem.setAttribute("title", "myTitle");

console.log(elem);

let ul = document.querySelector("ul.this");
ul.appendChild(elem);
console.log(ul);



//Replacing element:
//so consider jo upper elem.id = "createdLi"; ye jo element kiae usko replace krnae. 
let elem2 = document.createElement("h3");

elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode("This replacing node of elem2");
elem2.appendChild(tnode);

elem.replaceWith(elem2); //elem ko repace kia elem2 se.
                 //("I am a text node") REPLACEwith ("This replacing node of elem2").



//Now replacing child:
let myul = document.getElementById("myul");
myul.replaceChild(elem, document.getElementById("fui"));
// #createdLi replace by #fui.
//.childul class ko .fui class se replace kia.
//replaceChild me (old, new);
//or jo new replace krre ho wo myul ka child hona chie to hi replaceChild() method kaam krega.


//Remove Child:
myul.removeChild(document.getElementById("lui")); //myul id se lui id remove hoga.(of my dreams remove hoga.)

let pr = elem2.getAttribute("id"); //elem2 ki id di esne.
pr = elem2.getAttribute("class"); //elem2 ki class milegi

pr = elem2.hasAttribute("class"); //agr esme class naam ka attribute hey to TRUE return krega.
pr = elem2.hasAttribute("href"); //agr esme href naam ka attribute nahi hey to False return krega.

elem2.removeAttribute("id"); //to elem2 se id remove hogi.

elem2.setAttribute("title", "myelem2Title"); //add kia elem2 me.
console.log(elem2, pr);


/*
Quick quiz:
create a heading element with text as "Go to codeWithHarry" & create an a tag outside it
with href = "https://www.codewithharry.com"
*/
//solution in Dom_practice(2).js file

