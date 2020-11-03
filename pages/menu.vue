<template>
  <v-container class="px-0">
    <v-row justify="center">
      <v-btn-toggle v-model="toggle" class="button-group" tile dense mandatory>
        <v-btn :to="'/menu'" aria-label="Menu" exact nuxt> Menu </v-btn>
        <v-btn :to="'/menu/luncheon'" aria-label="Lunch Special" exact nuxt>
          Lunch Special
        </v-btn>
      </v-btn-toggle>
    </v-row>
    <nuxt-child :categories="categories" />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      categories: this.$store.state.categories,
      toggle: undefined,
    }
  },
}
</script>

<style scoped lang="scss">
.button-group {
  .v-btn {
    font-weight: 700;
  }
  .v-btn--active {
    background-color: #ff5722 !important;
    border-color: #ff5722 !important;
    color: #ffffff !important;
  }
  a:not(.v-btn--active) {
    color: #ff5722 !important;
    background-color: transparent !important;
  }
}
</style>
