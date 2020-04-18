<template>
  <div>
  <div id="form">
    <form>
      <div class="item"><label>user name: <br>
        <input type="text" v-model="user" @change="userdup" placeholder="length>6"></label></div>
      <div class="item"><label>password: <br>
        <input type="password" v-model="password" placeholder="length>6 with num&alephabet"></label></div>
      <div class="item"><label>confirm password: <br>
        <input type="password" v-model="confirm" placeholder="confirm the password"></label></div>
      <button @click="go()">go</button>
    </form>
  </div>
  </div>
</template>

<script>
    export default {
      name: "Register",
      data() {
        return {
          user: "",
          password: "",
          confirm: ""
        }
      },

      methods: {
        userdup() {
          if(JSON.parse(localStorage.getItem(this.user))!=null){
            alert("the name is already used!");
            this.user = "";
          }
        },
        go() {
          if (this.user.length == 0 || this.password.length == 0 || this.confirm.length == 0)
            alert("please input something!");

          else {
            if (this.user.length <= 6){
              alert("user name is less than 6!");
              this.user="";
              this.password = "";
              this.confirm = "";
            }
            else if (this.password.length <= 6) {
              alert("password is not valid!");
              this.password = "";
            }
            else if (!(new RegExp(/[0-9]+/).test(this.password))) {
              alert("password need some numbers!");
              this.password = "";
            }
            else if (!(new RegExp(/[a-zA-Z]+/).test(this.password))) {
              alert("password need some alphabets!");
              this.password = "";
            }
            else if (this.confirm != this.password) {
              alert("passwords differ!");
              this.password = "";
              this.confirm = "";
            }
            else {
              alert("register successfully!")
              localStorage.setItem(this.user,JSON.stringify({user: this.user,password: this.password}));
              //console.log(localStorage);
              this.$router.push({path: '/login'});
            }
          }
        }
      }
    }
</script>

<style scoped>


  #form {
    height: 100%;
    width: 100%;
    background: gainsboro;
    position: absolute;
  }
  form {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;

  }
  .item {
    height: 100px;
    width: 200px;
    margin: 10px auto;
    font-family: "Comic Sans MS";
    font-size: 20px;
    font-style: italic;
    font-weight: bold;

  }
  input {
    height: 30px;
    width: 200px;
    border: darkseagreen 3px dotted;
  }
  label {
    color: cadetblue;
  }
  button {
    height: 50px;
    width: 100px;
    margin: 10px auto;
    color: black;
    font-size: 20px;
    background-color: darkseagreen;
  }

</style>
