import Vue from 'vue'
import Router from 'vue-router'
import PageName from '@/components/PageName'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/page1'
    },
    {
      path: '/page1/:name',
      name: 'pageName',
      component: PageName
    }
  ]
})
