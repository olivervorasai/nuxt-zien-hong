<template>
  <v-container>
    <v-row justify="center">
      <v-btn
        depressed
        color="deep-orange"
        class="white--text"
        data-type="menu"
        @click="setActiveCategory"
      >
        Menu
      </v-btn>
      <v-btn
        outlined
        color="deep-orange"
        data-type="lunch"
        @click="setActiveCategory"
      >
        Lunch Special
      </v-btn>
    </v-row>
    <menu-listing class="menu-listing" :categories="categories" />
  </v-container>
</template>

<script>
import MenuListing from '../components/MenuListing.vue'

export default {
  name: 'Menu',
  components: {
    MenuListing,
  },
  data() {
    return {
      allCategories: [],
      menuCategories: [],
      lunchCategories: [],
      categories: [],
    }
  },
  beforeMount() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      fetch(process.env.cmsUrl)
        .then((res) => res.json())
        .then((data) => {
          this.allCategories = data
          this.sortMenuItems(this.allCategories)
          this.menuCategories = this.allCategories.slice(1)
          this.lunchCategories = this.allCategories.slice(0, 1)
          this.categories = this.menuCategories
        })
    },
    sortMenuItems(categories) {
      categories.forEach((category) => {
        category.menu_items.sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { numeric: true })
        )
      })
    },
    setActiveCategory(e) {
      // Vuetify button classes that define normal/outlined buttons
      const active = ['deep-orange', 'white--text']
      const inactive = ['v-btn--flat', 'v-btn--outlined', 'deep-orange--text']

      const target =
        e.target.tagName === 'SPAN' ? e.target.parentElement : e.target
      const cType = target.dataset.type
      const buttons = target.parentElement.children

      // Change classes for all buttons
      buttons.forEach((element) => {
        if (element === target) {
          element.classList.add(...active)
          element.classList.remove(...inactive)
        } else {
          element.classList.add(...inactive)
          element.classList.remove(...active)
        }
      })

      // Update prop of menu
      switch (cType) {
        case 'menu':
          this.categories = this.menuCategories
          break
        case 'lunch':
          this.categories = this.lunchCategories
          break
      }

      if (cType === 'menu') {
        this.categories = this.menuCategories
      } else if (cType === 'lunch') {
        this.categories = this.lunchCategories
      }
    },
  },
}
</script>

<style scoped lang="scss">
.v-btn {
  margin: 1em;
  font-weight: 700;
}
</style>
