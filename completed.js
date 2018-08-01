// Now let's get the application to do what it needs to do
// Write a function that updates the counter based on which tasks are completed
function updateCounter() {
  var allTasks = document.getElementsByClassName('task');
  var completedTasks = document.getElementsByClassName('is-complete');
  var counter = document.getElementById('counter');
  counter.innerHTML = allTasks.length - completedTasks.length;
}


// Run the function you just wrote to update the counter

updateCounter();


// 
document.getElementById('add-task').addEventListener('click', function() {
  var newTaskItemText = document.getElementById('new-task').value;
  var newTaskItemLi = document.createElement('li');
  newTaskItemLi.classList.add('task');
  newTaskItemLi.innerHTML = "<a>" + newTaskItemText + "</a>";
  
  document.getElementById('tasks-list').appendChild(newTaskItemLi);
  
  document.getElementById('new-task').value = "";
});

document.getElementById('tasks-list').addEventListener('click', function(event) {
  if (event.target.classList.contains('task')) {
    event.target.classList.toggle('is-complete');
  }
});
