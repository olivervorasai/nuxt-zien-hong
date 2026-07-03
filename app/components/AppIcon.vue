<script setup lang="ts">
withDefaults(
    defineProps<{
        path: string;
        size?: number | string;
    }>(),
    { size: 24 },
);
</script>

<template>
    <svg
        class="app-icon"
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        focusable="false"
    >
        <path :d="path" fill="currentColor" />
    </svg>
</template>

<style scoped>
.app-icon {
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0;
}
</style>
