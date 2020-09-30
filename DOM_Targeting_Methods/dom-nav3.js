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

// 9.nextElementSibling :yeh jo bhi next tag aara hotae ussi ko target krtae.
//10.nextSibling        :yeh koi bhi next (space,Enter,Comment) aari hogi ussi ko bhi count kr lega.
//11.previousElementSibling :yeh jo bhi previous tag aara hotae ussi ko target krtae.
//12.previousSibling    :yeh koi bhi previous (space,Enter,Comment) aari hogi ussi ko bhi count kr lega.




//9.To target nextElementSibling:
// now you want to check NEXT element sibling of child-c.
// var a = document.getElementById("child-c").nextElementSibling; //it display D tag,which is next siblingelement
 // console.log(a);

//now you want add style to previous sibling of child-c with innerHTML.
// document.getElementById("child-c").previousElementSibling.style.background = "blue"; //esne child-c ke previous
//         //wale element ka color change kia.
// var a = document.getElementById("child-c").previousElementSibling.innerHTML; 
//                          //esne child-c ke previouswale element ka inner text ya html hey wo hey inner.
// console.log(a);




//10.To target nextSibling:
// now you want to check NEXT sibling of child-c.
 var a = document.getElementById("child-c").previousSibling; //it display text tag (means enter),
                                                  //which is previoussiblingelement
//esme styling bhi use nhi hoga qki enter ya space ko koi styling nhi de skte.
//pr vaha comment space enter nhi hoga to usme style de skteye.
  console.log(a);




