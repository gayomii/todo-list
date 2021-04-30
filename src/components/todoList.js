export default function TodoList(lists, element, todoCount) {
  // check validation
  if (!Array.isArray(lists)) {
    throw new Error('Type error.')
  }
  lists.forEach((list) => {
    if (!list.hasOwnProperty('text') || !list.hasOwnProperty('isCompleted')) {
      throw new Error('The data is not valid')
    }
  })

  this.lists = lists
  this.element = element
  this.count = todoCount

  this.render()
}

TodoList.prototype.render = function () {
  this.element.innerHTML = this.lists
    .map((list, idx) => {
      return `<li data-list-idx=${idx}>${list.isCompleted ? `<s>${list.text}</s>` : `${list.text}`}</li><button data-btn-idx=${idx} class="delete-button">X</button>`
    })
    .join('\n')
}

TodoList.prototype.setState = function (nextData) {
  this.lists = nextData
  const saveData = JSON.stringify(this.lists)
  localStorage.setItem('todoData', saveData)
  this.count.setState(this.lists)
  this.render()
}
