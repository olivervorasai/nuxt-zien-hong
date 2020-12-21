<template>
  <v-container class="mt-12">
    <v-row justify="center">
      <v-btn-toggle v-model="toggle" class="button-group" tile dense mandatory>
        <v-btn :to="'/menu'" aria-label="Menu" exact nuxt> Menu </v-btn>
        <v-btn :to="'/menu/luncheon'" aria-label="Lunch Special" exact nuxt>
          Lunch Special
        </v-btn>
      </v-btn-toggle>
    </v-row>
    <nuxt-child :categories="categories" />
    <v-row justify="center" class="mt-6">
      <p class="mb-0 red--text font-weight-bold">
        <v-icon color="red">{{ mdiChiliMild }}</v-icon> Indicates Spicy Items
      </p>
    </v-row>
    <v-row justify="center" class="mb-6">
      <p class="mb-0 red--text font-weight-bold">
        Menu uses imitation crab meat.
      </p>
    </v-row>
  </v-container>
</template>

<script>
import { mdiChiliMild } from '@mdi/js'

export default {
  data() {
    return {
      categories: this.$store.state.categories,
      toggle: undefined,
      mdiChiliMild,
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
