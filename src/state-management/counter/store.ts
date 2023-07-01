import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools'

interface CounterStore {
    counter: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void
}

const useCounterStore = create<CounterStore>(set => ({
    counter: 0,
    // store is current state
    // store has the shape defined by the CounterStore interface
    increment: () => set(store => ({ counter: store.counter + 1 })),
    // do not need the current counter value argument since zustand stores updated state in store
    decrement: () => set(store => ({ counter: store.counter > 0 ? store.counter - 1 : 0 })),
    reset: () => set(() => ({ counter: 0 }))
}))

if (process.env.NODE_ENV === 'development')
    mountStoreDevtool('Counter Store', useCounterStore)

export default useCounterStore;