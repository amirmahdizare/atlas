import { CategoryType } from "types";

export const categories: CategoryType[] = [
    {
        title: 'زمین',
        enTitle: 'ground',
        id: '121sdf5sdf',
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
        ],
        filters: [
            {
                title: 'قیمت',
                type: 'RANGE',
                hint: 'مثلا : 80,000',
                itemKey:'price',
                unit: 'تومان',
                suggest: [
                    {
                        items: [

                            {
                                title: '750 میلیون',
                                value: '750000'
                            },

                            {
                                title: '1 میلیارد',
                                value: '1000000000'
                            }
                            , {
                                title: '2 میلیارد',
                                value: '2000000000'
                            }

                        ],
                        title: 'حداقل',
                        // itemKey: 'minPrice'
                    },
                    {
                        items: [
                            {
                                title: '3 میلیارد',
                                value: '3000000000'
                            },
                            {
                                title: '5 میلیارد',
                                value: '5000000000'
                            },
                            {
                                title: '7 میلیارد',
                                value: '7000000000'
                            }
                        ],
                        title: 'حداکثر',
                        // itemKey: 'maxPrice'
                    }
                ]
            },
            {
                title: 'متراژ',
                type: 'RANGE',
                hint: 'مثلا 15',
                itemKey:'metr',
                unit: 'متر',
                suggest: [
                    {
                        items: [
                            {
                                title: '50متر ',
                                value: '50'
                            }
                        ],
                        title: 'از',
                        // itemKey: 'metrDown'
                    },
                    {
                        items: [
                            {
                                title: '75متر ',
                                value: '75'
                            }
                        ],
                        title: 'تا',
                        // itemKey: 'metrUp'
                    }
                ]
            },
            {
                title: 'آسانسور',
                type: 'BOOLEAN',
                itemKey: 'elevator',
            },
            {
                title: 'پارکینگ',
                type: 'BOOLEAN',
                itemKey: 'parking',
            },
            {
                title: 'سن بنا',
                type: 'ONESELECTRANGE',
                itemKey: 'age',
                hint: 'سن بنا را انتخاب کنید',
                suggest: [
                    {
                        // itemKey: 'age',
                        items: [
                            {
                                title: 'حداکثر یک سال',
                                value: '0-1',
                            },
                            {
                                title: 'حداکثر 3 سال',
                                value: '0-3',
                            },
                            {
                                title: 'حداکثر 5 سال',
                                value: '0-5',
                            },
                            {
                                title: 'بیش از 10 سال',
                                value: '10-',
                            },
                        ],
                        title: ''
                    }
                ]
            }
            ,
            {
                title: 'تعداد اتاق',
                type: 'ONEBUTTON',
                itemKey: 'rooms',
                hint: 'تعداد اتاق را انتخاب کنید',
                suggest: [
                    {
                        // itemKey: 'rooms',
                        items: [
                            {
                                title: 'بدون اتاق',
                                value: '0'
                            },
                            {
                                title: '1',
                                value: '1'
                            },
                            {
                                title: '2',
                                value: '2'
                            }
                            ,
                            {
                                title: '3',
                                value: '3'
                            },
                            {
                                title: 'بیش از 3',
                                value: '3-'
                            }
                        ],
                        title: ''
                    }
                ]
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
        title: 'باغ و باغ ویلا',
        enTitle: 'garden',
        id: 'sdaf',
        subCategories: [
            {
                enTitle: 'gardenPure',
                id: '1dsfdsf',
                title: 'باغ و باغچه'
            },
            {
                enTitle: 'gardenVila',
                id: '1515',
                title: 'باغ ویلا'
            }
        ]
    }
]