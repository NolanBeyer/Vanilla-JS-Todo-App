const todoInputEl = document.querySelector('.todo__input')
const todoListEl = document.querySelector('.todo__list')
const todoItemsEl = document.querySelectorAll('.todo__item')

function rename() {
  todoInputEl.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      let newListItem = createListItem(todoInputEl.value)
      //   todoListEl.appendChild(newListItem
      todoListEl.insertBefore(newListItem, todoListEl.childNodes[0])
      todoListEl.value = ''
    }
  })
}

//? Doesn't work because of event bubbling.
// function toggleTodo() {
//   for (let elem of todoItemsEl) {
//     elem.addEventListener('click', function () {
//       elem.classList.toggle('done')
//     })
//   }
// }

function toggleTodo() {
  todoListEl.addEventListener('click', function (event) {
    event.target.classList.contains('todo__item')
    event.target.classList.toggle('done')
    event.stopPropagation()
  })
}

function createListItem(text) {
  const newListItem = document.createElement('li')
  newListItem.textContent = text
  newListItem.classList.add('todo__item')
  return newListItem
}
rename()
toggleTodo()
createListItem()
