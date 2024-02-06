import { create } from 'zustand';

export const useStore = create((set) => ({
    isAuthenticated: false,
    setIsAuthenticated: (newValue) =>
        set(() => ({ isAuthenticated: newValue })),
    user: null,
    setUser: (newUser) => set(() => ({ user: newUser })),
}));
