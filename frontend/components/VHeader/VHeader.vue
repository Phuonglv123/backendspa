<template>
  <div id="h-header">
    <b-navbar
      toggleable="lg"
      type="white"
      variant="white"
      class="p-3 shadow-sm p-3 bg-white"
    >
      <div class="container">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <template v-for="nav in navigations" class="h-nav">
              <b-nav-item
                :to="`/${nav.slug}`"
                v-if="nav.has_child === false || nav.children.length === 0"
                :key="nav.slug"
                :disabled="!nav.enable"
                class="h-nav-link"
              >
                <span class="text-uppercase">{{ nav.name }}</span>
              </b-nav-item>
              <b-nav-item-dropdown v-else :key="nav.slug" right>
                <template #button-content>
                  <span class="" @click="onClick(`/${nav.slug}`)">{{
                    nav.name
                  }}</span>
                </template>

                <b-dropdown-item
                  v-for="child in nav.children"
                  :key="`${nav.slug}/${child.slug}`"
                  :to="`/${nav.slug}/${child.slug}`"
                  >{{ child.name }}
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </template>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: {
    navigations: Array,
  },
};
</script>

<style lang="scss" scope>
#h-header {
  ul{
    li{
      a{
        color: black;
      }
    }
  }
}
</style>