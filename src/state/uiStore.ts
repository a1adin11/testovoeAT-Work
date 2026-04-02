import { create } from "zustand";

interface UIStore {
  isDropdownOpen: number | null;
  onClickDropdown: (id: number | null) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isDropdownOpen: null,
  onClickDropdown: (id: number | null) => {
    set((state) => ({
      isDropdownOpen: state.isDropdownOpen === id ? null : id,
    }));
  },
}));
