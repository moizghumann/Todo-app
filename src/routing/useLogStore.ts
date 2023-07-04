import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools'

interface UserAuthee {
    username: string;
    password: string;
    login: (user: string, pass: string) => void;
    logout: () => void;
}



const useLogStore = create<UserAuthee>(set => ({
    username: '',
    password: '',
    login: (user, pass) => {
        set({ username: user, password: pass });
    },
    logout: () => set(() => ({ username: '', password: '' }))
}))

if (process.env.NODE_ENV === 'development')
    mountStoreDevtool('User Authentication', useLogStore);

export default useLogStore;