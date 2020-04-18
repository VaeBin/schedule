<template>
  <div class="todo-content" >
  <Schhead ref="header"></Schhead>
  <List :todos="todos" ref="list"></List>
  <Schfooter :todos="todos" ref="footer"></Schfooter>

  </div>
</template>

<script>
  import Schhead from "./Schhead";
  import Schfooter from "./Schfooter";
  import List from "./List";
  import localStorageUtil from "../utils/localStorageUtil";
    export default {
      name: "Schedule",
      data() {
        return {
          todos: localStorageUtil.readTodos()
        }
      },
      components: {
        Schfooter,
        Schhead,
        List
      },
      mounted() {
        this.$refs.header.$on('addTodo',this.addTodo);
        this.$EventBus.$on('deleteTodo',this.deleteTodo);
        this.$EventBus.$on('deleteAll',this.deleteAll);
        this.$EventBus.$on('selectAll',this.selectAll);
        //this.todos=localStorageUtil.readTodos();
      },
      methods: {
        addTodo(todo) {
          this.todos.unshift(todo);
        },
        deleteTodo(index){
          this.todos.splice(index,1);
        },
        selectAll(isCheck) {
          this.todos.forEach((todo)=>todo.finished = isCheck);
        },
        deleteAll() {
          this.todos = this.todos.filter(todo=>!todo.finished);
        }
      },
      watch: {
        todos: {
          handler: localStorageUtil.saveTodos,
          deep: true,
          immediate: true
        }
      }
    }
</script>

<style scoped>

  .todo-content {
    width: 600px;
    margin: 0 auto;
    padding: 10px;
    top: 20%;
  }

</style>
