<template>
  <v-container class="px-0 px-xl-16">
    <div v-for="category in categories" :key="category.id" class="mt-8" dense>
      <span :id="category.slug" class="anchor"></span>
      <h1 class="text-center">{{ category.name }}</h1>
      <!-- HTML comes from CMS that can only be edited by administrator -->
      <!-- eslint-disable-next-line -->
      <div class="mb-2" align="center" v-html="category.description"></div>
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
                  v-text="
                    [item.chinese_name, item.vietnamese_name]
                      .filter(Boolean)
                      .join(' | ')
                  "
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
                <menu-dialog :item="item" />
              </v-avatar>
              <div class="item-price font-weight-bold rounded px-1">
                <span v-if="item.base_price === 0">M.P.</span>
                <span v-else-if="category.name === 'Luncheon'"
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
import MenuDialog from '@/components/MenuDialog'

export default {
  components: {
    MenuDialog,
  },
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

.anchor {
  display: block;
  position: relative;
  top: -150px;
  visibility: hidden;
}

.v-card__text,
.v-card__title {
  word-break: normal;
}

.item-price {
  position: absolute;
  top: 16px;
  right: 16px;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 0.85);
}

.item-spicy {
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 1;
  pointer-events: none;
  background-color: rgba(255, 255, 255, 1);
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
