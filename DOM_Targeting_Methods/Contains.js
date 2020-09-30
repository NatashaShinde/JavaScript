//DOM Contains() Method:
// true : if that div or element exist in html code.
// false: if that div or element doesn't exist in html code.
//suppose outer div me koi bhi inner div dhundnae chahe wo inner div uss outer div ka 
//child ho, grandChild ho ya GreatGrandChild bhi ho sktae.
//to agr contains ko outer div me wo childs milteye to wo true return krega.

var ParentElement = document.getElementById("test");//target parentElement jispe test naam ka id lgayae

var target = document.getElementById("abc"); //abi uss parent ke child ko 
//target krnae using getElementById
//result false bcoz abc class doesn,t exist in HTML code.

//now to find ke yeh target id uske andr hey ki nahi uske lie contains() method use krenge
var find = ParentElement.contains(target); //jo element find krnae wo target mese hi hoga 
                                         //eslie target likhae
                                         //agr abc uske andr hey to result true milega.

console.log(find);