import { AccessType } from "types";

export const accesses: AccessType[] = [
    {
        route: 'base/cities',
        title: 'مدیریت شهرها',
        isMenuItem: true,
        hint: 'با این دسترسی امکان ویرایش/اضافه/حذف شهر ها به کاربر داده می شود.'
    },
    {
        route: 'base/categories',
        title: 'مدیریت دسته بندی ها',
        isMenuItem: true,
        hint: 'با این دسترسی امکان ویرایش/اضافه/حذف دسته بندی ها به کاربر داده می شود.'
    },
    {
        route: 'base/labels',
        title: 'مدیریت برچسب ها',
        isMenuItem: true,
        hint: 'با این دسترسی امکان ویرایش/اضافه/حذف برچسب ها به کاربر داده می شود.'
    },
    {
        route: 'base/advisers',
        title: 'مدیریت مشاوران',
        isMenuItem: true,
        hint: 'با این دسترسی امکان ویرایش/اضافه/حذف مشاورها به کاربر داده می شود.'
    },
    {
        route: 'base/users',
        title: 'مدیریت کاربران',
        isMenuItem: true,
        hint: 'با این دسترسی امکان ویرایش/اضافه/حذف کاربران به کاربر داده می شود.'
    },
    {
        route: 'base/info',
        title: 'مدیریت اطلاعات دپارتمان',
        isMenuItem:true,
        hint: 'با این دسترسی امکان ویرایش اطلاعات درباره ما ، تماس با و ... به کاربر داده می شود.'
    },
    {
        route: 'property/list',
        title: 'مدیریت آگهی ها',
        isMenuItem:true,
        hint: 'با این دسترسی امکان مشاهده/ویرایش/حذف/غیرفعال سازی/نردبان آگهی ها به کاربر داده می شود.'
    },
    {
        route: 'property/mylist',
        title: 'مدیریت آگهی های من',
        isMenuItem:true,
        hint: 'با این دسترسی امکان مشاهده/ویرایش/حذف/غیرفعال سازی/نردبان آگهی های خودکاربر به کاربر داده می شود.'
    },
    {
        route: 'property/requests',
        title: 'مدیریت درخواست های خرید/فروش',
        isMenuItem:true,
        hint: 'با این دسترسی امکان مشاهده درخواست های خرید/فروش به کاربر داده می شود.'
    },
    {
        route: 'property/corp',
        title: 'مدیریت پروژه های مشارکت',
        isMenuItem:true,
        hint: 'با این دسترسی امکان مشاهده/ویرایش/حذف/غیرفعال سازی/نردبان پروژه های مشارکت به کاربر داده می شود.'
    },
    {
        route: 'blog/list',
        title: 'مدیریت مقالات',
        isMenuItem:true,
        hint: 'با این دسترسی امکان مشاهده/ویرایش/حذف/غیرفعال سازی/نردبان پروژه های مشارکت به کاربر داده می شود.'
    }
]