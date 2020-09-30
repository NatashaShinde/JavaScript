//.............. DOM Targeting Methods...............//

const element;

// element = document;  // Esne document ko target kia or puri html hme de di.
// element = document.all; // It returns all the tags by making it array type. 
// element = document.all[9];  //(it display konse number pr konsi chiz hey) 
// element = document.head;  // Esne pure head ko target kr lia.
// element = document.title;  // It return title text.
// element = document.body;  // esne pure body ko display kia.
// element = document.links;  // eslo total 8 anchor tag mile hmare document me.
// element = document.links[0];  // esne 0 index pr jo anchor tag hey usko display kia.
// element = document.images;
// element = document.forms;   // to target forms
// element = document.doctype;  // Yeh hme html ka doctype return krega
// element = document.URL;  // yeh website ka url return krega
// element = document.domain;  // return domain name
// element = document.baseURI;  // It return uri name


// element = document.getElementById("header"); // target by ID (e.g here header is ID in html document), 
                                               //id is unique so use element in getElementById

// element = document.getElementsByClassName("list"); //classes are multiple.
                                                     // so use Elements in getElementsBYClassName.

// element = document.getElementsByClassName("list")[1]; //to target particular class,
                                                        // write its index number.

// element = document.getElementsByTagName("ul"); //ul tag targeted here.



//............ Javascript DOM get Methods: ...........//
// innerText
// innerHTML
// getAttribute
// getAttributeNode (same as getAttribute)
// Attributes

// element = document.getElementById("header").innerText; // To get all inner text in header ID without HTML.
// element = document.getElementById("content").innerText;

 element = document.getElementById("content").innerHTML; // To get all inner text in content ID with HTML.

// element = document.getElementById("header").getAttribute("onClick"); // It returns header ke andr jo bhi
                                          // attribute aarae jaise ki class, Id, style, onclick ke value dega.

// element = document.getElementById("header").getAttributeNode("onClick"); // same as above ,only diff is, 
                                                                 //it return value as well as its property.

// element = document.getElementById("header").getAttributeNode("onClick").value; //same as (getAttribute) above 
                                                                                 //so no need to use it.

// element = document.getElementById("header").attributes; // array bnake,
                                      // sare ke sare attribute return krega jo header ID me present hey.
// element = document.getElementById("header").attributes[1];
// element = document.getElementById("header").attributes[1].value; // It return attribute's value
// element = document.getElementById("header").attributes[1].name; // It return attribute's name



//............ Javascript DOM set Methods: ...........//
// innerText
// innerHTML
// setAttribute (prefarable than Attribute method)
// Attribute
// removeAttribute

// document.getElementById("header").innerText = "Wow !" // To set Text

 
// document.getElementById("header").innerHTML = "<h1> Wowhhhhh! </h1>"; // header ko target krke h1 ki value set ki.

// document.getElementById("header").setAttribute("class","xyz"); // attribute change to xyz
// document.getElementById("header").setAttribute("style","border : 10px dotted yellow;"); // attribute value 
                                                                                           //changed

// document.getElementById("header").attribute[1].value = "xyz";  // new attribute set value is xyz
                                                                                         
// element = document.getElementById("header").getAttribute("class");

// document.getElementById("header").removeAttribute("style"); //to remove attribute like class, Id, style, etc

 




//..............NEW DOM Targeting Methods...............//

//querySelector --> document.querySelector(CSS Selector) 
  // esko jbbi hum target krenge kisi bhi html element ka to agr usko woh 3 miltey, 10 milteye,
  // to wo sbse pele wale ko hi target krega.
  //here you have to mention id by (#) and class by (.)

//querySelectorAll --> document.querySelectorAll(CSS Selector)
  // mgr esme jo b hum css me selector denge uske according 
  //usko jo bhi target me jitne bhi html ke elements miltye wo sb ko target kr dega.
  //here you have to mention id by (#) and class by (.)

//document.querySelector("#header").innerHTML = "<h1> Wowhhhhh! </h1>";
//element = document.querySelector("#header").getAttribute("class");

//element = document.querySelector(".list");  // actually there are 2 list classes but it shows only 1st
//element = document.getElementsByClassName("list"); // but here it shows both list classes
//element = document.querySelectorAll(".list"); // but here it shows both list classes
//element = document.querySelectorAll(".list")[1]; //to select perticular thing
//element = document.querySelectorAll(".list")[1].innerHTML; //uske he andr ki html chie to.
//element = document.querySelectorAll("ul"); //get all ul
//element = document.querySelectorAll(".list")[1].innerHTML;
//element = document.querySelectorAll("#header h1"); //advance selector i.e no need to write 
                                                   //getElementById
//element = document.querySelectorAll("#header h1")[1].innerText;

console.log(element);






