<template>
  <div class="home container">
    <carousel></carousel>
    <cards></cards>
    <div :style="{ 'background-color': 'rgb(121,134,203)' }">
      <div class="eq-flex h-between padding c-white">
        <span class="flex">Keep calm and have fun</span>
        <div class="flex"><a class="l-normal" href="mailto:info@mimetix.com">info@mimetix.com </a> <span> | </span> <a class="l-normal" href="tel:+34636648939"> +34 636 648 939</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from '~/components/Carousel';
import cards from '~/components/Cards';

export default {
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head () {
    return {
      title: `Home (${this.name}-side)`
    }
  },
  components: {
    carousel,
    cards,
  }
}
</script>

<style scoped>
  .home {
    font-family: Roboto mono,sans-serif;
    font-size: 14px;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 1280px;
    margin: 0 auto;
  }
</style>
