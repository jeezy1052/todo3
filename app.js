const toDoInput = document.querySelector('.inputt');
const list = document.querySelector('.list-item');
const form = document.querySelector('form')


loadEvents();

function loadEvents() {
  form.addEventListener('submit', getTextInput);
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



  toDoInput.value = '';


}
