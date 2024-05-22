import { FullFilterType, ItemsReadType } from "types";



const priceItems : ItemsReadType[] =   [
    {
        title: '300 میلیون',
        id: '300',
        value: '300000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' },
    },

    {
        title: '500 میلیون',
        id: '500',
        value: '500000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }

    ,

    {
        title: '750 میلیون',
        id: '750',
        value: '750000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }
    ,

    {
        title: '1 میلیارد',
        id: '1000',
        value: '1000000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }


    ,


    {
        title: '1 میلیارد و 200 میلیون',
        id: '1200',
        value: '1200000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }

    ,

    {
        title: '1 میلیارد و 500 میلیون',
        id: '1500',
        value: '1500000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }

    ,

    {
        title: '2 میلیارد',
        id: '2000',
        value: '2000000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }

    ,

    {
        title: '4 میلیارد',
        id: '4000',
        value: '4000000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }
]


export const priceFilterData: FullFilterType = {
    filtertype: 'RANGE',
    hint: 'قیمت کل',
    id: 'price',
    isPrimary: 'false',
    itemKey: 'price',
    title:'قیمت',
    type:'number',
    unit:'تومان',
    subCategory: { category: { enTitle: '', id: '22222' as any, title: '' }, enTitle: '', id: 'sdf', title: 'sdf' },
    suggests: [
        {
            filter: {
                filtertype: 'RANGE',
                hint: 'قیمت',
                id: 'sdf',
                isPrimary: 'true',
                itemKey: 'price',
                subCategory: { category: { enTitle: '', id: '22222' as any, title: '' }, enTitle: '', id: 'sdf', title: 'sdf' },
                title: 'از',
                type: 'number',
                unit: 'تومان',


            },
            id: 'sdfsdaf',
            title: 'از',
            items:priceItems
        },
        {
            filter: {
                filtertype: 'RANGE',
                hint: 'قیمت',
                id: 'sdf',
                isPrimary: 'true',
                itemKey: 'price',
                subCategory: { category: { enTitle: '', id: '22222' as any, title: '' }, enTitle: '', id: 'sdf', title: 'sdf' },
                title: 'تا',
                type: 'number',
                unit: 'تومان',


            },
            id: 'sdfsdaf',
            title: 'تا',
            items:priceItems
        }
    ]
}


const prePriceItems : ItemsReadType[] =   [
    {
        title: 'رایگان',
        id: '0',
        value: '0',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' },
    },

    {
        title: '30 میلیون',
        id: '30',
        value: '30000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }

    ,

    {
        title: '50 میلیون',
        id: '50',
        value: '50000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }
    ,

    {
        title: '100 میلیون',
        id: '100',
        value: '100000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }
    ,
    
    {
        title: '200 میلیون',
        id: '200',
        value: '200000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }
    ,
    
    {
        title: '300 میلیون',
        id: '300',
        value: '300000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }
    ,
    
    {
        title: '400 میلیون',
        id: '1000',
        value: '40000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }
    ,

    {
        title: '500 میلیون',
        id: '500',
        value: '50000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }
    ,

    {
        title: '700 میلیون',
        id: '700',
        value: '70000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }
    ,



    {
        title: '1 میلیارد ',
        id: '1000',
        value: '1000000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }
    ,
    {
        title: '1 میلیارد و 500 میلیون',
        id: '1500',
        value: '1500000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }
    ,

    {
        title: '2 میلیارد ',
        id: '2000',
        value: '2000000000',
        suggest: { filter: 'aa' as any, id: 'sdf', title: 'sdf' }
    }
    ,



]

export const prePriceFilterData: FullFilterType = {
    filtertype: 'RANGE',
    hint: ' ودیعه',
    id: 'prePrice',
    isPrimary: 'false',
    itemKey: 'price',
    title:'ودیعه',
    type:'number',
    unit:'تومان',
    subCategory: { category: { enTitle: '', id: '22222' as any, title: '' }, enTitle: '', id: 'sdf', title: 'sdf' },
    suggests: [
        {
            filter: {
                filtertype: 'RANGE',
                hint: 'ودیعه',
                id: 'sdf',
                isPrimary: 'true',
                itemKey: 'price',
                subCategory: { category: { enTitle: '', id: '22222' as any, title: '' }, enTitle: '', id: 'sdf', title: 'sdf' },
                title: 'از',
                type: 'number',
                unit: 'تومان',


            },
            id: 'sdfsdaf',
            title: 'از',
            items:prePriceItems
        },
        {
            filter: {
                filtertype: 'RANGE',
                hint: 'ودیعه',
                id: 'sdf',
                isPrimary: 'true',
                itemKey: 'price',
                subCategory: { category: { enTitle: '', id: '22222' as any, title: '' }, enTitle: '', id: 'sdf', title: 'sdf' },
                title: 'تا',
                type: 'number',
                unit: 'تومان',


            },
            id: 'sdfsdaf',
            title: 'تا',
            items:prePriceItems
        }
    ]
}