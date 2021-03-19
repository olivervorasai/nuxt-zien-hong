<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" align="center" class="hidden-md-and-down">
      <v-col cols="12" class="pa-0">
        <v-parallax :src="require('@/assets/parallax-tea.jpg')">
          <v-row align="center" justify="center">
            <v-col
              class="text-center hero-box rounded pa-6"
              cols="12"
              sm="12"
              md="8"
              lg="6"
            >
              <div
                class="text-h4 text-sm-h3 text-md-h2 text-center black--text"
              >
                <p class="my-0">
                  {{ $store.state.business_info.vietnamese_name }}
                </p>
              </div>
              <div class="text-subtitle-1 text-sm-h6 text-center black--text">
                <p class="my-0">
                  {{ $store.state.business_info.chinese_subtitle }}
                </p>
                <p class="my-0">
                  {{ $store.state.business_info.english_subtitle }}
                </p>
                <p class="my-0">
                  {{ $store.state.business_info.vietnamese_subtitle }}
                </p>
              </div>
              <div
                class="my-6 text-subtitle-1 text-sm-h6 text-center black--text"
              >
                <p class="my-0">Open Everyday</p>
                <p class="my-0">
                  {{ $store.state.business_info.open_hour }} -
                  {{ $store.state.business_info.close_hour }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      align="center"
      class="hidden-lg-and-up mt-4"
      no-gutters
    >
      <v-col cols="12" sm="8" md="6">
        <div class="text-h4 text-sm-h3 text-md-h2 text-center">
          <p class="my-0">{{ $store.state.business_info.vietnamese_name }}</p>
        </div>
        <div class="text-subtitle-1 text-sm-h6 text-center">
          <p class="my-0">{{ $store.state.business_info.chinese_subtitle }}</p>
          <p class="my-0">{{ $store.state.business_info.english_subtitle }}</p>
          <p class="my-0">
            {{ $store.state.business_info.vietnamese_subtitle }}
          </p>
        </div>
        <div class="my-6 text-subtitle-1 text-sm-h6 text-center">
          <p class="my-0">Open Everyday</p>
          <p class="my-0">
            {{ $store.state.business_info.open_hour }} -
            {{ $store.state.business_info.close_hour }}
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12" sm="8" md="6">
        <v-card
          v-for="notice in notices"
          :key="notice.slug"
          class="mb-12 mt-lg-12"
        >
          <v-card-title class="headline"> {{ notice.title }} </v-card-title>
          <v-card-text>
            <nuxt-content :document="notice" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-col cols="12" class="text-center">
        <h1>Order Online</h1>
      </v-col>
      <v-col cols="12" class="text-center">
        <OnlineOrderingButton
          href-link="https://www.doordash.com/business/140276/?utm_source=partner-link&utm_medium=website&utm_campaign=140276&utm_content=red-l"
          img-link="https://cdn.doordash.com/media/button/button_red_l.svg"
          img-height="59px"
          img-width="289px"
          img-alt-text="Order Food Delivery with DoorDash"
          link-alt-text="Order Food Delivery with DoorDash"
        />
      </v-col>
      <v-col cols="12" class="text-center">
        <OnlineOrderingButton
          href-link="https://postmates.com/merchant/zien-hong-portland"
          img-link="https://postmates.com/assets/badges/pm-black-order-2.png"
          img-height="61px"
          img-width="230px"
          img-alt-text="Order delivery from Postmates"
          link-alt-text="Order Food Delivery with Postmates"
        />
      </v-col>
      <v-col cols="12" class="text-center">
        <OnlineOrderingButton
          href-link="https://www.grubhub.com/restaurant/zien-hong-5314-ne-sandy-blvd-portland/1766742"
          img-link="https://grhb.me/3eElz4P"
          img-height="115px"
          img-width="230px"
          img-alt-text="Order with Grubhub"
          img-classes="rounded-pill"
          link-alt-text="Order Food Delivery with Grubhub"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const notices = await $content('notice').sortBy('createdAt', 'desc').fetch()

    return { notices }
  },
  data() {
    return {
      structureData: {
        '@context': 'https://schema.org/',
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
      title: 'Home',
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
.hero-box {
  background-color: rgba(255, 255, 255, 0.85);
}
</style>
