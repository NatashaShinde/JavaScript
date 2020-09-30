// JavaScript Animation:
// 1.setInterval()
// 2.clearInterval()


// 1.setInterval(functionName,millisecond) //1000ms = 1 second

var a = 0;
var abc = setInterval(Anim, 100);  //setInterval abc var me hey

function Anim()
{  
	a = a +10;

	if (a == 200) //jb margin 200 aaega tb yeh red box move krna rokega.
	{
       clearInterval(abc); //setInterval ko hi clear krnae eslie voi abc variable ko yaha lia.
	}
	else
	{
	var target = document.getElementById("test"); //test id ko target kia
	
	//target.style.marginLeft = a + 'px';
	target.style.width = a + 'px'; //jb width 200 hogi tb animation rukega.
	}
}