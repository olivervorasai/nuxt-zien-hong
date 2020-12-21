<template>
  <v-dialog v-if="item.image" v-model="dialog" width="unset">
    <template v-slot:activator="{ on }">
      <v-img
        class="avatar-img"
        :srcset="generateSrcset(item.image.formats)"
        sizes="(max-width: 1000px) 480px, 800px, 1000px"
        :src="item.image.formats.small.url"
        :lazy-src="item.image.formats.thumbnail.url"
      ></v-img>
      <v-icon class="item-magnify" v-on="on">{{ mdiMagnify }}</v-icon>
    </template>
    <v-card>
      <img
        class="dialog-popup-img"
        :srcset="generateSrcset(item.image.formats)"
        sizes="(max-width: 1000px) 480px, 800px, 1000px"
        :src="item.image.formats.small.url"
      />
      <v-card-text
        class="text-center font-weight-bold"
        v-text="item.name"
      ></v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mdiMagnify } from '@mdi/js'

export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      dialog: false,
      mdiMagnify,
    }
  },
  methods: {
    generateSrcset(formats) {
      return `
        ${formats.small.url} 480w,
        ${formats.medium.url} 800w,
        ${formats.large.url} 1000w
      `
    },
  },
}
</script>

<style scoped>
.item-magnify {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.item-magnify:hover {
  opacity: 1;
}

.dialog-popup-img {
  width: 100%;
}

.avatar-img {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
