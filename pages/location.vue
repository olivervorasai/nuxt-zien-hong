<template>
  <v-container>
    <v-row justify="center">
      <h1>Hours &amp; Location</h1>
    </v-row>
    <v-row justify="center">
      <p>
        <a
          href="https://goo.gl/maps/rEanfSNmhZtGz42J9"
          target="_blank"
          rel="noopener"
          >5314 NE Sandy Blvd, Portland, OR 97213</a
        >
      </p>
    </v-row>
    <v-row justify="center">
      <p><a href="tel:503-288-4743">503-288-4743</a></p>
    </v-row>
    <v-row justify="center">
      <p>Everyday: 11am - 11pm</p>
    </v-row>

    <v-row justify="center">
      <v-progress-circular
        v-show="!iframe.loaded"
        indeterminate
        color="red"
        size="250"
        width="10"
      ></v-progress-circular>
    </v-row>

    <transition name="fade">
      <iframe
        v-show="iframe.loaded"
        :src="iframe.src"
        frameborder="0"
        allowfullscreen="false"
        aria-hidden="false"
        tabindex="0"
        @load="iframe.loaded = true"
      ></iframe>
    </transition>
  </v-container>
</template>

<script>
export default {
  name: 'Location',
  data() {
    return {
      iframe: {
        src:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.489094229306!2d-122.6107825842012!3d45.540485836370564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a12f3efcb58f%3A0xdd04b30546b713e2!2sZien%20Hong!5e0!3m2!1sen!2sus!4v1602826806147!5m2!1sen!2sus',
        loaded: false,
      },
    }
  },
}
</script>

<style scoped lang="scss">
iframe {
  background-color: lightgray;
  width: 100%;

  @media screen and (max-width: 960px) {
    height: 50vh;
  }
  @media screen and (min-width: 961px) {
    height: 80vh;
  }
  border: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
