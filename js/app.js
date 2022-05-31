
const inp = document.getElementById('inp')
const addBtn = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')


addBtn.addEventListener('click', applyText)

function applyText() {
  let newLi = document.createElement('li')
  newLi.textContent = inp.value
  inp.value = ''
  todoList.appendChild(newLi)
}




