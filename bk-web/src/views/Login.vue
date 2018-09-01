<template lang='pug'>
  .login
    el-row
      el-col(:span="24") 1
    el-row
      el-col(:span="24") 1
    el-row.bottom_footer
      el-col(:span="24") 1
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.bottom_footer {
  position: fixed;
  bottom: 0px;
}
</style>
