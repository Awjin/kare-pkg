import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DrawingBoard from '@/components/DrawingBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/edit/:drawingIdx',
      name: 'Edit',
      component: DrawingBoard,
      props: true
    },

    {
      path: '*',
      component: Home
    }
  ]
})
