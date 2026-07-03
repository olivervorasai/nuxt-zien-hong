<script setup lang="ts">
import type { Category, MenuItem } from '~/utils/siteData';

defineProps<{
    categories: Category[];
}>();

function otherLangName(item: MenuItem): string {
    return [item.chinese_name, item.vietnamese_name]
        .filter(Boolean)
        .join(' | ');
}
</script>

<template>
    <div class="menu-listing container">
        <section
            v-for="category in categories"
            :key="category.id"
            class="category"
        >
            <span :id="category.slug ?? undefined" class="anchor" />
            <h1 class="text-center">{{ category.name }}</h1>
            <!-- HTML comes from CMS content that can only be edited by an administrator -->
            <!-- eslint-disable vue/no-v-html -->
            <div
                v-if="category.html"
                class="category-html text-center"
                v-html="category.html"
            />
            <!-- eslint-enable vue/no-v-html -->

            <div class="menu-grid">
                <article
                    v-for="item in category.menu_items"
                    :key="item.id"
                    class="card menu-card"
                >
                    <div class="menu-card-body">
                        <h2 class="item-name">{{ item.name }}</h2>
                        <p v-if="otherLangName(item)" class="item-other-lang">
                            {{ otherLangName(item) }}
                        </p>
                        <p v-if="item.description" class="item-description">
                            {{ item.description }}
                        </p>
                    </div>

                    <div class="item-avatar">
                        <MenuDialog :item="item" />
                    </div>

                    <div class="item-price">
                        <span v-if="item.base_price === 0">M.P.</span>
                        <span v-else-if="category.name === 'Luncheon'">
                            ${{ item.special_price?.toFixed(2) }}
                        </span>
                        <span v-else>
                            ${{ item.base_price.toFixed(2) }}
                            <span v-if="item.large_price">
                                / ${{ item.large_price.toFixed(2) }}
                            </span>
                        </span>
                    </div>

                    <div class="item-modifiers">
                        <AppIcon
                            v-if="item.spicy"
                            class="item-spicy"
                            :path="iconChili"
                            :size="24"
                        />
                        <span v-if="item.gluten_free" class="item-gluten"
                            >Gluten Free</span
                        >
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>

<style scoped>
.menu-listing {
    padding-bottom: 1rem;
}

.category {
    margin-top: 2rem;
}

.anchor {
    display: block;
    position: relative;
    top: -150px;
    visibility: hidden;
}

.category-html {
    margin-bottom: 0.5rem;
}

.category-html :deep(h4) {
    margin: 0.25rem 0;
}

.menu-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
}

@media (width >= 1264px) {
    .menu-grid {
        grid-template-columns: 1fr 1fr;
    }
}

.menu-card {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
}

.menu-card-body {
    flex: 1 1 auto;
    padding: 16px;
    min-width: 0;
}

.item-name {
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.4;
}

.item-other-lang {
    margin: 0;
    color: var(--color-text-muted);
    font-size: 0.875rem;
}

.item-description {
    margin: 0;
    color: var(--color-text-muted);
    font-size: 0.875rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
}

.item-avatar {
    flex: 0 0 auto;
    align-self: flex-end;
    width: auto;
    min-width: 150px;
    max-width: 250px;
    height: 125px;
}

.item-price {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 0 4px;
    border-radius: 4px;
    font-weight: 700;
    pointer-events: none;
    background-color: rgb(255 255 255 / 85%);
}

.item-modifiers {
    position: absolute;
    bottom: 16px;
    right: 16px;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 4px;
    pointer-events: none;
}

.item-spicy {
    padding: 2px;
    border-radius: 4px;
    color: var(--color-primary);
    background-color: #fff;
}

.item-gluten {
    padding: 0.25em;
    border-radius: 4px;
    color: #fff;
    font-weight: 700;
    font-size: 0.75rem;
    background-color: rgb(76 175 80);
}

@media (width <= 960px) {
    .item-name {
        line-height: 1.2;
        padding-bottom: 0;
    }

    .item-other-lang {
        display: none;
    }

    .item-description {
        -webkit-line-clamp: 3;
        line-clamp: 3;
    }

    .item-avatar {
        max-width: 150px;
    }
}
</style>
