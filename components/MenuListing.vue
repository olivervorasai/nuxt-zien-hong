<template>
  <v-container class="px-0">
    <div v-for="category in categories" :key="category.id" class="mb-12">
      <h2 class="text-center mb-2">{{ category.name }}</h2>
      <div class="items-container">
        <div v-for="item in category.menu_items" :key="item.id" class="item">
          <div class="item-left">
            <div>
              <strong>{{ item.name }}</strong>
            </div>
            <div class="item-content">{{ item.vietnamese_name }}</div>
            <div class="item-content">{{ item.chinese_name }}</div>
            <div class="item-content">{{ item.description }}</div>
            <div class="item-price">
              <strong>
                <span v-if="category.name === 'Luncheon'"
                  >${{ item.special_price.toFixed(2) }}</span
                >
                <span v-else>${{ item.base_price.toFixed(2) }}</span>
                <span v-if="item.large_price"
                  >/ ${{ item.large_price.toFixed(2) }}</span
                >
              </strong>
            </div>
          </div>
          <div v-if="item.spicy" class="item-spicy">
            <v-icon color="red">{{ mdiChiliMild }}</v-icon>
          </div>
        </div>
      </div>
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
    }
  },
}
</script>

<style scoped lang="scss">
.items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 1904px) {
    margin: 0 16em;
  }
  .item {
    @media screen and (max-width: 960px) {
      flex: 0 0 100%;
    }
    @media screen and (min-width: 961px) {
      flex: 0 0 49%;
    }
    background-color: white;
    border-radius: 0.25em;
    margin: 0.25em;
    padding: 0.5em;
    position: relative;
    box-shadow: 0 0 0 1px rgba(67, 41, 163, 0.08),
      0 1px 5px 0 rgba(67, 41, 163, 0.08);

    .item-left {
      max-width: 70%;
    }

    .item-content {
      color: #6b6b83;
    }

    .item-price {
      position: absolute;
      top: 0.5em;
      right: 0.5em;
    }
    .item-spicy {
      position: absolute;
      bottom: 0.5em;
      right: 0.5em;
    }
  }
}
.items-container::after {
  content: '';
  flex: 0 0 49%;
}
</style>
