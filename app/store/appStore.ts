import { create } from "zustand";

interface AuthState {
  notificationCount: number;
  setNotificationCount: (count: number) => void;
  incrementNotificationCount: () => void;
}

export const useAppStore = create<AuthState>((set) => ({
  notificationCount: 0,

  setNotificationCount: (count: number) => set({ notificationCount: count }),
  incrementNotificationCount: () =>
    set((state) => ({
      notificationCount: state.notificationCount + 1,
    })),
}));
