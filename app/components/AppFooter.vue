<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
    <footer class="footer">
        <div class="footer-links">
            <NuxtLink
                v-for="link in utilNav"
                :key="link.title"
                :to="link.to"
                class="footer-link"
            >
                {{ link.title }}
            </NuxtLink>
        </div>
        <p class="footer-line">
            {{ utilBusinessInfo.address_street }},
            {{ utilBusinessInfo.address_locality }},
            {{ utilBusinessInfo.address_region }},
            {{ utilBusinessInfo.postal_code }}
        </p>
        <p class="footer-line">{{ utilBusinessInfo.telephone_pretty }}</p>
        <p class="footer-line">Open Everyday</p>
        <p class="footer-line">
            {{ utilBusinessInfo.openHour }} - {{ utilBusinessInfo.closeHour }}
        </p>
        <p class="footer-line">Dine-in until 10 PM</p>
        <p class="footer-line">
            {{ year }} — <strong>Zien Hong Restaurant</strong>
        </p>
    </footer>
</template>

<style scoped>
.footer {
    background-color: var(--color-primary);
    color: #fff;
    text-align: center;
    padding: 16px;
}

.footer-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 16px 0;
}

.footer-link {
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 9999px;
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;
}

.footer-link:hover {
    background: rgb(255 255 255 / 12%);
    text-decoration: none;
}

.footer-line {
    margin: 0;
}
</style>
