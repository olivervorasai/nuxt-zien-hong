<script setup lang="ts">
import type { BusinessInfo } from '~/utils/siteData';

defineProps<{
    businessInfo: BusinessInfo;
    dark?: boolean;
}>();
</script>

<template>
    <div class="hero text-center" :class="{ 'hero-dark-text': dark }">
        <div class="hero-name">{{ businessInfo.vietnamese_name }}</div>
        <div class="hero-subtitle">
            <p>{{ businessInfo.chinese_subtitle }}</p>
            <p>{{ businessInfo.english_subtitle }}</p>
            <p>{{ businessInfo.vietnamese_subtitle }}</p>
        </div>
        <div class="hero-hours">
            <p>Open Everyday</p>
            <p>{{ businessInfo.openHour }} - {{ businessInfo.closeHour }}</p>
            <p>Dine-in until 10 PM</p>
        </div>
    </div>
</template>

<style scoped>
.hero-dark-text {
    color: #000;
}

.hero-name {
    font-size: clamp(2.125rem, 6vw, 3.75rem);
    font-weight: 300;
    line-height: 1.1;
}

.hero-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
}

.hero-subtitle p {
    margin: 0;
}

.hero-hours {
    margin: 24px 0;
    font-size: clamp(1rem, 2.5vw, 1.25rem);
}

.hero-hours p {
    margin: 0;
}
</style>
