import { PermissionBackendRoutes } from "enums";

export const accessPairs: Array<{ frontRoute: string, permissionsAction: Array<keyof typeof PermissionBackendRoutes> }> = [

    {
        frontRoute: 'base/cities',
        permissionsAction: ['LOCATIONS_CREATE', 'LOCATIONS_UPDATE']
    }
    ,
    {
        frontRoute: 'base/categories',
        permissionsAction: ['CATEGORY_CREATE', 'CATEGORY_UPDATE']
    },
    {
        frontRoute: 'base/tags',
        permissionsAction: ['TAG_CREATE', 'TAG_UPDATE', 'TAG_READ']
    },
    {
        frontRoute:'base/advisers',
        permissionsAction:['USER_CREATE' , 'USER_UPDATE']
    }
    ,
    {
        frontRoute:'base/users',
        permissionsAction:['USER_CREATE' ,'USER_UPDATE']
    },
    {
        //Todo
        frontRoute:'base/permissions',
        permissionsAction:['PRODUCT_READ']
    },
    {
        frontRoute:'property/list',
        permissionsAction:['PRODUCT_CREATE' , 'PRODUCT_UPDATE']
    }
    ,
    {
        frontRoute:'property/requests',
        permissionsAction:['PRODUCT_CREATE']
    }

    ,
    {
        frontRoute:'property/corp',
        permissionsAction:['PRODUCT_READ']
    }
    ,
    {
        frontRoute:'blog/list',
        permissionsAction:['BLOG_CREATE' , 'BLOG_UPDATE']
    }
]