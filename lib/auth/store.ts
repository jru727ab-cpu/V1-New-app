import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  role: 'owner' | 'admin' | 'user';
  isAdmin: boolean;
}

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
  updateUserRole: (role: 'owner' | 'admin' | 'user') => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),
  setLoading: (isLoading) => set({ isLoading }),
  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
  updateUserRole: (role) =>
    set((state) => ({
      user: state.user ? { ...state.user, role, isAdmin: role !== 'user' } : null,
    })),
}));
