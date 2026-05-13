import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistItem {
  id: number;
  name: string;
  slug: string;
  images: { src: string }[];
  price: string;
  type: "simple" | "variable";
  sizes?: string[];
}

interface WishlistStore {
  items: WishlistItem[];

  addToWishlist: (item: WishlistItem) => void;

  removeFromWishlist: (id: number) => void;

  isInWishlist: (id: number) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToWishlist: (item) => {
        const exists = get().items.some((i) => i.id === item.id);

        if (exists) return;

        set({
          items: [...get().items, item],
        });
      },

      removeFromWishlist: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        });
      },

      isInWishlist: (id) => {
        return get().items.some((item) => item.id === id);
      },
    }),
    {
      name: "wishlist-storage",
    },
  ),
);
