import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Table from '@/components/Table'
import Form from '@/components/Form'
import Popover from '@/components/Popover'

Vue.use(Router)

var routes = [
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
    },{
      path: '/Popover',
      name: 'Popover',
      component: Popover,
    }
 ];

export default new Router({
  routes: routes
})

export { routes as routes }
