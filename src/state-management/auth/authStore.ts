import { create } from "zustand";

interface AuthStore {
    user: string;
    login: (username: string) => void;
    logout: () => void;
}

const useAuthStore = create<AuthStore>(set => ({
    user: '',
    // not using store (current state) here in set since we dont need it
    login: username => set(() => ({ user: username })),
    logout: () => set(() => ({ user: '' }))
}))

export default useAuthStore;