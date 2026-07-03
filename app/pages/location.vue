<script setup lang="ts">
const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.489094229306!2d-122.6107825842012!3d45.540485836370564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a12f3efcb58f%3A0xdd04b30546b713e2!2sZien%20Hong!5e0!3m2!1sen!2sus!4v1602826806147!5m2!1sen!2sus';

useHead({
    title: 'Location',
    meta: [
        {
            name: 'description',
            content: 'Location information for Zien Hong restaurant.',
        },
    ],
});
</script>

<template>
    <div class="container location">
        <div class="text-center">
            <h1>Hours &amp; Location</h1>
        </div>

        <div class="text-center hours">
            <p class="big">Open Everyday</p>
            <p class="big">
                {{ utilBusinessInfo.openHour }} -
                {{ utilBusinessInfo.closeHour }}
            </p>
            <p class="med">Dine-in until 10 PM</p>
            <p class="big strong spaced">
                <a
                    href="https://goo.gl/maps/rEanfSNmhZtGz42J9"
                    target="_blank"
                    rel="noopener"
                >
                    {{ utilBusinessInfo.address_full }}
                </a>
            </p>
            <p class="big strong">
                <a :href="'tel:' + utilBusinessInfo.telephone">{{
                    utilBusinessInfo.telephone_pretty
                }}</a>
            </p>
        </div>

        <div class="map-wrap">
            <iframe
                class="map"
                :src="mapSrc"
                title="Map to Zien Hong"
                loading="lazy"
            />
        </div>
    </div>
</template>

<style scoped>
.location {
    margin-top: 24px;
}

.hours {
    margin: 24px 0 48px;
}

.hours p {
    margin: 0;
}

.big {
    font-size: 1.5rem;
}

.med {
    font-size: 1.25rem;
}

.strong {
    font-weight: 700;
}

.spaced {
    margin-top: 24px;
}

.map-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
}

.map {
    width: 100%;
    border: 0;
    background-color: lightgray;
}

@media (width <= 960px) {
    .map {
        height: 50vh;
    }
}

@media (width >= 961px) {
    .map {
        height: 80vh;
    }
}
</style>
