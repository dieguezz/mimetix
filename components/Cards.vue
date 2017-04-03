<template>
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
</template>

<script>
import imagePlan from '~assets/images/bg1.png';
import imageRocket from '~assets/images/bg2.png';
import imageDesk from '~assets/images/bg3.png';

const Carousel = () =>
  import ('~/components/Carousel/Carousel');
const Slide = () =>
  import ('~/components/Carousel/Slide');
const Card = () =>
  import ('~/components/Card/Card');

export default {
  components: {
    Carousel,
    Slide,
    Card,
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
}
</script>
