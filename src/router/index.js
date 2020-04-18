import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import App from "../App";
import Schedule from "../components/Schedule";
import Calendar from "../components/Calendar";
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/app',
      name: 'App',
      component: App,
      redirect: '/calendar'
    },
    {
      path: '/',
      redirect: '/app'
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
