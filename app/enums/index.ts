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

}