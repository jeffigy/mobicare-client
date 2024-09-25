import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createAuthSlice } from "./authSlice";
import { Store } from "@/types/store";

export const useStore = create<Store>()(
  devtools(
    subscribeWithSelector(
      immer((...a) => ({
        ...createAuthSlice(...a),
      })),
    ),
  ),
);
