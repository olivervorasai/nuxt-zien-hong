<template>
  <v-container>
    <div v-for="category in categories" :key="category.id">
      <h2>{{ category.name }}</h2>
      <!-- If statement performed before next for loop for performance, find way to do this without repeating code? -->
      <div v-if="category.name === 'Luncheon'" class="items-container">
        <div v-for="item in category.menu_items" :key="item.id" class="item">
          <div class="item-left">
            <div>
              <strong>{{ item.name }}</strong>
            </div>
            <div class="item-content">{{ item.vietnamese_name }}</div>
            <div class="item-content">{{ item.chinese_name }}</div>
            <div class="item-content">{{ item.description }}</div>
            <div class="item-price">
              <strong
                >${{ item.special_price.toFixed(2)
                }}<span v-if="item.large_price">
                  / ${{ item.large_price.toFixed(2) }}</span
                ></strong
              >
            </div>
          </div>
          <div v-if="item.spicy" class="item-spicy">
            <v-icon color="red">{{ mdiChiliMild }}</v-icon>
          </div>
        </div>
      </div>
      <div v-else class="items-container">
        <div v-for="item in category.menu_items" :key="item.id" class="item">
          <div class="item-left">
            <div>
              <strong>{{ item.name }}</strong>
            </div>
            <div class="item-content">{{ item.vietnamese_name }}</div>
            <div class="item-content">{{ item.chinese_name }}</div>
            <div class="item-content">{{ item.description }}</div>
            <div class="item-price">
              <strong
                >${{ item.base_price.toFixed(2)
                }}<span v-if="item.large_price">
                  / ${{ item.large_price.toFixed(2) }}</span
                ></strong
              >
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
.container {
  @media screen and (min-width: 961px) {
    margin: 0 10em;
  }
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  .item {
    @media screen and (max-width: 960px) {
      flex: 0 0 100%;
    }
    @media screen and (min-width: 961px) {
      flex: 0 0 40%;
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
</style>
