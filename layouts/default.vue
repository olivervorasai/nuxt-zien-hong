<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      disable-resize-watcher
      color="red"
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title white--text">
              {{ $store.state.business_info.name.toUpperCase() }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <template v-for="item in items">
          <v-list-group
            v-if="item.submenu"
            :key="item.title"
            v-model="item.active"
            color="white"
            no-action
          >
            <v-icon
              slot="prependIcon"
              color="white"
              v-text="item.icon"
            ></v-icon>
            <v-icon
              slot="appendIcon"
              color="white"
              v-text="mdiChevronDown"
            ></v-icon>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  class="white--text"
                  v-text="item.title"
                ></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="child in item.submenu"
              :key="child.title"
              :to="child.to"
              router
              exact
            >
              <v-list-item-content>
                <v-list-item-title
                  class="white--text"
                  v-text="child.title"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.title" :to="item.to" router exact>
            <v-list-item-icon>
              <v-icon color="white" v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text" v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </template>
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
          <span class="white--text">{{
            $store.state.business_info.name.toUpperCase()
          }}</span>
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
        <span class="text-right text-caption white--text">{{
          $store.state.business_info.address_full
        }}</span>
        <span class="text-right text-caption white--text">{{
          $store.state.business_info.telephone_pretty
        }}</span>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <CompanyFooter :links="items" />
  </v-app>
</template>

<script>
import {
  mdiHome,
  mdiNoodles,
  mdiMap,
  mdiMenu,
  // mdiEmail,
  mdiChevronDown,
} from '@mdi/js'

export default {
  data() {
    return {
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
          active: true,
          submenu: this.generateSubmenu(),
        },
        {
          icon: mdiMap,
          title: 'Location',
          to: '/location',
        },
        /*
        {
          icon: mdiEmail,
          title: 'Contact',
          to: '/contact',
        },
        */
      ],
      mdiMenu,
      mdiChevronDown,
    }
  },
  methods: {
    generateSubmenu() {
      const categories = this.$store.state.categories
      const submenu = []
      categories.forEach((element) => {
        if (element.name.toLowerCase() === 'luncheon') {
          submenu.push({
            title: element.name,
            to: `/menu/${element.slug}`,
          })
        } else {
          submenu.push({
            title: element.name,
            to: `/menu#${element.slug}`,
          })
        }
      })
      return submenu
    },
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
