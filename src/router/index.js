import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '../views/index/index'
import Manage from '../views/manage/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	name: 'Index',
      	component: Index
    },
    {
    	path: '/manage',
       	name: 'Manage',
   		component: Manage
    }
  ]
})
