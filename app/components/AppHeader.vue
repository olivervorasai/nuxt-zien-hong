<script setup lang="ts">
const drawer = ref(false);
const expanded = ref<string | null>('Menu');

// Close the drawer when navigating between routes.
const route = useRoute();
watch(
    () => route.fullPath,
    () => {
        drawer.value = false;
    },
);
</script>

<template>
    <header>
        <div class="app-bar">
            <button
                class="nav-toggle"
                type="button"
                aria-label="Show side navigation"
                @click="drawer = true"
            >
                <AppIcon :path="iconMenu" />
            </button>

            <NuxtLink to="/" class="brand">{{
                utilBusinessInfo.name.toUpperCase()
            }}</NuxtLink>

            <nav class="app-bar-nav">
                <NuxtLink
                    v-for="item in utilNav"
                    :key="item.title"
                    :to="item.to"
                    class="nav-link"
                    :aria-label="item.title"
                >
                    <AppIcon :path="item.icon" :size="20" />
                    <span>{{ item.title }}</span>
                </NuxtLink>
            </nav>

            <div class="address">
                <span>{{ utilBusinessInfo.address_full }}</span>
                <span>{{ utilBusinessInfo.telephone_pretty }}</span>
            </div>
        </div>

        <!-- Mobile navigation drawer -->
        <transition name="drawer">
            <aside v-if="drawer" class="drawer">
                <div class="drawer-header">
                    {{ utilBusinessInfo.name.toUpperCase() }}
                </div>
                <hr />
                <template v-for="item in utilNav" :key="item.title">
                    <div v-if="item.submenu" class="drawer-group">
                        <button
                            class="drawer-item drawer-group-toggle"
                            type="button"
                            @click="
                                expanded =
                                    expanded === item.title ? null : item.title
                            "
                        >
                            <AppIcon :path="item.icon" :size="20" />
                            <span>{{ item.title }}</span>
                            <AppIcon
                                class="chevron"
                                :class="{ open: expanded === item.title }"
                                :path="iconChevronDown"
                                :size="20"
                            />
                        </button>
                        <div
                            v-show="expanded === item.title"
                            class="drawer-submenu"
                        >
                            <NuxtLink
                                v-for="child in item.submenu"
                                :key="child.title"
                                :to="child.to"
                                class="drawer-item drawer-subitem"
                                @click="drawer = false"
                            >
                                {{ child.title }}
                            </NuxtLink>
                        </div>
                    </div>
                    <NuxtLink
                        v-else
                        :to="item.to"
                        class="drawer-item"
                        @click="drawer = false"
                    >
                        <AppIcon :path="item.icon" :size="20" />
                        <span>{{ item.title }}</span>
                    </NuxtLink>
                </template>
            </aside>
        </transition>
        <div v-if="drawer" class="drawer-scrim" @click="drawer = false" />
    </header>
</template>

<style scoped>
.app-bar {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: 12px;
    height: var(--header-height);
    padding: 0 16px;
    background-color: var(--color-primary);
    color: #fff;
}

.nav-toggle {
    /* Shown only on mobile (see media query below). */
    display: none;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: #fff;
    cursor: pointer;
}

.nav-toggle:hover {
    background: rgb(255 255 255 / 12%);
}

.brand {
    /* Left zone: grows equally with .address so the nav stays centered. */
    flex: 1 1 0;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
}

.brand:hover {
    text-decoration: none;
}

.app-bar-nav {
    /* Center zone: natural width, centered between the equal side zones. */
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 4px;
}

.nav-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: var(--header-height);
    padding: 0 16px;
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-decoration: none;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
    background: rgb(255 255 255 / 12%);
    text-decoration: none;
}

.address {
    /* Right zone: mirrors .brand so the nav is centered in the bar. */
    flex: 1 1 0;
    text-align: right;
    font-size: 0.75rem;
    line-height: 1.3;
}

.address > span {
    display: block;
}

/* Mobile: swap the desktop nav for the hamburger toggle. */
@media (width < 600px) {
    .nav-toggle {
        display: inline-flex;
    }

    .app-bar-nav {
        display: none;
    }

    .address {
        flex: 0 1 auto;
        max-width: 10em;
    }
}

/* ---- Drawer ---- */
.drawer-scrim {
    position: fixed;
    inset: 0;
    z-index: 29;
    background: rgb(0 0 0 / 50%);
}

.drawer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    width: 256px;
    max-width: 80vw;
    height: 100%;
    overflow-y: auto;
    background-color: var(--color-primary);
    color: #fff;
}

.drawer-header {
    padding: 18px 16px;
    font-size: 1.25rem;
    font-weight: 500;
}

.drawer hr {
    border: none;
    border-top: 1px solid rgb(255 255 255 / 30%);
    margin: 0;
}

.drawer-item {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 14px 16px;
    border: none;
    background: transparent;
    color: #fff;
    font-family: inherit;
    font-size: 1rem;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
}

.drawer-item:hover {
    background: rgb(255 255 255 / 12%);
    text-decoration: none;
}

.drawer-group-toggle .chevron {
    margin-left: auto;
    transition: transform 0.2s;
}

.drawer-group-toggle .chevron.open {
    transform: rotate(180deg);
}

.drawer-subitem {
    padding-left: 56px;
    font-size: 0.95rem;
}

.drawer-enter-active,
.drawer-leave-active {
    transition: transform 0.2s ease;
}

.drawer-enter-from,
.drawer-leave-to {
    transform: translateX(-100%);
}
</style>
