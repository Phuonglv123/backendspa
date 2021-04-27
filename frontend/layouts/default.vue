<template>
  <div>
    <v-header :navigations="navigations"/>
    <v-carousel :carousels="carousels"/>
    <Nuxt />
    <v-footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      navigations: [],
      carousels: []
    };
  },

  async fetch() {
    this.navigations = await this.$strapi.$navigations.find({ active: true}, ['children'])
    this.carousels = await this.$strapi.$carousels.find({active: true});
  },
};
</script>

<style>
</style>
