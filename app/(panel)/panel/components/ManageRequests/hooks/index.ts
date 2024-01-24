import { create } from 'zustand'


interface DataType {
    mode: 'list' | 'add' | 'edit',
    reqId?:string
}


interface StoreType extends DataType {
    dispatch: (state: DataType) => void
}

export const useRequestSection = create<StoreType>((set) => ({
    mode: 'list',
    dispatch: (newState) => set((state) => ({ ...state , ...newState }))
}))