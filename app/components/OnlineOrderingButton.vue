<script setup lang="ts">
withDefaults(
    defineProps<{
        hrefLink: string;
        imgLink: string;
        imgHeight?: string;
        imgWidth?: string;
        imgAltText: string;
        imgClasses?: string;
        linkAltText: string;
    }>(),
    { imgHeight: 'none', imgWidth: 'none', imgClasses: '' },
);
</script>

<template>
    <a
        class="zoom"
        :href="hrefLink"
        target="_blank"
        rel="noopener noreferrer"
        :title="linkAltText"
        :aria-label="linkAltText"
    >
        <img
            :src="imgLink"
            :alt="imgAltText"
            :class="imgClasses"
            :style="{ maxHeight: imgHeight, maxWidth: imgWidth }"
            loading="lazy"
        />
    </a>
</template>

<style scoped>
.zoom {
    display: inline-block;
    margin: 8px;
    transition: transform 0.2s;
}

.zoom:hover {
    transform: scale(1.1);
}

.zoom img {
    height: auto;
}
</style>
