// DOM isEqualNode() Method:
// same Node Type :dono list hey to dono list hone chie, agr dono <p> hety to dono <p> hi hone chie.
// same NodeName :same li tag hi hona chie dono trf. cant compare <p> with <li>,it gives false result.
// same NodeValue:dono side ki <li> me jo text node aarie wo b same honi chie, tohi true result aega.
// same childNodes: like dono side ke <li> same he tag chie jaise ke dono trff <p> tag
// same attributes:dono trf same hi attribute like dono trf class hi lgna chie
// same attribute values: dono trf ke class ki value bhi same honi chie.



// var target1 = document.getElementById("list-1").firstElementChild; //1st list ko target kia 
//                             //or uske andr 1st child ko compare krnae.
// var target2 = document.getElementById("list-2").firstElementChild; //2nd list ko target kia 
//                             //or uske andr 1st child ko compare krnae.

// var equal = target1.isEqualNode(target2); //comparing

// console.log(equal);




var target1 = document.getElementById("list-1").firstElementChild; //1st list ko target kia 
                            //or uske andr 1st child ko compare krnae.
var target2 = document.getElementById("list-2").children[1]; //2nd list ko target kia 
                            //or uske andr 2nd child ko compare krnae.
                            //got true qki same attribue, same attribute value, same nodeValue.

var equal = target1.isEqualNode(target2); //comparing

console.log(equal);