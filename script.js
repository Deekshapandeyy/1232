
let taskInput=document.getElementById("new-task");
let addButton=document.getElementsByTagName("button")[0];
let incompleteTaskHolder=document.getElementById("incomplete-tasks");
let completedTasksHolder=document.getElementById("completed-tasks");

// creates a new task in string format
let createNewTaskElement=function(taskString){
	let listItem=document.createElement("li");
	let checkBox=document.createElement("input");
	let label=document.createElement("label");
	let editInput=document.createElement("input");
	let editButton=document.createElement("button");
	let deleteButton=document.createElement("button");
	label.innerText=taskString;
	checkBox.type="checkbox";
	editInput.type="text";
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

// function to add task in todo

let addTask=function(){
	  listItem=createNewTaskElement(taskInput.value);
	  if(taskInput.value.length==0)
	  {
		document.getElementById("error").innerHTML="Can not empty todo";
		
		return;
	  }

	  else
	  {
		document.getElementById("error").innerHTML="";
		incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
	taskInput.value="";
	  }
	
	
}

//function to edit task 

let editTask=function(){
 listItem=this.parentNode;
editInput=listItem.querySelector('input[type=text]');
label=listItem.querySelector("label");
 containsClass=listItem.classList.contains("editMode");
	
		if(containsClass){
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		listItem.classList.toggle("editMode");
}




//Delete task.
let deleteTask=function(){
		 listItem=this.parentNode;
		 ul=listItem.parentNode;
		ul.removeChild(listItem);

}


//Mark task completed
let taskCompleted=function(){
	 listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem, taskIncomplete);

}

// incompleted task
let taskIncomplete=function(){
	 listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskCompleted);
}

//button addition in todo in javascript
addButton.onclick=addTask;

//binding of task with mousechange events
let bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	 checkBox=taskListItem.querySelector("input[type=checkbox]");
	 editButton=taskListItem.querySelector("button.edit");
	 deleteButton=taskListItem.querySelector("button.delete");
		editButton.onclick=editTask;
		deleteButton.onclick=deleteTask;
		checkBox.onchange=checkBoxEventHandler;
}

//traverse in completed list
	for (var i=0; i<incompleteTaskHolder.children.length;i++){
		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}
	//bind lists incomplete task
	for (var i=0; i<completedTasksHolder.children.length;i++){
		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}
