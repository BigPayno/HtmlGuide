import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Table from '@/components/Table'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/Index',
      name: "Index",
      component: Index
    },{
      path: '/Table',
      name: 'Table',
      component: Table
    },{
      path: '/Form',
      name: 'Form',
      component: Form,
    }
  ]
})
