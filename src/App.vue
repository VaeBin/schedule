<template>
  <div id="app">
    <div id="nav">
      <router-link to="/register" >register</router-link>
      <router-link to="/login" >login</router-link>
      <router-link to="/calendar" >calendar</router-link>
      <router-view></router-view>
    </div>

    </div>
</template>

<script>

import Calendar from "./components/Calendar";
export default {
  name: 'app',
  components: {Calendar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: gainsboro;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  padding:0;
  position: absolute;
}
a {
  color: darkseagreen;
  font-size: 20px;
  font-weight: bold;
  font-family: "Comic Sans MS";
  padding: 5px 10px;
}
a:hover{
  color: cadetblue;
}
  #nav {
    width: 100%;
    position: relative;
  }
  /*calendar{
    position: absolute;
    top: 300px;
    left:10px;
    height: 100%;
  }
  */

</style>
