//DOM Traversal Methods :
// 1.parentNode      :child ko lekr parent ko target krtae.
                      //iska koi parent na ho to kuch na kuch dhudkr parent return krega.

// 2.ParentElement   :child ko lekr parent ko target krtae.
                     //iska koi parent na ho to null return krega         

// 3.Children        :parent ko lekr children ko target krenge 
                     //children sirf html ke tag return (target) krega

// 4.childNodes      :parent ko lekr children ko target krenge 
                     //lekin childnode html ke tag or text bhi(comments,enter,spaces,text node) return krega 

// 5.firstChild         :uske andr jo bhi ho pehla (text node,space,comment,enter)uss ko target krtae.     
// 6.firstElementChild  :uske andr jo sbse pehla tag aara hotae ussi ko target krtae.       
// 7.lastChild          :uske andr jo bhi ho pehla (text node,space,comment,enter)uss ko target krtae.
// 8.lastElementChild   :uske andr jo sbse last tag aara hotae ussi ko target krtae.

// 9.nextElementSibling
//10.nextSinling
//11.previousElementSibling
//12.previousSibling



//5.To target firstElementChild:
//now you want to check 1st child in inner div.
// var a = document.getElementById("inner").firstElementChild; //it display h2 tag,which is 1st child element
// console.log(a);

//now you want to check given number child in inner div with innerHTML.
// var a = document.getElementById("inner").firstElementChild.innerHTML; //it display inner,
//                                        //qki 1st child ka jo inner text ya html hey wo hey inner.
// console.log(a);

// document.getElementById("inner").firstElementChild.style.background = "blue"; //esne inner ke andr
//         //jo 1st child aara tha uska color change kia.
// var a = document.getElementById("inner").firstElementChild.innerHTML; //it display inner,
//                                        //qki 1st child ka jo inner text ya html hey wo hey inner.
// console.log(a);



//7.To target FirstChild:
var a = document.getElementById("inner").firstChild; //it display text node,
                                       //qki inner 1st child text hey 
   //(enter is present in html code so firschild is that enter sign but it is not actually 1st child.)
   //(childNodes shows actual which are the childs in inner div)
   //FirstChild ya LastChild ke sath hum styling nahi kr skte qki kbi usme (text node,space,comment,enter)
   //present rehtae, to usko to style nahi kr skte eslie. 
console.log(a);