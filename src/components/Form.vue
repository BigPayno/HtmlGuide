<template>
  <el-form ref="form" :model="request" :rules="rules">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="request.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="request.pass"></el-input>
    </el-form-item>

    <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
    </el-form-item>

    <el-form-item label="头像(选填)" ref="share_poster_item">
      <el-upload
              action="<%=request.getContextPath()%>/common/uploadPic.do"
              list-type="picture-card"
              show-file-list="false"
              :limit="1"
              :file-list="shareImageList"
              :before-upload="beforeUpload"
              :on-remove="handleRemove"
              :on-preview="handlePreview"
              :on-success="handleSuccess">
          <i class="el-icon-plus"></i>
      </el-upload>
      <p class="form_image_info">建议图片宽度为578PX，高度为796PX，不超过2MB</p>
      <span v-if="showHint && showItemHint['shareImage']" class="error_hint error_hint_image">请上传</span>
    </el-form-item>

    <el-dialog :visible.sync="imagePreviewDialog">
      <img width="100%" :src="imagePreviewUrl" alt="">
    </el-dialog>

  </el-form>
</template>

<script>
  export default {
    name: 'Form',
    data () {
      var validatePass = (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入密码'));
              }
            };
      return {
        request:{
          name:'',
          pass:''
        },
        rules:{
          pass:[
            { validator: validatePass, trigger: 'blur' }
          ]
        },
        showHint: false,
        showItemHint: {
          shareImage:false
        },
        shareImageList: [],
        imagePreviewDialog: false,
        imagePreviewUrl: undefined
      }
    },
    methods:{
      resetForm:function(){
        this.$refs.form.resetFields();
      },
      submitForm:function(){
        this.$message.success(this.request.name+this.request.pass);
      },
      beforeUpload(file, sizeLimit) {
        let underSizeLimit = file.size <= sizeLimit * 1024 * 1024;
        if(!sizeLimit){
          sizeLimit = 2;
        }
        if (!underSizeLimit) {
            this.$message.error('上传图片大小不能超过' + sizeLimit + 'MB!');
        }
        let isImage = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isImage) {
            this.$message.error('上传图片格式错误');
        }
        return underSizeLimit && isImage;
      },
      handleSuccess(dom) {
        dom.classList.add('hidden_add_image_card');
      },
      handleRemove(dom) {
        setTimeout(() => dom.classList.remove('hidden_add_image_card'), 600);
      },
      handlePreview(file) {
          this.imagePreviewUrl = file.url;
          this.imagePreviewDialog = true;
      }
    }
  }
</script>

<style>
</style>
