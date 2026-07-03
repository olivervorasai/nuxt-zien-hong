import businessInfoData from '~/data/business-info.json';
import categoriesData from '~/data/categories.json';
import noticesData from '~/data/notices.json';

export interface ImageFormat {
    url: string;
    width: number;
    height: number;
}

export interface MenuImage {
    url: string;
    width: number;
    height: number;
    formats: {
        thumbnail?: ImageFormat;
        small?: ImageFormat;
        medium?: ImageFormat;
        large?: ImageFormat;
    };
}

export interface MenuItem {
    id: number;
    name: string;
    chinese_name: string | null;
    vietnamese_name: string | null;
    description: string | null;
    base_price: number;
    special_price: number | null;
    large_price: number | null;
    spicy: boolean;
    gluten_free: boolean;
    image: MenuImage | null;
}

export interface Category {
    id: number;
    name: string;
    slug: string | null;
    html: string | null;
    menu_items: MenuItem[];
}

export interface Notice {
    id: number;
    active: boolean;
    title: string;
    html: string;
}

export interface BusinessInfo {
    name: string;
    address_street: string;
    address_locality: string;
    address_region: string;
    address_country: string;
    postal_code: number;
    url: string;
    telephone: string;
    telephone_pretty: string;
    open_hour: string;
    close_hour: string;
    business_type: string;
    cuisine_type: string;
    price_range: string;
    menu: string;
    reservations: boolean;
    vietnamese_name: string;
    chinese_subtitle: string;
    english_subtitle: string;
    vietnamese_subtitle: string;
    address_full: string;
    /** Display string, e.g. "12 PM". */
    openHour: string;
    /** Display string, e.g. "11 PM". */
    closeHour: string;
    /** schema.org-friendly 24h string, e.g. "12:00". */
    openHourSchema: string;
    closeHourSchema: string;
}

// Turn a Strapi time value ("12:00:00.000") into a "12 PM" display string.
function displayHour(time: string): string {
    const hour = Number.parseInt(time.slice(0, 2), 10);
    const period = hour < 12 ? 'AM' : 'PM';
    const hour12 = hour % 12 || 12;
    return `${hour12} ${period}`;
}

// "12:00:00.000" -> "12:00" (schema.org openingHours format)
function schemaHour(time: string): string {
    return time.slice(0, 5);
}

const raw = businessInfoData as Omit<
    BusinessInfo,
    'openHour' | 'closeHour' | 'openHourSchema' | 'closeHourSchema'
>;

// Static site content
export const utilBusinessInfo: BusinessInfo = {
    ...raw,
    openHour: displayHour(raw.open_hour),
    closeHour: displayHour(raw.close_hour),
    openHourSchema: schemaHour(raw.open_hour),
    closeHourSchema: schemaHour(raw.close_hour),
};

// Sort each category's items by name (numeric-aware, e.g. "S2" before "S10").
export const utilCategories: Category[] = (categoriesData as Category[]).map(
    (category) => ({
        ...category,
        menu_items: [...category.menu_items].sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { numeric: true }),
        ),
    }),
);

// Only active notices, newest first.
export const utilNotices: Notice[] = (noticesData as Notice[])
    .filter((notice) => notice.active)
    .sort((a, b) => b.id - a.id);
