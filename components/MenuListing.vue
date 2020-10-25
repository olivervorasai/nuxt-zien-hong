<template>
  <v-container class="px-0">
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
                  >{{ item.name
                  }}<v-icon v-if="item.spicy" color="red">{{
                    mdiChiliMild
                  }}</v-icon></v-card-title
                >
                <v-card-subtitle class="py-0" v-text="item.vietnamese_name">
                </v-card-subtitle>
                <v-card-subtitle class="py-0" v-text="item.chinese_name">
                </v-card-subtitle>
                <v-card-subtitle class="py-0" v-text="item.description">
                </v-card-subtitle>
              </div>
              <v-avatar
                class="align-self-end"
                height="125"
                min-width="150"
                width="auto"
                tile
              >
                <v-dialog v-if="item.image" v-model="dialog" width="unset">
                  <template v-slot:activator="{ on, attrs }">
                    <img
                      :srcset="generateSrcset(item.image.formats)"
                      sizes="(max-width: 1000px) 480px, 800px, 1000px"
                      :src="generateLink(item.image.formats)"
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-card>
                    <img
                      :srcset="generateSrcset(item.image.formats)"
                      sizes="(max-width: 1000px) 480px, 800px, 1000px"
                      :src="generateLink(item.image.formats)"
                    />
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
import { mdiChiliMild } from '@mdi/js'

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
      dialog: false,
    }
  },
  methods: {
    generateSrcset(formats) {
      return `
        ${process.env.strapiBaseUri + formats.small.url} 480w,
        ${process.env.strapiBaseUri + formats.medium.url} 800w,
        ${process.env.strapiBaseUri + formats.large.url} 1000w
      `
    },
    generateLink(formats) {
      return process.env.strapiBaseUri + formats.small.url
    },
  },
}
</script>

<style scoped lang="scss">
.v-card__text,
.v-card__title {
  word-break: normal;
}

.item-price {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(255, 255, 255, 0.75);
}
</style>
