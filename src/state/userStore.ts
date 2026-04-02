import { create } from "zustand";
import type { IUser } from "../api/usersApi";
import { useUIStore } from "./uiStore";

interface UserStore {
  users: IUser[];
  activeUsersIds: number[];
  archivedUsersIds: number[];
  invisibleUsersIds: number[];

  setUsers: (users: IUser[]) => void;

  updateUser: (id: string, updates: Partial<IUser>) => void;
  setActiveUser: (ids: number[]) => void;
  archiveUser: (id: number) => void;
  unarchiveUser: (id: number) => void;
  createInvisibleUser: (id: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  activeUsersIds: [],
  archivedUsersIds: [],
  invisibleUsersIds: [],

  setUsers: (users) => set({ users }),

  updateUser: (id, updates) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === Number(id) ? { ...user, ...updates } : user,
      ),
    })),
  setActiveUser: (ids: number[]) => {
    set({ activeUsersIds: ids });
  },

  archiveUser: (id: number) => {
    set((state) => ({
      archivedUsersIds: [...state.archivedUsersIds, id],
    }));
    useUIStore.getState().onClickDropdown(null);
  },

  unarchiveUser: (id: number) => {
    (set((state) => ({
      archivedUsersIds: state.archivedUsersIds.filter(
        (userId) => userId !== id,
      ),
    })),
      useUIStore.getState().onClickDropdown(null));
  },
  createInvisibleUser: (id: number) =>
    set((state) => ({
      invisibleUsersIds: [...state.invisibleUsersIds, id],
    })),
}));
