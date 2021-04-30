import TodoList from './components/todoList.js'
import TodoInput from './components/todoInput.js'
import TodoCount from './components/todoCount.js'

let data = JSON.parse(localStorage.getItem('todoData')) || []

const todoListElement = document.querySelector('#todo-list')
const inputElement = document.querySelector('#input-todo')
const buttonElement = document.querySelector('#input-button')
const countElement = document.querySelector('.count-container')
const removeAllButton = document.querySelector('#remove-all')

removeAllButton.addEventListener('click', (e) => {
  data = []
  todoList.setState(data)
})

const todoCount = new TodoCount(data, countElement)
const todoList = new TodoList(data, todoListElement, todoCount)

const addTodo = (newData) => {
  const newTodo = {
    text: newData,
    isCompleted: false,
  }

  data = [...data, newTodo]
  todoList.setState(data)
}

const todoInput = new TodoInput(inputElement, buttonElement, addTodo)

todoListElement.addEventListener('click', (e) => {
  const target = e.target

  if (target.nodeName === 'LI') {
    const index = target.getAttribute('data-list-idx')
    const targetData = data[index]

    if (targetData?.isCompleted) {
      targetData.isCompleted = false
    } else {
      targetData.isCompleted = true
    }
  }

  if (target.nodeName === 'S') {
    const listTarget = target.parentNode
    const index = listTarget.getAttribute('data-list-idx')
    const targetData = data[index]

    if (targetData?.isCompleted) {
      targetData.isCompleted = false
    } else {
      targetData.isCompleted = true
    }
  }

  if (target.nodeName === 'BUTTON') {
    console.log(target)
    const index = target.getAttribute('data-btn-idx')

    data.splice(index, 1)
  }
  todoList.setState(data)
})
