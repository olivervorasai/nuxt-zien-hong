<script setup lang="ts">
import restaurantImg from '~/assets/IMG_5526.jpg';
import parallaxImg from '~/assets/parallax-tea.jpg';

const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Restaurant',
    image: [restaurantImg],
    '@id': utilBusinessInfo.url,
    name: utilBusinessInfo.name,
    address: {
        '@type': 'PostalAddress',
        streetAddress: utilBusinessInfo.address_street,
        addressLocality: utilBusinessInfo.address_locality,
        addressRegion: utilBusinessInfo.address_region,
        postalCode: utilBusinessInfo.postal_code,
        addressCountry: utilBusinessInfo.address_country,
    },
    url: utilBusinessInfo.url,
    telephone: utilBusinessInfo.telephone,
    servesCuisine: utilBusinessInfo.cuisine_type,
    priceRange: utilBusinessInfo.price_range,
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ],
            opens: utilBusinessInfo.openHourSchema,
            closes: utilBusinessInfo.closeHourSchema,
        },
    ],
    menu: utilBusinessInfo.url + 'menu',
    acceptsReservations: utilBusinessInfo.reservations,
};

useHead({
    title: 'Home',
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(structuredData),
        },
    ],
});
</script>

<template>
    <div class="home">
        <!-- Parallax hero (large screens) -->
        <section
            class="hero-parallax"
            :style="{ backgroundImage: `url(${parallaxImg})` }"
        >
            <div class="hero-box">
                <HomeHero :business-info="utilBusinessInfo" dark />
            </div>
        </section>

        <!-- Plain hero (small / medium screens) -->
        <section class="hero-plain">
            <HomeHero :business-info="utilBusinessInfo" />
        </section>

        <!-- Notices -->
        <div class="container notices">
            <article
                v-for="notice in utilNotices"
                :key="notice.id"
                class="card notice"
            >
                <h2 class="notice-title">{{ notice.title }}</h2>
                <!-- HTML comes from CMS content that can only be edited by an administrator -->
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div class="notice-body" v-html="notice.html" />
            </article>
        </div>

        <!-- Online ordering -->
        <div class="container ordering">
            <h1>Order Online</h1>
            <OnlineOrderingButton
                href-link="https://order.online/business/zien-hong-140276"
                img-link="https://cdn.doordash.com/media/button/button_red_l.svg"
                img-height="59px"
                img-width="289px"
                img-alt-text="Order Food Delivery with DoorDash"
                link-alt-text="Order Food Delivery with DoorDash"
            />
        </div>
    </div>
</template>

<style scoped>
.hero-parallax {
    /* Shown only on large screens (see media query below). */
    display: none;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    padding: 48px 16px;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.hero-box {
    background-color: rgb(255 255 255 / 85%);
    border-radius: 4px;
    padding: 24px;
    max-width: 720px;
    width: 100%;
}

.hero-plain {
    padding: 24px 16px;
}

/* Large screens get the parallax hero; smaller screens get the plain one. */
@media (width >= 1264px) {
    .hero-parallax {
        display: flex;
    }

    .hero-plain {
        display: none;
    }
}

.notices {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    margin-top: 48px;
}

.notice {
    width: 100%;
    max-width: 600px;
    padding: 16px;
}

.notice-title {
    font-size: 1.5rem;
    margin-bottom: 8px;
}

.notice-body :deep(p) {
    margin: 0 0 0.5rem;
}

.ordering {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 48px auto;
}

.ordering h1 {
    margin-bottom: 16px;
}
</style>
