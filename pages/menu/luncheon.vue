<template>
  <v-container>
    <menu-listing :categories="filteredCategories" />
  </v-container>
</template>

<script>
import MenuListing from '@/components/MenuListing'

export default {
  components: {
    MenuListing,
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    filteredCategories() {
      return this.categories.slice(0, 1)
    },
  },
}
</script>
