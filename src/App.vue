<template>
  <div id="app">
    <el-row :gutter='10' style="text-align: center;">
      <el-col :span="24">
        <el-card style="width: 400px; margin: auto;">
          <div slot="header" class="clearfix">
            <el-input v-model="routerName" style="width: 250px; margin: 0 14px;"  placeholder="vue命名路由"></el-input>
            <el-button v-on:click="routeTo" style="display: inline-block;" size="medium" icon="el-icon-search" circle></el-button>
          </div>
          <div>
            <router-view/>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
      routerName: 'HelloWorld'
    }
  },
  methods:{
    routeTo:function(){
      if(this.routerName&&this.routerName!=this.$route.name){
        try{
          this.$router.push({
            name:this.routerName,
          });
        }catch(err){
          this.$message.warning('不存在该命名的路由');
        }
      }else{
        this.$message.warning('请输入路由名称(非当前路径)');
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
