import { PropertyListFilterType } from 'types'
import { create } from 'zustand'


interface DataType {
    cardMode: 'block' | 'row',
    filter: PropertyListFilterType
}

interface StoreType extends DataType {
    dispatch: (data: Partial<DataType>) => void,
    dispatchFilter: (data: Partial<PropertyListFilterType>) => void
}

export const useSearchProperty = create<StoreType>((set) => ({
    cardMode: 'block',
    dispatch: (data) => set((state) => ({ ...state, ...data })),
    dispatchFilter: (filter) => set((state) => ({ ...state, filter: { ...state.filter, ...filter } })),
    filter: {
        type: 'BUY'
    }
}))