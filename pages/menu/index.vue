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
      return this.categories.filter(
        (category) => category.name.toLowerCase() !== 'luncheon'
      )
    },
  },
}
</script>
