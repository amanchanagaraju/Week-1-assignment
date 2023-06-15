
 class Todo {

  todos = [];
  add(str) {
    this.todos.push(str);
  }
  remove(index) {
    if (index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  }
  update(index, updatedTodo) {
    if (index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    if (indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      return null;
    }
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
