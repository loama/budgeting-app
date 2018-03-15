import Vue from 'vue'
import Router from 'vue-router'
import budget from '@/components/budget'
import expenses from '@/components/expenses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/budget',
      name: 'budget',
      component: budget
    },
    {
      path: '/expenses',
      name: 'expenses',
      component: expenses
    },
    { path: '*', redirect: '/budget' }
  ]
})
