export const PropertyType = {
    BUY: { value: 'BUY', title: 'خرید' },
    RENT: { value: 'RENT', title: 'رهن و اجاره' },
    SELL: { value: 'SELL', title: 'فروش' }
}

export enum CategorySpecialField {
    "NUMBER" = "NUMBER",
    "RANGE" = "RANGE",
    "BOOLEAN" = "BOOLEAN",
    "STRING" = "STRING",
    "ONESELECTRANGE" = 'ONESELECTRANGE',
    "ONEBUTTON" = 'ONEBUTTON',

}

export enum FilterBaseType {
    "STRING" = 'string',
    "NUMBER" = 'number',
    "BOOLEAN" = 'boolean'
}

export enum PermissionBackendRoutes {
    PRODUCT_CREATE = "create_product",
    PRODUCT_READ = "read_product",
    PRODUCT_UPDATE = "update_product",
    PRODUCT_DELETE = "delete_product",


    BLOG_CREATE = "create_blog",
    BLOG_READ = "read_blog",
    BLOG_UPDATE = "update_blog",
    BLOG_DELETE = "delete_blog",

    ROLE_CREATE = 'create_role',
    ROLE_READ = 'read_role',
    ROLE_UPDATE = 'update_role',
    ROLE_DELETE = 'delete_role',


    USER_CREATE = 'create_user',
    USER_READ = 'read_user',
    USER_UPDATE = 'update_user',
    USER_DELETE = 'delete_user',


    LOCATIONS_CREATE = 'create_locations',
    LOCATIONS_READ = 'read_locations',
    LOCATIONS_UPDATE = 'update_locations',
    LOCATIONS_DELETE = 'delete_locations',


    
    SUBLOCATIONS_CREATE = 'create_sublocations',
    SUBLOCATIONS_READ = 'read_sublocations',
    SUBLOCATIONS_UPDATE = 'update_sublocations',
    SUBLOCATIONS_DELETE = 'delete_sublocations',


    TAG_CREATE = 'create_tag',
    TAG_READ = 'read_tag',
    TAG_UPDATE = 'update_tag',
    TAG_DELETE = 'delete_tag',


    CATEGORY_CREATE = 'create_category',
    CATEGORY_READ = 'read_category',
    CATEGORY_UPDATE = 'update_category',
    CATEGORY_DELETE = 'delete_category',

    SUBCATEGORY_CREATE = 'create_subcategory',
    SUBCATEGORY_READ = 'read_subcategory',
    SUBCATEGORY_UPDATE = 'update_subcategory',
    SUBCATEGORY_DELETE = 'delete_subcategory',



    FILTER_CREATE = 'create_filter',
    FILTER_READ = 'read_filter',
    FILTER_UPDATE = 'update_filter',
    FILTER_DELETE = 'delete_filter',

    
    SUGGEST_CREATE = 'create_suggest',
    SUGGEST_READ = 'read_suggest',
    SUGGEST_UPDATE = 'update_suggest',
    SUGGEST_DELETE = 'delete_suggest',



    ITEM_CREATE = 'create_item',
    ITEM_READ = 'read_item',
    ITEM_UPDATE = 'update_item',
    ITEM_DELETE = 'delete_item',


    PARTICIPATION_CREATE = 'create_participation',
    PARTICIPATION_READ = 'read_participation',
    PARTICIPATION_UPDATE = 'update_participation',
    PARTICIPATION_DELETE = 'delete_participation',

    BUYORSELL_CREATE = 'create_saleOrBuyProduct',
    BUYORSELL_READ = 'read_saleOrBuyProduct',
    BUYORSELL_UPDATE = 'update_saleOrBuyProduct',
    BUYORSELL_DELETE = 'delete_saleOrBuyProduct',


}