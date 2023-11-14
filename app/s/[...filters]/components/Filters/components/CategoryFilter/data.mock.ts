import { CategoryType } from "types";

export const categories: CategoryType[] = [
    {
        title: 'زمین',
        enTitle: 'ground',
        id: '1215sdf',
        subCategories: [
            {
                title: 'آپارتمانی',
                enTitle: 'apartments',
                id: 'sfds',
                filters: []
            },
            {
                title: 'ویلایی',
                enTitle: 'vilas',
                id: '1224d5',
                filters: []
            },
            {
                title: 'باغ مسکونی',
                enTitle: 'estategrarden',
                id: 'sdafsdf',
            },
            {
                title: 'تجاری اداری',
                enTitle: 'commercial',
                id: '122sdfsdfsdf45',
            },
            {
                title: 'آموزشی خدماتی',
                enTitle: 'services',
                id: 'sdfsdf',
            }
        ]
    },
    {
        enTitle: 'residential',
        id: 'sdfsdfd',
        title: 'مسکونی',
        subCategories: [
            {
                enTitle: 'apartment',
                id: '1551',
                title: 'آپارتمان'
            },
            {
                enTitle: 'mehr',
                id: 'sdfdsf',
                title: 'مسکن مهر'
            },
            {
                enTitle: 'vila',
                id: 'sdsf',
                title: 'خانه ویلایی'
            }
        ]
    },
    {
        enTitle: 'commericaloffice',
        id: '151',
        title: 'اداری تجاری',
        subCategories: [
            {
                enTitle: 'commerical',
                id: 'sdfsd',
                title: 'تجاری'
            },
            {
                enTitle: 'office',
                id: 'sdfd',
                title: 'اداری'
            },
        ]
    },
    {
        title:'باغ و باغ ویلا',
        enTitle:'garden',
        id:'sdaf',
        subCategories:[
            {
                enTitle:'gardenPure',
                id:'1dsfdsf',
                title:'باغ و باغچه'
            },
            {
                enTitle:'gardenVila',
                id:'1515',
                title:'باغ ویلا'   
            }
        ]
    }
]