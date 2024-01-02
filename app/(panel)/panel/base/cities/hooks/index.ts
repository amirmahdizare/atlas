import { create } from 'zustand'


interface DataType {
    mode: 'list' | 'add' | 'edit',
    cityId?:string
}


interface StoreType extends DataType {
    dispatch: (state: DataType) => void
}

export const useCitiesSection = create<StoreType>((set) => ({
    mode: 'list',
    dispatch: (newState) => set((state) => ({ ...state , ...newState }))
}))