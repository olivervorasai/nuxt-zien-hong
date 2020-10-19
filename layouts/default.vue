<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      disable-resize-watcher
      color="red"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title white--text">
            {{ appTitle }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="red" flat app>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon
          color="white"
          aria-label="Show side navigation"
          @click.stop="drawer = !drawer"
        >
          <v-icon>{{ mdiMenu }}</v-icon>
        </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <nuxt-link to="/" tag="span" style="cursor: pointer">
          <span class="white--text">{{ appTitle }}</span>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          class="white--text"
          color="transparent"
          :aria-label="item.title"
          exact
          depressed
          nuxt
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <div class="address">
        <span class="text-right text-caption white--text">{{ address }}</span>
        <span class="text-right text-caption white--text">{{ phoneNum }}</span>
      </div>
    </v-app-bar>
    <v-main>
      <v-container class="mt-6">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mdiHome, mdiNoodles, mdiMap, mdiMenu, mdiEmail } from '@mdi/js'

export default {
  data() {
    return {
      appTitle: 'ZIEN HONG',
      address: '5314 NE Sandy Blvd, Portland, OR 97213',
      phoneNum: '503-288-5743',
      drawer: false,
      items: [
        {
          icon: mdiHome,
          title: 'Home',
          to: '/',
        },
        {
          icon: mdiNoodles,
          title: 'Menu',
          to: '/menu',
        },
        {
          icon: mdiMap,
          title: 'Location',
          to: '/location',
        },
        {
          icon: mdiEmail,
          title: 'Contact',
          to: '/contact',
        },
      ],
      mdiMenu,
    }
  },
}
</script>

<style scoped>
main {
  background-color: #fbfbfc;
}
.address {
  display: block;
  max-width: 10em;
}
.address > span {
  display: block;
}
</style>
