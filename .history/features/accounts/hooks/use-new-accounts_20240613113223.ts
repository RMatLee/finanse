import { create } from "zustand";

type newAccountState = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useNewAccount = create 