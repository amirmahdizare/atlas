import { create } from "zustand";

export const useToggleCity = create<{ isOpen: boolean, setIsOpen: (state: boolean) => void }>((set) => ({
    isOpen: false,
    setIsOpen: (data) => set((state) => ({ ...state, isOpen: data })),
}))