<template>
  <div class="main">
    <div class="filter">
      <el-form>
        <el-form-item>
          <el-radio-group v-model="filters.gender" @change="genderFilterHandler">
            <el-radio label="female">female</el-radio>
            <el-radio label="male">male</el-radio>
            <el-radio label="all">all</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <div class="table">

      <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)">
        <el-table-column label="序号">
          <template v-slot="scope">
            <span>{{scope.$index+1}}</span>
          </template>
        </el-table-column>

        <template v-for="item in tableHeader">
          <el-table-column :prop="item.prop" :label="item.label"></el-table-column>
        </template>

        <el-table-column label="详情">
          <template v-slot="scope">
            <el-popover placement="top-start" trigger="hover">
              <div style="width: 100px;font-size: 14px;color: #333333;line-height: 19px;word-break:break-all;">
                  <span>性别：{{scope.row.gender}}</span><br>
                  <span>年龄：{{scope.row.age}}</span><br>
              </div>
              <el-button size="mini" slot="reference" style="color: #2C6FE1">简要</el-button>
            </el-popover>
          </template>
        </el-table-column>

      </el-table>

      <div style="height: 32px; margin-top: 10px;">
              <el-pagination
                      style="float: right"
                      layout="total, prev, pager, next, jumper"
                      :current-page.sync="currentPage"
                      :page-size="pageSize"
                      :total="tableData.length">
              </el-pagination>
      </div>

    </div>
  </div>
</template>

<script>
  import mock from '@/utils/mock.js'

  export default {
    name: 'Table',
    data () {
      return {
        currentPage: 1,
        pageSize: 3,
        tableHeader:[{
            prop:'name',
            label:'姓名'
          },{
            prop:'id',
            label:'编号'
        }],
        tableOriginData:[],
        tableData:[],
        filters:{
          gender: ''
        }
      }
    },
    mounted() {
      this.initTableData()
    },
    methods:{
      initTableData: function(){
        this.tableOriginData = mock.users;
        this.tableData = this.tableOriginData;
      },
      genderFilterHandler: function(){
        this.tableData = this.tableOriginData.filter(row=>{
          if(this.filters.gender=='all'){
            return true;
          }else{
            return this.filters.gender == row.gender;
          }
        })
      }
    }
  }
</script>

<style>
</style>
