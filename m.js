let list=document.getElementById('new-task');
let incompleteTaskHolder=document.getElementById("incomplete-tasks");
let completedTasksHolder=document.getElementById("completed-tasks");

function createtask(string)
{
    let listItem=document.createElement("li");
    let checkBox=document.createElement("input[type=checkbox]");
	let label=document.createElement("label");
	let editInput=document.createElement("input[type=text]");
	// //button.edit
	// var editButton=document.createElement("button");//edit button

	// //button.delete
	// var deleteButton=document.createElement("button");
    label.innerText=string;
   // checkBox.type="checkbox";
	//editInput.type="text";
    editButton.innerText="Edit";
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";
    listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}
function addtask()
{
     listItem=createNewTaskElement(list.value);
     incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	list.value="";
}
function edittask()
{
    listItem=this.parentNode;
    editInput=listItem.querySelector('input[type=text]');
     label=listItem.querySelector("label");
  containsClass=listItem.classList.contains("editMode");
  if(containsClass){

        label.innerText=editInput.value;
    }else{
        editInput.value=label.innerText;
    }

    //toggle .editmode on the parent.
    listItem.classList.toggle("editMode");
}
function deletetask()
{

		 listItem=this.parentNode;
		let ul=listItem.parentNode;
		//Remove the parent list item from the ul.
		ul.removeChild(listItem);

}
var taskCompleted=function()
{
  

 listItem=this.parentNode;
completedTasksHolder.appendChild(listItem);
            bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){
   
     listItem=this.parentNode;
incompleteTaskHolder.appendChild(listItem);
        bindTaskEvents(listItem,taskCompleted);
}


addButton.onclick=addtask;
addButton.addEventListener("click",addtask);

var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
//select ListItems children
	 checkBox=taskListItem.querySelector("input[type=checkbox]");
	 editButton=taskListItem.querySelector("button.edit");
	 deleteButton=taskListItem.querySelector("button.delete");


			//Bind editTask to edit button.
			editButton.onclick=edittask;
			//Bind deleteTask to delete button.
			deleteButton.onclick=deletetask;
			//Bind taskCompleted to checkBoxEventHandler.
			checkBox.onchange=checkBoxEventHandler;
}


for (var i=0; i<incompleteTaskHolder.children.length;i++){

  //  bind events to list items chldren(tasksCompleted)
   bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}




//cycle over completedTasksHolder ul list items
for (var i=0; i<completedTasksHolder.children.length;i++){
//bind events to list items chldren(tasksIncompleted)
    bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}

