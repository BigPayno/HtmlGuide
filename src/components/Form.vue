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
        }
      }
    },
    methods:{
      resetForm:function(){
        this.$refs.form.resetFields();
      },
      submitForm:function(){
        this.$message.success(this.request.name+this.request.pass);
      }
    }
  }
</script>

<style>
</style>
