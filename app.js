const toDoInput = document.querySelector('.inputt');
const list = document.querySelector('.list-item');
const form = document.querySelector('form')





loadEvents();



function loadEvents() {
  form.addEventListener('submit', getTextInput);
  list.addEventListener('click', delTask);
}

function getTextInput(e) {
 if(toDoInput.value === '') {
   alert('Please Enter Something To Do')
 }
 addToDo(toDoInput.value)


  e.preventDefault();
}

// Add todos to list
function addToDo() {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(toDoInput.value));
  list.appendChild(li);

  let del = document.createElement('a');
  del.className = 'del';
  del.setAttribute('href', '#')
  del.innerHTML = 'X';

  li.appendChild(del)

 

  toDoInput.value = '';


}

// Make delTask function
function delTask(e) {
  if(e.target.classList.contains('del')) {
    confirm('Are You Sure')
    e.target.parentElement.remove()
  }
  

}



