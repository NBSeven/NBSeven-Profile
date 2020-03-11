import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue'
import Personal from './views/Personal.vue'
import Projects from './views/Projects.vue'
import Blog from './views/Blog.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/personal',
      children: [
        {
          path: 'personal',
          name: 'Personal',
          cname: '关于我',
          component: Personal
        },
        {
          path: 'home',
          name: 'Home',
          cname: '首页',
          component: Home
        },
        {
          path: 'projects',
          name: 'Projects',
          cname: '项目',
          component: Projects
        },
        {
          path: 'blog',
          name: 'Note',
          component: Blog
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
