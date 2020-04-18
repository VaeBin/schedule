<template>
  <div class="todo-header">
    <input type="text" placeholder="input today's tasks"
           v-model="title"
           @change="addTodo(title)"
    />

  </div>
</template>

<script>
    export default {
      name: "Schhead",
      data() {
        return {
          title: ""
        }
      },
      methods: {
        addTodo(title) {
          var todo = {title:title,finished: false};
          this.$emit("addTodo",todo);
          this.title = '';
        }
      }
    }
</script>

<style scoped>

  .todo-header {
    margin: 0 auto;
    position: relative;
  }
  .todo-header input {
    height: 30px;
    width: 100%;
    font-size: 15px;
    border: 1px solid darkseagreen ;
    border-radius: 10px;
    padding: 1px;
    outline: none;
  }
  .todo-header input:focus {
    outline: none;
    border-color: cadetblue;
  }
</style>
