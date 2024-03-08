import { create } from 'zustand'


interface DataType {
    mode: 'list' | 'add' | 'edit',
    userId?:string
}


interface StoreType extends DataType {
    dispatch: (state: DataType) => void
}

export const useAdvisersSection = create<StoreType>((set) => ({
    mode: 'list',
    dispatch: (newState) => set((state) => ({ ...state , ...newState }))
}))