<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-row justify="center">
        <h1 class="text-h5 text-sm-h4 text-md-h3">ZIÊN HỒNG</h1>
      </v-row>
      <v-row justify="center">
        <h2 class="text-h6 text-sm-h5 text-md-h4">雲吞湯麵 經濟小食</h2>
      </v-row>
      <v-row justify="center">
        <h2 class="text-h6 text-sm-h5 text-md-h4">
          UNIQUE &amp; EXOTIC ORIENTAL CUISINE
        </h2>
      </v-row>
      <v-row justify="center">
        <h2 class="text-h6 text-sm-h5 text-md-h4">CÁC MÓN ÁN, XÀO MÌ, CHÈ</h2>
      </v-row>
      <v-card v-for="notice in notices" :key="notice.id">
        <v-card-title class="headline"> {{ notice.title }} </v-card-title>
        <!-- Html only comes from cms that can only be edited by administrator -->
        <!-- eslint-disable-next-line -->
        <v-card-text v-html="notice.content" />
      </v-card>

      <v-row justify="center">
        <h1>Order Online</h1>
      </v-row>
      <v-row justify="center">
        <a
          class="zoom ma-2"
          href="https://www.doordash.com/business/140276/?utm_source=partner-link&utm_medium=website&utm_campaign=140276&utm_content=red-l"
          target="_blank"
          alt="Order Food Delivery with DoorDash"
          title="Order Food Delivery with DoorDash"
          style="text-decoration: none"
          rel="noopener"
          ><div
            style="
              position: relative;
              width: 289px;
              height: 59px;
              margin: 0px auto;
              overflow: hidden;
              background-image: url(https://cdn.doordash.com/media/button/button_red_l.svg);
              color: transparent;
            "
          >
            Order Food Delivery with DoorDash
          </div></a
        >
        <a
          class="zoom ma-2"
          href="https://postmates.com/merchant/zien-hong-portland"
          target="_blank"
          alt="Order Food Deliver with Postmates"
          title="Order Food Deliver with Postmates"
          rel="noopener"
        >
          <img
            src="https://postmates.com/assets/badges/pm-black-order-2.png"
            width="230px"
            alt="Order delivery from Postmates"
          />
        </a>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  async asyncData({ $strapi }) {
    return {
      notices: await $strapi.find('notices').then((res) => {
        res.forEach((notice) => {
          notice.content = md.render(notice.content)
        })
        return res
      }),
    }
  },
}
</script>

<style scoped>
.zoom {
  transition: transform 0.2s;
}
.zoom:hover {
  transform: scale(1.1);
}
</style>
