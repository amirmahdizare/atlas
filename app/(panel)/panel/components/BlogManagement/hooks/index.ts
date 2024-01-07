import { create } from 'zustand'


interface DataType {
    mode: 'list' | 'add' | 'edit',
    blogId?:string
}


interface StoreType extends DataType {
    dispatch: (state: DataType) => void
}

export const useBlogsSection = create<StoreType>((set) => ({
    mode: 'list',
    dispatch: (newState) => set((state) => ({ ...state , ...newState }))
}))