import { UserType } from "@/types/User";
import { StateCreator } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
  user: UserType | null;
};

type ActionType = {
  setCredentials: (token: string) => void;
  clearCredentials: () => void;
  setUser: (user: UserType | null) => void;
};

export type AuthSlice = AuthState & ActionType;

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

export const createAuthSlice: StateCreator<
  AuthSlice,
  [["zustand/immer", never]],
  [],
  AuthSlice
> = (set) => ({
  ...initialState,
  setCredentials: (token) =>
    set({
      isAuthenticated: true,
      token,
    }),
  setUser: (user) => set({ user }),
  clearCredentials: () =>
    set({
      isAuthenticated: false,
      token: null,
    }),
});
