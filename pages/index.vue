<template>
  <transition appear
  v-on:before-appear="beforeEnter"
  v-on:appear="enter"
  v-on:after-appear="leave"
  >
    <div id="home" class="home">
      <div class="carousel">
          <div>
            <carousel arrows="true" dots="true">
              <slide slot="slides" :style="{ 'background-color': '#f6f6f6' }">
                <div class="eq-flex h-center">
                  <img src="~assets/images/mimetixlogo.png" alt="">
                </div>
                <div class="eq-flex column padding h-center">
                  <h1>Más allá del diseño web</h1>
                  <span>No te ofrecemos una web, hacemos <b>tus fantasías</b> realidad.</span>
                </div>
              </slide>
              <slide slot="slides" :style="{ 'background-color': '#ffc107' }">
                <div class="eq-flex h-center">
                  <svg>
                    <use xlink:href="#search"></use>
                  </svg>
                </div>
                <div class="eq-flex column padding h-center">
                  <h1>Si no te encuentran, no existes</h1>
                  <span>Te ayudamos a <strong>posicionar tu web</strong> en lo más alto de los buscadores</span>
                </div>
              </slide>
              <slide slot="slides" :style="{ 'background-color': '#03a9f4' }">
                <div class="eq-flex h-center">
                  <svg>
                    <use xlink:href="#computer"></use>
                  </svg>
                </div>
                <div class="eq-flex column padding h-center">
                  <h1>Hosting</h1>
                  <span>Optimizamos el despliegue de tu aplicación, porque la velocidad y la seguridad importan.</span>
                </div>
              </slide>
            </carousel>
          </div>
      </div>
      <div>
        <div class="flex row">
          <card class="eq-flex" :style="{ 'background-color': '#607d8b', 'background-image': `url(${images.imageRocket})` }">
            <div class="absolute">
              <h1>Haremos despegar tus ideas</h1>
              <span>¿Te hemos dicho que también nos dedicamos al marketing online? Ponemos mucho ingenio, somos más que desarrolladores</span>
            </div>
          </card>
          <card class="eq-flex" :style="{ 'background-color': '#f44336', 'background-image': `url(${images.imagePlan})` }">
            <div class="absolute">
              <h1>Un equipo senior</h1>
              <span>Tenemos ninjas trabajando de desarrolladores, agentes del caos diseñando interfaces, y alquimistas inventando productos.</span>
            </div>
          </card>
        </div>
        <card :style="{ 'background-color': '#03a9f4', 'background-image': `url(${images.imageDesk})` }">
          <div class="absolute">
            <h1>Be like water my friend</h1>
            <span>Ya lo decía Bruce Lee y no sabía que el mundo es multipantalla. Hacemos tu web responsiva, mobile first.</span>
          </div>
        </card>
      </div>
      <mimetix-footer></mimetix-footer>
    </div>
  </transition>
</template>

<script>
import carousel from '~/components/Carousel/Carousel';
import card from '~/components/Card/Card';
import slide from '~/components/Carousel/Slide';
import mimetixFooter from '~/components/Footer';

import imagePlan from '~assets/images/bg1.png';
import imageRocket from '~assets/images/bg2.png';
import imageDesk from '~assets/images/bg3.png';

export default {
  head () {
    return {
      title: 'Mimetix | Agencia Digital'
    }
  },
  data() {
    return {
      images: {
        imagePlan,
        imageRocket,
        imageDesk,
      },
    };
  },
  components: {
    carousel,
    slide,
    mimetixFooter,
    card,
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
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
