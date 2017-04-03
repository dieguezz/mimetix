<template>
  <div class="card padding">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'card',
  };
</script>

<style scoped>
  .card {
    padding-bottom: 50%;
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 100%;
    color: white;
  }
</style>
