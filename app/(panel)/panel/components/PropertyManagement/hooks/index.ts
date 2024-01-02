import { create } from 'zustand'


interface DataType {
    mode: 'list' | 'add' | 'edit',
    proprtyId?:string
}


interface StoreType extends DataType {
    dispatch: (state: DataType) => void
}

export const usePropertySection = create<StoreType>((set) => ({
    mode: 'list',
    dispatch: (newState) => set((state) => ({ ...state , ...newState }))
}))