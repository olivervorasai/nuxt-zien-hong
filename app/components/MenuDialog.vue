<script setup lang="ts">
import type { MenuItem } from '~/utils/siteData';

const props = defineProps<{
    item: MenuItem;
}>();

const open = ref(false);

const srcset = computed(() => {
    const f = props.item.image?.formats;
    if (!f) return undefined;
    return [
        f.small ? `${f.small.url} 480w` : '',
        f.medium ? `${f.medium.url} 800w` : '',
        f.large ? `${f.large.url} 1000w` : '',
    ]
        .filter(Boolean)
        .join(', ');
});

// Lock body scroll while the dialog is open.
watch(open, (isOpen) => {
    if (import.meta.client) {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
});
onUnmounted(() => {
    if (import.meta.client) document.body.style.overflow = '';
});
</script>

<template>
    <div v-if="item.image" class="menu-dialog">
        <button
            class="thumb-button"
            type="button"
            aria-label="Enlarge image"
            @click="open = true"
        >
            <img
                class="thumb"
                :srcset="srcset"
                sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1000px"
                :src="item.image.formats.small?.url"
                :alt="item.name"
                loading="lazy"
            />
            <span class="magnify">
                <AppIcon :path="iconMagnify" :size="32" />
            </span>
        </button>

        <Teleport to="body">
            <transition name="fade">
                <div v-if="open" class="dialog-scrim" @click="open = false">
                    <div class="dialog-card" @click.stop>
                        <img
                            class="dialog-img"
                            :srcset="srcset"
                            sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1000px"
                            :src="item.image.formats.small?.url"
                            :alt="item.name"
                        />
                        <p class="dialog-caption">{{ item.name }}</p>
                    </div>
                </div>
            </transition>
        </Teleport>
    </div>
</template>

<style scoped>
.menu-dialog,
.thumb-button {
    width: 100%;
    height: 100%;
}

.thumb-button {
    position: relative;
    display: block;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
}

.thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.magnify {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: rgb(0 0 0 / 25%);
    opacity: 0;
    transition: opacity 0.2s;
}

.thumb-button:hover .magnify,
.thumb-button:focus-visible .magnify {
    opacity: 1;
}

.dialog-scrim {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgb(0 0 0 / 60%);
}

.dialog-card {
    max-width: min(1000px, 95vw);
    max-height: 95vh;
    overflow: auto;
    background: var(--color-surface);
    border-radius: 4px;
}

.dialog-img {
    width: 100%;
    height: auto;
}

.dialog-caption {
    margin: 0;
    padding: 16px;
    text-align: center;
    font-weight: 700;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
