export interface NavChild {
    title: string;
    to: string;
}

export interface NavItem {
    icon: string;
    title: string;
    to: string;
    submenu?: NavChild[];
}

// The Menu item's submenu is generated from the category list.
const submenu: NavChild[] = utilCategories.map((category) =>
    category.name.toLowerCase() === 'luncheon'
        ? { title: category.name, to: `/menu/${category.slug}` }
        : { title: category.name, to: `/menu#${category.slug}` },
);

/** Primary navigation, shared by the header and footer. */
export const utilNav: NavItem[] = [
    { icon: iconHome, title: 'Home', to: '/' },
    { icon: iconNoodles, title: 'Menu', to: '/menu', submenu },
    { icon: iconMap, title: 'Location', to: '/location' },
];
