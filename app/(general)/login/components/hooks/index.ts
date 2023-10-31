import { create } from 'zustand'

interface DataType {
    step: 'enter' | 'verify',
}

interface StoreType extends DataType {
    dispatch: (data: Partial<DataType>) => void
}

export const useLoginPage = create<StoreType>((set) => ({
    step: 'enter',
    dispatch: (data) => set((state) => ({ ...state, ...data }))
}))