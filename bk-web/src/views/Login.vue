<template lang='pug'>
  .login
    el-row
      el-col(:span="24")
        .logo-box.mgt-13
          .logo
          .loginText 资源即财富
    el-row
      el-col(:span="24")
        el-card.login-bord(class="box-card")
          el-row
            .login-title 登录
          el-row.login-item
            el-form(ref="form", :model="form", label-width="80px")
              el-form-item(label="账号")
                el-input(v-model="form.name"  placeholder="请输入账号")
              el-form-item(label="密码")
                el-input(v-model="form.password"  placeholder="请输入密码" type='password')
              el-form-item(label="")
                span sdsa
              el-form-item(label="验证码")
                el-input(v-model="form.authCode"  placeholder="验证码")
          el-row.login-item.center
            el-button(type="primary" @click='login') 登录
            el-button(type="success" @click='toRegiste') 注册
            el-button(type="text" @click='toForget') 忘了密码？

    el-row
      el-col(:span="24").center.botom-text 小熊猫版权所有
</template>

<script>
// import LoginSwiper from '@com/LoginSwiper'
const form = {
  account: '',
  password: ''
}
export default {
  name: 'login',
  data () {
    return {
      form: _.cloneDeep(form)
    }
  },
  components: {},
  methods: {
    // 登录
    login () {
      this.$router.push({
        name: 'Base'
      })
    },
    // 注册
    toRegiste () {
      alert('去注册')
    },
    // 忘记密码
    toForget () {
      alert('忘记密码')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../css/base.styl';

.login {
  background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535822368163&di=01abb38a20633fc1b166721e389b48a8&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1306%2F25%2Fc0%2F22548256_1372143501913.jpg') 50% no-repeat;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 300px;
  background-size: 100% 1200px;
  overflow: hidden;
}

.loginText {
  color: #FFF;
}

.login-bord {
  width: 700px;
  margin: 0 auto;
  height: 350px;
}

.login-item {
  width: 400px;
  margin: auto;
}

.mgt-13 {
  margin-top: 9%;
}

.logo {
  width: 80px;
  height: 80px;
  float: left;
  background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535895862285&di=3eb4d24edf44a7ccf3300b6cf4cad670&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20141231%2Fpaoxiaodeshizishiliangchatu_2320066_small.jpg') no-repeat;
  background-size: 80px 80px;
  float: left;
  margin-left: 41%;
}

.logoText {
  float: left;
}

.login-box {
  padding-top: 150px;
}

.botom-text {
  color: #FFF;
}
</style>
