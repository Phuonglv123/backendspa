<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <template v-for="i in slides">
        <b-carousel-slide
          :caption="i.title ? i.title : ''"
          :text="i.description ? i.description : ''"
          :img-src="`http://localhost:1337${i.image}`"
          :key="i.id"
        ></b-carousel-slide>
      </template>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    carousels: Array,
  },
  data() {
    return {
      items: [],
    };
  },

  computed: {
    slides() {
      return this.carousels.map((i) => {
        return {
          title: i.title,
          image: i.img ? i.img[0].url : "",
          id: i.id,
          description: i.description,
        };
      });
    },
  },

  // mounted() {
  //   this.items = this.carousels.map((i) => {
  //     return {
  //       title: i.title,
  //       image: i.img ? i.img[0].url : "",
  //       id: i.id,
  //       description: i.description,
  //     };
  //   });

  //   console.log(this.items)
  // },
};
</script>

<style lang="scss" scope>
img {
  width: 100%;
}
</style>