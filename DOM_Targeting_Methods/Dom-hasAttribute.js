//1.Dom-hasAttribute
//2.Dom-hasChildNodes



//1.Dom-hasAttribute:id=test ke sath koi or class ya id jaisa attribute lgae ki nai, 
                           //check krne ke lie hasAttribute use hotae.
var target = document.getElementById("test"); //to check ess id pe class naam ka attribute lgrae ki nai
                                     //yaha pr id ko target kia 

var find = target.hasAttribute("class") //to check target ke andr jo attribute 
          //dekhna chah rahe ho wo hey ki nai,to yaha class atrribute hey kya wo check krnae

console.log(find); //to yaha test id ke sath abc class lgae eslie ans true aarae.





//2.Dom-hasChildNodes: agr hmare pass ek div hey or hum check krna chahte hey ke eska koi 
           //child node hey ki nai,agr hey to true nai a to false.
           //agr uss div ke andr nrml text bhi hoga to woh true return krega.

var target1 = document.getElementById("test");

var find1 = target1.hasChildNodes(); //no need to give any value

console.log(find1); //ans true bcoz test id ke andr koi na koi element hey hi.
//agr kuch bhi nahi hey test id me or sirf ek enter marae to, yeh space ko b count krega or true ans 
//dega.   