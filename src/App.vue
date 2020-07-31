<template>
  <div id="app">
    <el-row :gutter='10' style="text-align: center;">
      <el-col :span="24">
        <el-card style="width: 800px; margin: auto;">
          <div slot="header" class="clearfix">
            <el-input v-model="routerName" style="width: 250px; margin: 0 14px;"  placeholder="vue命名路由"></el-input>
            <el-button v-on:click="routeTo" style="display: inline-block;" size="medium" icon="el-icon-search" circle></el-button>
          </div>
          <el-row :gutter="20">
            <el-col :span="6">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
                  <template v-for="(item,index) in navMenu.menuList">
                    <el-menu-item index="index" align="left">
                      <i class="el-icon-menu"></i>
                      <span slot="title" @click="routeToMenu(item.name)">{{item.name}}</span>
                    </el-menu-item>
                  </template>
                </el-menu>
              </el-col>

              <el-col :span="18">
                  <router-view/>
              </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {routes} from '@/router/index.js'
export default {
  name: 'App',
  data (){
    return {
      routerName: 'HelloWorld',
      navMenu:{
        menuList: routes
      }
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
    },
    routeToMenu:function(routeName){
      this.routerName = routeName;
      this.routeTo();
      this.routerName = '';
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
