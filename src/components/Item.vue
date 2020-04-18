<template>
      <li
          @mouseenter="btnShow(true)"
          @mouseleave="btnShow(false)"
          :style="{backgroundColor: liBackclr}"
      >
        <label>
          <input type="checkbox" v-model="todo.finished"/>
          <span>{{todo.title}}</span>
        </label>
        <button class="delete-btn"
                v-show="isShowbtn"
                @click="deleteTodo(index)"
        >delete</button>
      </li>
</template>

<script>
    export default {
      name: "Item",
      props: {
        todo: Object,
        index: Number
      },
      data() {
        return {
          isShowbtn: false,
          liBackclr: '#ddd'
        }
      },
      methods: {
        btnShow(isShowbtn){

          this.isShowbtn = isShowbtn;
          this.liBackclr = isShowbtn?'#ddd':'#fff';
        },
        deleteTodo(index){
          this.$EventBus.$emit('deleteTodo',index);
        }
      }
    }
</script>

<style scoped>
  li {
    width: 80%;
    height: 28px;
    border-style: dashed;
    border-width: 2px;
    border-color: darkgray;
    list-style: none;
    margin:2px auto;
  }
  .delete-btn {
    height: 25px;
    width: 100px;
    padding: 4px;
    float: right;
    margin-top: 2px;
    background-color: gainsboro;
    vertical-align: center;
    border-radius: 40%;
  }
  .delete-btn:hover {
    background-color: darkseagreen;
  }
</style>
