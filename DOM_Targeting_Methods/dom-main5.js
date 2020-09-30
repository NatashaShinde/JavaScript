//..............DOM CSS styling Methods...............//
// style
// className
// classList - 1.add(class1,class2,...)
            // 2.remove(class1,class2,...)
            // 3.toggle(class) -> (add-remove-add)
            // 4.contains(class) -> true/false (check class present or not)
            // 5.item(index) -> (given index pr jo b class hey wo display hogi)
            // 6.Length -> (present number of classes ki length dega)

var element;

  //element = document.querySelector("#header").style.border; //means yaha pr hmne header ko targetkr lia,
                                                //ab uske baad konsa style aap get krna chahte ho wo kr sktey.
  //element = document.querySelector("#header").style.color;

  //now set new backgrnd color using DOM css method 
  //element = document.querySelector("#header").style.backgroundColor = "tan";
  //element = document.querySelector("#menu").style.backgroundColor = "purple";




  //document.querySelector("#header").className = "abc xyz"; //creating multiple new classes
  //element = document.querySelector("#header").className; 

  //element = document.querySelector("#header").classList = "abc xyz";
  //element = document.querySelector("#header").classList = "abc xyz";



  //element = document.querySelector("#header").classList.add("xyz","efg"); //to add multiple classes

//document.querySelector("#header").classList.remove("abc"); //to remove class
//console.log(element);


//Add & Remove eg:
// document.getElementById("header").addEventListener("click",abc); 

// function abc(){
     //document.getElementById("header").classList.add("xyz"); //when i click on header i got 2 clasees abc,xyz
//    document.getElementById("header").classList.add("xyz","efg"); //when i click on header 
//                                                         //i got 3 clasees abc,xyz,efg

//     document.getElementById("header").classList.remove("xyz"); //jb me header pr click krungi to xyz class
//                                                    //remove hogi, tbi bhi html me tinho classes dikhegi
//      var a = document.getElementById("header").classList; // to show in console, add these 2 lines.
//      console.log(a);                                    
// }


//Length eg:
// document.getElementById("header").addEventListener("click",abc);

// function abc(){
//   var a = document.getElementById("header").classList.length;
//   console.log(a);
// }


//Toggle eg:
// document.getElementById("header").addEventListener("click",abc);

//    function abc(){
//     document.getElementById("header").classList.toggle("xyz");  //click krne pr ek baar 
//                                   //xyz class remove hogi, fir add hogi (toggle hoti rahegi)
//    var a = document.getElementById("header").classList;
//    console.log(a);
//  }


//item(index) eg:
// document.getElementById("header").addEventListener("click",abc);

//      function abc(){
//     var a = document.getElementById("header").classList.item(1); //1 index pr jo bhi class hey wo
//                                                                     //display hogi
//     console.log(a);
//   }


//contains(class) eg:-> true/false
document.getElementById("header").addEventListener("click",abc);

     function abc(){
    var a = document.getElementById("header").classList.contains("xyz"); //yeh check krega agr header me xyz
              //naam ki koi class hey to TRUE return krega, agr nahi a to FALSE return krega.
    console.log(a);
  }