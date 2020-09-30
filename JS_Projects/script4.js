const messageIn = document.querySelector('#messageIn');
const sendBtn = document.querySelector('#sendBtn');
const messageOut = document.querySelector('#messageOut');

 sendBtn.addEventListener('click',sendMsg);

 function sendMsg()
 {
 	let content = messageIn.value; //get the value from #messageIn
 	//to collect input value we are using var content
 	// messageIn working with input box. & here we got the value in content var.
 	//Now we want to passed the value
 	
 	//console.log(content);

 	if(content === '')
 	{
 		alert('Please enter valid value.')
 	}
 	else
 	{
       messageOut.innerHTML = content; //place the value in #messageOut
 	   messageIn.value = ''; //when i got ouput, then input which is 
 	               //in text area will automatically deleted.
 	}

 }
