<template lang='pug'>
  .base 
    el-upload.upload-demo(:action="actionApi+'/file'"  multiple :limit="1" :file-list='fileList' name='file' :data="fileObj" :on-success="uploadSuccess")
        el-button(size='small', type='primary') 点击上传
        .el-upload__tip(slot='tip') 只能上传jpg/png文件，且不超过500kb
    img(:src="actionApi+'/file?path='+picUrl" alt='图片')
</template>

<script>
const ACTION_API = 'http://localhost:3000/files-api'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      actionApi:ACTION_API,
      fileList:[], // 文件列表
      fileObj:{ // 额外参数
          document:'asd'
      },
      picUrl:''

    }
  },
  methods: {
    // 上传成功后调用
    uploadSuccess(res){
        console.log(res)
        this.picUrl = res.url
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
