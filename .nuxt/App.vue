<template>
  <div id="__nuxt">
    
    <component v-if="layout" :is="layout"></component>
  </div>
</template>

<script>


let layouts = {

  "_default": () => import('/var/www/mimetix/layouts/default.vue')

}

export default {
  head: {"titleTemplate":"%s - Nuxt.js","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Meta description"}]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  
  methods: {
    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = layouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      let _layout = '_' + layout
      if (typeof layouts[_layout] !== 'function') {
        return Promise.resolve(layouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        layouts[_layout] = Component
        return layouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
        console.error(e)
      })
    }
  },
  components: {
    
  }
}
</script>


<style src="~assets/css/main.styl" lang="stylus"></style>

