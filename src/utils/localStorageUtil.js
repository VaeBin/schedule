const LO_TODO = 'lo_todo';
export default {
  readTodos() {
    return JSON.parse(localStorage.getItem(LO_TODO) || '[]');
  },
  saveTodos(todos) {
    localStorage.setItem(LO_TODO,JSON.stringify(todos));
  }
}
