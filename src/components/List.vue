<template>
      <ul class="todo-list">
        <Item v-for="(todo,index) in todos"
          :todo="todo" :index="index"
        ></Item>

      </ul>
</template>

<script>
  import Item from "./Item";
    export default {
      name: "List",
      props: {
        todos: Array
      },
      components: {
        Item
      },
    }
</script>

<style scoped>

  .todo-list {
    width: 500px;
    height: 100%;
    border-radius: 3px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    border-color: darkgray;
    border-style: dotted;
    background-color: white;
    padding: 10px 10px 0;
    margin-bottom: 0;
    margin: 0 auto;
  }

</style>
