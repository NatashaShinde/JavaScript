//Method - 2 (MOST usable method)

//DOM addEventListener() Method : 

//document.getElementById(id).addEventListener("click",functionName); //SYNTAX 1
//document.getElementById(id).addEventListener("click",function(){...statement....});  //SYNTAX 2

var element;

document.getElementById("header").addEventListener("click",abc);//here onclick means click
                                                                //(SYNTAX 1 used here)
                                                                //in these examples we are using 
                                                                //one event at a time

document.getElementById("header").addEventListener("mouseenter",function(){                                                         

//document.getElementById("header").addEventListener("click",function(){ //yeh line ko use krke 
                                                      //hum ek hi click pr dono functions call kr skteye.
                           //mtlb boder or background dono ek hi click pr change honge.
                          //This is EXTERNAL function.
	
	//document.getElementById("header").style.border = "10px solid red";  //yaha mouseEnter pr border red hoga.
	                                                                    //(SYNTAX 2 used here) 
	                               // yaha multiple events at a time use horeye (onClick or mouseEnter events)

	    this.style.border = "10px solid red";
    });


function abc()
{
	document.getElementById("header").style.backgroundColor = "green"; //This is EXTERNAL function.
	                                                    //explanation same as method-1.
	                                                   //yaha header pr onclick kro to background green hoga 
	                                                  //qki yeh abc function upper onclick pr call horae.
}


//this -> it means jis event me jiske event ki click pr mtlb jis ki click pr ye function call 
//huae usi ki baat horie mtlb upper jo hmara header hey , usi ki style ko change krnae.