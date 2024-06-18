import { PermissionBackendRoutes } from "enums";

export const accessPairs: Array<{ frontRoute: string, permissionsAction: Array<keyof typeof PermissionBackendRoutes> }> = [
    {
        frontRoute: 'profile',
        permissionsAction: []
    }
    ,
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
        frontRoute: 'base/advisers',
        permissionsAction: ['USER_CREATE', 'USER_UPDATE']
    }
    ,
    {
        frontRoute: 'base/users',
        permissionsAction: ['USER_CREATE', 'USER_UPDATE']
    },
    {
        //Todo
        frontRoute: 'base/permissions',
        permissionsAction: ['ROLE_CREATE','ROLE_DELETE']
    },
    {
        frontRoute: 'property/list',
        permissionsAction: ['PRODUCT_CREATE', 'PRODUCT_UPDATE']
    }
    ,
    {
        frontRoute: 'property/requests',
        permissionsAction: ['BUYORSELL_DELETE', 'BUYORSELL_READ']
    }

    ,
    {
        frontRoute: 'property/participation',
        permissionsAction: ['PARTICIPATION_CREATE', 'PARTICIPATION_UPDATE']
    }
    ,
    {
        frontRoute: 'blog/list',
        permissionsAction: ['BLOG_CREATE', 'BLOG_UPDATE']
    }
]