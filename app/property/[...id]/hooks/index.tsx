import { create } from 'zustand'


interface DataType {
    cardMode: 'block' | 'row'
}

interface StoreType extends DataType {
    dispatch: (data: Partial<DataType>) => void
}

export const useSearch = create<StoreType>((set) => ({
    cardMode: 'block',
    dispatch: (data) => set((state) => ({ ...state, ...data }))
}))