// First let's practice using events. 
// TIP - Comment out the previous exercise when starting the next one
//console.log("hi");

// 1. Get the browser to write to the console when someone clicks anywhere in the document
/*document.addEventListener('click',function(){
console.log("Clicked the document!");
});*/


// 2. Change the text of the h1 that displays the page title when someone clicks anywhere in the page

/*document.addEventListener('click',function(){
document.getElementsByTagName('h1')[0].innerText="Clicked";
});*/


// 3. Display an alert when someone clicks any of the tasks
/*var taskItems=document.getElementsByClassName('task');

for(var i=0;i<taskItems.length;i++){
 
taskItems[i].addEventListener('click',function(){
console.log(this.innerText);
});
}*/



// 4 => (Refactor code above)
// 4a. Write a function that displays an alert
// 4b. Run the function only when any task is clicked
/*function logText(){
  console.log(this.innerText);
}

var taskItems=document.getElementsByClassName('task');

for(var i=0;i<taskItems.length;i++){
 
taskItems[i].addEventListener('click',logText);
}*/


// Now let's get the application to do what it needs to do
// Write a function that updates the counter based on which tasks are completed



/*
-get all tasks from our page to figure out the no of tasks in our list
-determine how amny tasks are completed(figure out which elemets has the class of is complete)
-calculate the difference between all tasks and completed tasks to get the no of items left
-update the strong element with id of counter with the new no
*/

function updateCounter (){
  var alltaskItems=document.getElementsByClassName('task').length;
var completedTaskItems = document.getElementsByClassName('is-complete').length;

var itemsLeftOver=alltaskItems-completedTaskItems;
document.getElementById('counter').innerText=itemsLeftOver;

}

updateCounter();

// Run the function you just wrote to update the counter




// Add an event listener to each of the tasks which will toggle the 'is-complete' css class when clicked


/*
-grab all the elements with the class of task
-loop through all task items and add event listener
-inside the click the function checks if the task is completed (has is-complete class we remove it)
-else if task is not complete add a class of is-complete
-update the counter to reflect the new count
*/

var allTasks=document.getElementsByClassName('task');
for(var i=0;i<allTasks.length;i++)
{ allTasks[i].addEventListener('click',function(){
if(this.classList.contains('is-complete')){
  this.classList.remove('is-complete');
  }
  else{
    this.classList.add('is-complete');
  }
  updateCounter();
});
  

}


/*
-on click of the button
 -get the text from input
 -create a new <li> element
 -
 */
document.getElementById('submit').addEventListener('click',function(){
  var inputText=document.getElementById('item-field').value;
var itemNode=document.getElementsByClassName('task')[0];
var newTaskItem=itemNode.cloneNode(true);

newTaskItem.innerHTML="<a>" +inputText+ "</a>";
newTaskItem.addEventListener('click',function(){
  if(this.classList.contains('is-complete')){
  this.classList.remove('is-complete');
  }
  else{
    this.classList.add('is-complete');
  }
updateCounter();
});
document.getElementById('tasks-list').appendChild(newTaskItem);

updateCounter();
document.getElementById('item-field').value="";

});
