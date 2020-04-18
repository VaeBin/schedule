<template>

  <div class="todo-footer">
    <li>
      <label>
        <input type="checkbox" v-model="allSelect"/>
        <span>already{{finishedCount}}/total{{todos.length}}</span>
      </label>
      <button class="delete-all-btn"
              @click="deleteAll"
      >delete all finished</button>
    </li>

  </div>
</template>

<script>
    export default {
      name: "Schfooter",
      props: {
        todos: Array
      },
      methods: {
        deleteAll() {
          this.$EventBus.$emit('deleteAll');
        }
      },
      computed: {
        finishedCount() {
          return this.todos.reduce((total,todo)=> total+(todo.finished?1:0),0);
        },
        allSelect: {
          get() {
            return (this.finishedCount===this.todos.length && this.todos.length!=0);
          },
          set(isCheck) {
            this.$EventBus.$emit('selectAll',isCheck);
          }
        }

      }

    }
</script>

<style scoped>
  li {
    width: 80%;
    height: 28px;
    border-color: darkgray;
    border-style: dashed;
    border-width: 2px;
    border-radius: 10px;
    list-style: none;
    margin:2px auto;
  }
  .delete-all-btn {
    height: 25px;
    width: 100px;
    padding: 4px;
    float: right;
    margin-top: 2px;
    background-color: gainsboro;
    vertical-align: center;
    border-radius: 40%;
    font-size: 4px;
  }
  .delete-all-btn:hover {
    background-color: darkseagreen;
  }
  .todo-footer {
    width: 500px;
    height: 100%;
    border-color: darkgray;
    border-style: dotted;
    background-color: white;
    padding: 10px;
    margin-top: 0;
    border-radius: 25px;
    margin: 0 auto;
  }
</style>
