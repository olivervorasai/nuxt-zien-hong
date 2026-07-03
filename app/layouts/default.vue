<template>
    <div class="app-shell">
        <AppHeader />
        <main>
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<style scoped>
.app-shell {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1 0 auto;
}
</style>
