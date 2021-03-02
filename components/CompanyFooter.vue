<template>
  <v-footer color="red" padless>
    <v-row justify="center" no-gutters class="pa-4">
      <v-col class="text-center white--text" cols="12">
        <v-btn
          v-for="link in links"
          :key="link.title"
          color="white"
          text
          rounded
          class="my-2"
          nuxt
          :to="link.to"
        >
          {{ link.title }}
        </v-btn>
      </v-col>
      <v-col class="pt-4 text-center white--text" cols="12">
        {{ $store.state.business_info.address_street }},
        {{ $store.state.business_info.address_locality }},
        {{ $store.state.business_info.address_region }},
        {{ $store.state.business_info.postal_code }}
      </v-col>
      <v-col class="pb-4 text-center white--text" cols="12">
        {{ $store.state.business_info.telephone_pretty }}
      </v-col>
      <v-col class="text-center white--text" cols="12"> Open Everyday </v-col>
      <v-col class="text-center white--text" cols="12">
        {{ $store.state.business_info.open_hour }} -
        {{ $store.state.business_info.close_hour }}
      </v-col>
      <v-col class="py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Zien Hong Restaurant</strong>
      </v-col>
      <v-col class="text-center white--text" cols="12">
        <a
          href="https://blossomwebdesigns.com/"
          rel="noopener"
          target="_blank"
          aria-label="Link to website designer"
          class="designer-link"
        >
          Designed by Blossom Web Designs
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped>
.designer-link {
  color: white;
  text-decoration: none;
}
</style>
