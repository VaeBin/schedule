<template>
<div id="calendar">
hello
  <el-calendar v-model="value" id="el-calendar">
  </el-calendar>
  <div class="trian"></div>

</div>
</template>

<script>

    export default {
      name: "Calendar",
      data() {
        return {
          value: new Date()
        }
      }
    }
</script>

<style scoped>
#calendar {
  height: 80%;
  width: 600px;
  position: absolute;
  top: 100px;
  left: 60px;
}

div.el-calendar{
  height: 100%;
  position: absolute;
}
  div.el-calendar.el-calendar{
    height: 400px;
  }
  div.trian {
    position: absolute;
    right: 0px;
    top:20px;
    height: 0;
    width: 0;
    animation: trian 6s 0s infinite;
  }
  @keyframes trian {
    0%   {
      border-right: solid transparent 100px;
      border-top: solid transparent 100px;
      border-bottom: solid transparent 100px;
      border-left: 100px solid #b0c29e
    }
    25%  {
      border-bottom: solid transparent 100px;
      border-right: solid transparent 100px;
      border-left: solid transparent 100px;
      border-top: 100px solid #e6c5d6
    }
    50%  {
      border-left: solid transparent 100px;
      border-bottom: solid transparent 100px;
      border-top: solid transparent 100px;
      border-right: 100px solid #8ca3a0
    }
    75% {
      border-top: solid transparent 100px;
      border-left: solid transparent 100px;
      border-right: solid transparent 100px;
      border-bottom: 100px solid #d1d07c
    }
    100%   {
      border-right: solid transparent 100px;
      border-top: solid transparent 100px;
      border-bottom: solid transparent 100px;
      border-left: 100px solid #b0c29e
    }
  }
</style>
