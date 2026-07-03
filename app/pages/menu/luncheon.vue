<script setup lang="ts">
const filteredCategories = computed(() =>
    utilCategories.filter(
        (category) => category.name.toLowerCase() === 'luncheon',
    ),
);

useHead({
    title: 'Lunch Special',
    meta: [
        {
            name: 'description',
            content: 'Lunch special menu for Zien Hong restaurant.',
        },
    ],
});
</script>

<template>
    <MenuListing :categories="filteredCategories" />
</template>
