import { create } from 'zustand'


interface DataType {
    mode: 'list' | 'add' | 'edit',
    corpId?:number
}


interface StoreType extends DataType {
    dispatch: (state: DataType) => void
}

export const useCorpSection = create<StoreType>((set) => ({
    mode: 'list',
    dispatch: (newState) => set((state) => ({ ...state , ...newState }))
}))