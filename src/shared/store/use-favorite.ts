import { create } from "zustand";
import { Api } from "@/lib/services/api-client";
import { getFavoriteDetails } from "@/lib/get-favorite-details";
import { Product } from "@/@types/types";

export interface FavoriteState {
  loading: boolean;
  error: boolean;
  items: Product[];
  fetchFavoriteItems: () => Promise<void>;
  favoriteAddItem: (productId: number) => Promise<void>;
  removeFavoriteItem: (productId: number) => Promise<void>;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  items: [],
  error: false,
  loading: true,

  fetchFavoriteItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.favorite.getFavoriteInfo();
      const { items } = getFavoriteDetails(data);
      set({ items });
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  favoriteAddItem: async (productId: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.favorite.addFavoriteItem(productId);
      const { items } = getFavoriteDetails(data);
      set({ items });
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  removeFavoriteItem: async (productId: number) => {
    try {
      set((state) => ({
        loading: true,
        error: false,
        items: state.items.map((item) =>
          item.id === productId ? { ...item, quantity: 0 } : item
        ),
      }));
      const data = await Api.favorite.removeFavoriteItem(productId);
      const { items } = getFavoriteDetails(data);
      set({ items });
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set((state) => ({
        loading: false,
        items: state.items.map((item) => ({ ...item, disabled: false })),
      }));
    }
  },
}));
