<template>
  <div class="hello">
    <div id="form">
      <form>
        <div class="item"><label>user name: <br>
          <input type="text" v-model="user" placeholder="input your name"></label></div>
        <div class="item"><label>password: <br>
          <input type="password" v-model="password" placeholder="input your password"></label></div>
        <button @click="enter">enter</button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: "",
      password: ""
    }
  },
  methods: {
    enter(){
      var pass;
      console.log(localStorage);
      if((pass = JSON.parse(localStorage.getItem(this.user)))!=null){
        if(this.password == pass["password"]){
          this.$router.push({path: "/schedule"});
        }
        else{
          alert("password is not right!");
          this.password = "";
        }
      }
      else{
        alert("user is not existed!");
        this.password = "";
        this.user = "";
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
