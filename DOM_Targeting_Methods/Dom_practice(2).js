//EXERCISE:1
//string me jo bhi word hey bs ussi link ko show kro.

let str = "javascript";
let links = document.links; //collecting all links present in document
//console.log(links);

let resultLink;
Array.from(links).forEach(function (element) {
	resultLink = element.href; //we got all href list from document
	
	if (resultLink.includes(str)) {
		console.log(resultLink);
	}
});




/*
Quick quiz:
create a heading element with text as "Go to codeWithHarry" & create an a tag outside it
with href = "https://www.codewithharry.com"
*/
/*
let hw = document.createElement("h4");
let newText = document.createTextNode("Go to codeWithHarry");
hw.appendChild(newText);

hw.className = "hwClass";
hw.id = "hwid";
// hw.innerHTML = "<h3>Go to codeWithHarry</h3>";
console.log(hw);

let rpl = document.querySelector("h1.heading");
rpl.appendChild(hw);
console.log(rpl);*/