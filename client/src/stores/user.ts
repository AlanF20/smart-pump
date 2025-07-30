import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
export interface UserState {
  token: string;
}
export interface UserActions {
  saveToken: (newToken: string) => void;
  clearToken: () => void;
}

type UserStore = UserState & UserActions;
export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      token: "",
      saveToken: (newToken: string) => set({ token: newToken }),
      clearToken: () => set({ token: "" }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
