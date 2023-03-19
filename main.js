var taskInput=document.getElementById("new-task");//Add a new task.

var incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks

function createtask(taskString)
{
   
    let checkBox=document.createElement("input");//checkbx
	let label=document.createElement("label");//label
	let editInput=document.createElement("input");//text
	let editButton=document.createElement("button");//edit button
	let deleteButton=document.createElement("button");//delete button

	label.innerText=taskString;
    checkBox.type="checkbox";
	editInput.type="text";

	// editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
	// editButton.className="edit";
	// deleteButton.innerText="Delete";
	// deleteButton.className="delete";



	//and appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	// listItem.appendChild(editInput);
	// listItem.appendChild(editButton);
	// listItem.appendChild(deleteButton);
	return listItem;
}
function addtask()
{
    var listItem=createNewTaskElement(taskInput.value);

    incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value="";

}
function edittask()
{
    let listItem=this.parentNode;
    let editInput=listItem.querySelector('input[type=text]');
let label=listItem.querySelector("label");
let containsClass=listItem.classList.contains("editMode");
if(containsClass){

    //switch to .editmode
    //label becomes the inputs value.
        label.innerText=editInput.value;
    }else{
        editInput.value=label.innerText;
    }
}
function deletetask()
{
    var listItem=this.parentNode;
		var ul=listItem.parentNode;
		//Remove the parent list item from the ul.
		ul.removeChild(listItem);
}