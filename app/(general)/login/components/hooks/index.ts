import { create } from 'zustand'

interface DataType {
    step: 'enter' | 'verify',
    phoneNumber?:string
}

interface StoreType extends DataType {
    dispatch: (data: Partial<DataType>) => void
}

export const useLoginPage = create<StoreType>((set) => ({
    step: 'enter',
    // phoneNumber:'',
    dispatch: (data) => set((state) => ({ ...state, ...data }))
}))