//DOM cloneNode Method:
//cloneNode element ko copy krke dusri jagah append krtae.
//STEPS : 1.target kro 2.first list mese element copy kro 
//3.dusri list me paste kro(append kro mtlb combine kro)

//jsiko hme clone krnae usko sbse pehle target krna pdega, 
//chahe woh parent node ko target kr ke kre ya kisi or ko target krke.
//esle target se start hoga.

var target = document.getElementById("list1").children[0];

var copyElement = target.cloneNode(true);
//false me ye sirf uske tag or attributes copy krtae.
//true me ye uske ander ka tag, attributes or text bhi copy krtae.
//abi yeh element copy hogyae, ab usko dusre list me dalnae, uske lie following step

console.log(copyElement);

//yeh document target krega list2 ko
//document.getElementById("list2").appendChild(copyElement); //appendChild ke andr jo abi hmne 
        //clone(copy) kiae element wo dalnae, to wo hey copyElement.
        //(mtlb jo element copy kia tha wo yaha paste krnae)


// copy kie <li> ko hum koi or div me bhi paste kr sktye :
document.getElementById("test").appendChild(copyElement);