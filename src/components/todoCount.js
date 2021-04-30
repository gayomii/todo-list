export default function TodoCount(lists, countElement) {
  this.countElement = countElement
  this.lists = lists || []

  this.init()
}

TodoCount.prototype.init = function () {
  this.render()
}

TodoCount.prototype.render = function () {
  const totalLength = this.lists.length
  const completedLength = this.lists.filter((list) => list.isCompleted).length

  this.countElement.innerHTML = `<span>todo: ${totalLength} completed!!: ${completedLength}</span>`
}

TodoCount.prototype.setState = function (newData) {
  this.lists = newData
  this.render()
}
