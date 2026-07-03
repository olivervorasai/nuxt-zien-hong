<script setup lang="ts">
const filteredCategories = computed(() =>
    utilCategories.filter(
        (category) => category.name.toLowerCase() !== 'luncheon',
    ),
);

useHead({
    title: 'Main Menu',
    meta: [
        { name: 'description', content: 'Main menu of Zien Hong restaurant.' },
    ],
});
</script>

<template>
    <MenuListing :categories="filteredCategories" />
</template>
