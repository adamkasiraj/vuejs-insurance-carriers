<template>
  <div id="root">
    <main>
      <the-heading></the-heading>
      <carrier-grid></carrier-grid>
    </main>
  </div>
</template>

<script>
import TheHeading from './components/heading/TheHeading.vue';
import CarrierGrid from './components/carrier-grid/CarrierGrid.vue';

export default {
  name: 'Main',
  components: {
    'the-heading': TheHeading,
    'carrier-grid': CarrierGrid,
  }
};
</script>
