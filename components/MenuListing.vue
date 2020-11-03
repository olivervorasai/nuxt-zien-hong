<template>
  <v-container class="px-0 px-xl-16">
    <div v-for="category in categories" :key="category.id" dense>
      <h2 class="text-center mb-2">{{ category.name }}</h2>
      <v-row dense>
        <v-col
          v-for="item in category.menu_items"
          :key="item.id"
          cols="12"
          sm="12"
          md="12"
          lg="6"
        >
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline text-subtitle-1 font-weight-bold"
                  >{{ item.name }}
                  <v-icon
                    v-if="item.spicy"
                    color="red"
                    class="item-spicy rounded"
                    >{{ mdiChiliMild }}</v-icon
                  ></v-card-title
                >
                <v-card-subtitle
                  class="py-0 other-lang-name"
                  v-text="item.chinese_name + ' | ' + item.vietnamese_name"
                >
                </v-card-subtitle>
                <v-card-subtitle
                  class="py-0 item-description"
                  v-text="item.description"
                >
                </v-card-subtitle>
              </div>
              <v-avatar
                class="align-self-end"
                height="125"
                min-width="150"
                width="auto"
                tile
              >
                <v-dialog v-if="item.image" v-model="item.dialog" width="unset">
                  <template v-slot:activator="{ on }">
                    <img
                      :srcset="generateSrcset(item.image.formats)"
                      sizes="(max-width: 1000px) 480px, 800px, 1000px"
                      :src="item.image.formats.small.url"
                    />
                    <v-icon class="item-magnify" v-on="on">{{
                      mdiMagnify
                    }}</v-icon>
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
                      v-text="item.image.caption"
                    ></v-card-text>
                  </v-card>
                </v-dialog>
              </v-avatar>
              <div class="item-price font-weight-bold rounded px-1">
                <span v-if="category.name === 'Luncheon'"
                  >${{ item.special_price.toFixed(2) }}</span
                >
                <span v-else>
                  ${{ item.base_price.toFixed(2) }}
                  <span v-if="item.large_price">
                    / ${{ item.large_price.toFixed(2) }}
                  </span>
                </span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mdiChiliMild, mdiMagnify } from '@mdi/js'

export default {
  props: {
    categories: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      mdiChiliMild,
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

<style scoped lang="scss">
@import '~vuetify/src/styles/settings/_variables';

.v-card__text,
.v-card__title {
  word-break: normal;
}

.item-price {
  position: absolute;
  top: 16px;
  right: 16px;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.75);
}

.item-spicy {
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 1;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 1);
}

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

.item-description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .v-card__title {
    line-height: 1em;
    padding-bottom: 0;
  }
  .other-lang-name {
    display: none;
  }
  .item-description {
    -webkit-line-clamp: 3;
  }
}
</style>
