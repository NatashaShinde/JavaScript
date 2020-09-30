var data = document.getElementById('data');
var userList = document.getElementById('userList');

//Add user code:
  var counter  = 0; //for id 

addUser = () => {
  let inputdata = data.value;
  console.log(inputdata);
  data.value = ''; //it clears inbox when new data row is added.

var html = `<div class="row" id="data ${counter}" style="margin-bottom:15px;">`+ 
    '<div class="col-md-6 col-sm-12 col-xs-12">'+ 
      '<input type="text" class="form-control" value="'+inputdata+'" disabled>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+ 
      '<button type="button" class="btn btn-success" id="edit'+counter+'" onclick = "edit(this.id);">Edit</button>'+
    '</div>'+
//edit button pr Click krne pr this.id se ek id pass hogi.
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<button type="button" class="btn btn-success" id="update'+counter+'" onclick = "update(this.id);">Update</button>'+
    '</div>'+
//update button pr Click krne pr this.id se ek id pass hogi.
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<button type="button" class="btn btn-danger" id="delete'+counter+'" onclick= "remove(this.id);">Delete</button>'+
    '</div>'+
//delete button pr Click krne pr this.id se ek id pass hogi. 
  '</div>';

  userList.insertAdjacentHTML('beforeend',html);
   counter++;
}


//Edit user code:
edit = (editId) => {
  //console.log(editId);
  var parent = document.getElementById(editId).parentNode.parentNode;//access input field
  var child = parent.firstChild.firstChild;
  child.removeAttribute('disabled');
  console.log(child);
} 

//Update user code:
update = (updateId) => {
  //console.log(updateId);
  var parent = document.getElementById(updateId).parentNode.parentNode;
  var child = parent.firstChild.firstChild;
  child.setAttribute("disabled",'disabled');
  console.log(parent);
}

//Delete user code:
remove = (deleteId) => {
  //console.log(deleteId);
  var parent = document.getElementById(deleteId).parentNode.parentNode;//access input field
  parent.remove();
}