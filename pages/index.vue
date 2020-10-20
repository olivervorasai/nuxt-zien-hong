<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-h4 text-sm-h3 text-md-h2 text-center">
        <p class="my-0">{{ $store.state.business_info.vietnamese_name }}</p>
      </div>
      <div class="text-subtitle-1 text-sm-h6 text-center">
        <p class="my-0">{{ $store.state.business_info.chinese_subtitle }}</p>
        <p class="my-0">{{ $store.state.business_info.english_subtitle }}</p>
        <p class="my-0">{{ $store.state.business_info.vietnamese_subtitle }}</p>
      </div>
      <div class="my-6 text-subtitle-1 text-sm-h6 text-center">
        <p class="my-0">Open Everyday</p>
        <p class="my-0">
          {{ $store.state.business_info.open_hour }} -
          {{ $store.state.business_info.close_hour }}
        </p>
      </div>
      <v-card v-for="notice in notices" :key="notice.id" class="my-12">
        <v-card-title class="headline"> {{ notice.title }} </v-card-title>
        <!-- HTML comes from CMS that can only be edited by administrator -->
        <!-- eslint-disable-next-line -->
        <v-card-text v-html="notice.content" />
      </v-card>
      <div class="text-center">
        <h1>Order Online</h1>
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
      </div>
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
  data() {
    return {
      structureData: {
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        image: [require('@/assets/IMG_5526.jpg')],
        '@id': this.$store.state.business_info.url,
        name: this.$store.state.business_info.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: this.$store.state.business_info.address_street,
          addressLocality: this.$store.state.business_info.address_locality,
          addressRegion: this.$store.state.business_info.address_region,
          postalCode: this.$store.state.business_info.postal_code,
          addressCountry: this.$store.state.business_info.address_country,
        },
        url: this.$store.state.business_info.url,
        telephone: this.$store.state.business_info.telephone,
        servesCuisine: this.$store.state.business_info.cuisine_type,
        priceRange: this.$store.state.business_info.price_range,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: this.$store.state.business_info.open_hour,
            closes: this.$store.state.business_info.close_hour,
          },
        ],
        menu: this.$store.state.business_info.url + 'menu',
        acceptsReservations: this.$store.state.business_info.reservations,
      },
    }
  },
  head() {
    return {
      script: [
        {
          type: 'application/ld+json',
          json: this.structureData,
        },
      ],
    }
  },
}
</script>

<style scoped>
.zoom {
  display: inline-block;
  transition: transform 0.2s;
}
.zoom:hover {
  transform: scale(1.1);
}
</style>
