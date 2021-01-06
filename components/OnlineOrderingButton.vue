<template>
  <a
    class="zoom ma-2"
    :href="hrefLink"
    target="_blank"
    :alt="linkAltText"
    :title="linkAltText"
    rel="noopener noreferrer"
  >
    <v-img
      :src="imgLink"
      :max-height="imgHeight"
      :max-width="imgWidth"
      :alt="imgAltText"
      :class="imgClasses"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </a>
</template>

<script>
export default {
  props: {
    hrefLink: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    imgLink: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    imgHeight: {
      type: String,
      required: true,
      default() {
        return '0px'
      },
    },
    imgWidth: {
      type: String,
      required: true,
      default() {
        return '0px'
      },
    },
    imgAltText: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    imgClasses: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
    linkAltText: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
  },
}
</script>

<style scoped lang="scss">
.zoom {
  display: inline-block;
  transition: transform 0.2s;
}
.zoom:hover {
  transform: scale(1.1);
}
</style>
