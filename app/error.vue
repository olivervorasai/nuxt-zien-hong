<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{
    error: NuxtError;
}>();

const message = computed(() =>
    props.error?.statusCode === 404 ? '404 Not Found' : 'An error occurred',
);

useHead({ title: () => message.value });
</script>

<template>
    <div class="error-page">
        <NuxtLayout>
            <div class="container error-content text-center">
                <h1>{{ message }}</h1>
                <NuxtLink to="/">Home page</NuxtLink>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped>
.error-content {
    padding-top: 4rem;
    padding-bottom: 4rem;
}
</style>
