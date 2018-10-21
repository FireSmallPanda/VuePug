<template lang='pug'>
  .base
    el-menu.el-menu-demo( mode="horizontal" background-color="#545c64" text-color="#fff")
      el-menu-item(index="1" @click="toLogin" ) 登录
      el-submenu(index="2")
        template(slot="title") 我的工作台
        el-menu-item(index="2-1") 选项1
        el-menu-item(index="2-2") 选项2
        el-menu-item(index="2-3") 选项3
</template>

<script>

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
