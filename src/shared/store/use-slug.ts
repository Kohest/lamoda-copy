import { create } from "zustand";

interface SlugState {
  slug: string;

  setSlug: (slug: string) => void;
}
export const useSlugStore = create<SlugState>((set, get) => ({
  slug: "women-home",

  setSlug: (slug: string) => {
    set({ slug });
  },
}));
