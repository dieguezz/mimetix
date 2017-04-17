'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _6c428246 = () => import('/var/www/mimetix/pages/index.vue')



const scrollBehavior = function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _6c428246,
			name: "index"
		}
  ]
})
