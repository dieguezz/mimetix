<template>
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
</template>

<script>
const Carousel = () =>
  import ('~/components/Carousel/Carousel');
const Slide = () =>
  import ('~/components/Carousel/Slide');

export default {
  components: {
    Carousel,
    Slide,
  }
}
</script>
