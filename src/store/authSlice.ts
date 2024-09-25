import { StateCreator } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
  user: any | null;
};

type ActionType = {
  login: (token: string) => void;
  logout: () => void;
  setUser: (user: any) => void;
};

export type AuthSlice = AuthState & ActionType;

export const createAuthSlice: StateCreator<
  AuthSlice,
  [["zustand/immer", never]],
  [],
  AuthSlice
> = (set) => ({
  isAuthenticated: false,
  token: null,
  user: null,
  login: (token) =>
    set({
      isAuthenticated: true,
      token,
    }),
  setUser: (user) => {},
  logout: () => {},
});
