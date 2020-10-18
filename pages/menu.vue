<template>
  <v-container>
    <v-row justify="center">
      <v-btn
        :to="'/menu'"
        class="white--text"
        color="deep-orange"
        exact
        depressed
        nuxt
        @click="setActiveCategory"
      >
        Menu
      </v-btn>
      <v-btn
        :to="'/menu/luncheon'"
        color="deep-orange"
        exact
        outlined
        nuxt
        @click="setActiveCategory"
      >
        Lunch Special
      </v-btn>
    </v-row>
    <nuxt-child :categories="categories" />
  </v-container>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    return {
      categories: await $strapi.find('categories').then((res) => {
        res.forEach((category) => {
          category.menu_items.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { numeric: true })
          )
        })
        return res
      }),
    }
  },
  methods: {
    setActiveCategory(e) {
      // Vuetify button classes that define normal/outlined buttons
      const active = ['deep-orange', 'white--text']
      const inactive = ['v-btn--flat', 'v-btn--outlined', 'deep-orange--text']

      const target =
        e.target.tagName === 'SPAN' ? e.target.parentElement : e.target
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
