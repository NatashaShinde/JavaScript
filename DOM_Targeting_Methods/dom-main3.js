//DOM removeEventListener() Method :

//element.removeEventListener("ondblclick",functionName);

var element;

document.getElementById("header").addEventListener("mouseleave",abc);

document.getElementById("header").addEventListener("click",xyz);

function abc(){
	document.getElementById("header").style.background = "green";
}

function xyz(){
	document.getElementById("header").removeEventListener("mouseleave",abc);
}


//abc me event call hoker background green horae.
//pr xyz me hmne event ko remove kia.
// eslie abi wo kaam nahi krega qki wo event remove hogya.