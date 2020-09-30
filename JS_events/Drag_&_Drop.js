const imgBox = document.querySelector('.imgBox'); //i got imgBox
const whiteBoxes = document.getElementsByClassName('whiteBox'); //i got all whiteBoxes

//Now Adding Events
//Event listeners for draggable element imgBox (mtlb 1 aisa element jisko uthakr aap kahi ptkoge.)
//or woh element hey imgBox, usko hum uthakr ptkreye.
//eslie hum niche imgBox pr EventListeners lga rahe hey.

imgBox.addEventListener('dragstart',(e)=>{
   console.log('drag start has been triggerd');
                         //jaise maine img ko uthaya,'drag start has been triggerd'
         e.target.className +=' hold'; //1 element ko multiple class dene ke lie space use krtye.' hold'
   //jaise dragStart event fire hoga,jo imgBox uthaya jarae uski className me hold add krde.
         //img thodi time baad purani jagah se gayab ho uske lie timeOut use krenge.

         setTimeout(()=>{
             e.target.className ='hide';
         }, 0); //0 means sbkuch execute hone ke baad yeh chale
   
});

imgBox.addEventListener('dragend',(e)=>{
  console.log('drag end has been triggerd');
                         //jaise maine img ko choda,'drag end has been triggerd'
  e.target.className = 'imgBox'; //esse jb hum box chodenge to border nikl jaega
                         //esse hide vali class hey wo jakr imgBox me aa jaegi.
});

//jitne bhi whiteBoxes hey unn sb pr hum ne 4 EventListeners lga die..
for (whiteBox of whiteBoxes){
	whiteBox.addEventListener('dragover',(e)=>{
		e.preventDefault();  //esse hum element ko dusre box ke uppr drag kr skteye.
        console.log('dragover method has been triggerd');
	});

	whiteBox.addEventListener('dragenter',(e)=>{
        console.log('dragenter method has been triggerd');
        e.target.className += ' dashed'; //jaise hi hmara drag enter hoga usme dashed class add hoga.
	});

	whiteBox.addEventListener('dragleave',(e)=>{
       console.log('dragleave method has been triggerd');
       e.target.className = 'whiteBox' //jaise hi dragleave trigger ho to usko hm krde whitebox
	});

	whiteBox.addEventListener('drop',(e)=>{
      console.log('drop has been triggerd');
      e.target.append(imgBox); //jaise hi me drop methjhod trigger ho tb uske andr imgBox append krdo.
	});
}

