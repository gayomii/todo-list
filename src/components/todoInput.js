export default function TodoInput(input, button, addTodo) {
  this.inputElement = input
  this.buttonElement = button

  this.buttonElement.addEventListener('click', (e) => {
    e.preventDefault()
    const newData = this.inputElement.value
    if (newData) {
      addTodo(newData)
    }

    this.inputElement.value = ''
  })
}
