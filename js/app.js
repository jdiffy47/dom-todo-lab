
const inp = document.getElementById('inp')
const addBtn = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')


addBtn.addEventListener('click', function() {
  let newItem = todoList.createElement('li').textContent = inp.value
  inp.value = ''
  
})