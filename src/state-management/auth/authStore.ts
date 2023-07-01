import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools'

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

// checking to see if we are in development mode
if (process.env.NODE_ENV === 'development')
    // first parameter is the name of devtools, second parameter is our store hook
    mountStoreDevtool('Current Store', useAuthStore)

export default useAuthStore;