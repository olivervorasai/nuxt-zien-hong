<template>
    <div class="container menu-page">
        <div class="menu-toggle">
            <NuxtLink to="/menu" class="toggle-btn" exact-active-class="active"
                >Menu</NuxtLink
            >
            <NuxtLink
                to="/menu/luncheon"
                class="toggle-btn"
                exact-active-class="active"
            >
                Lunch Special
            </NuxtLink>
        </div>

        <NuxtPage />

        <div class="menu-notes">
            <p class="note">
                <AppIcon :path="iconChili" :size="20" /> Indicates Spicy Items
            </p>
            <p class="note">Menu uses imitation crab meat.</p>
        </div>
    </div>
</template>

<style scoped>
.menu-page {
    margin-top: 48px;
}

.menu-toggle {
    display: flex;
    justify-content: center;
}

.toggle-btn {
    padding: 8px 16px;
    border: 1px solid var(--color-accent);
    color: var(--color-accent);
    background: transparent;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    text-decoration: none;
}

.toggle-btn:hover {
    text-decoration: none;
}

.toggle-btn:first-child {
    border-right: none;
}

.toggle-btn.active {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
    color: #fff;
}

.menu-notes {
    margin: 24px 0;
    text-align: center;
}

.note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin: 4px 0;
    color: var(--color-primary);
    font-weight: 700;
}
</style>
