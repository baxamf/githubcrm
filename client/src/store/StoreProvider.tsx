import React, { useState } from "react";
import { StorageService } from "./StorageService";

export type User = {
  id: number;
  email: string;
};
export interface Store {
  user: User | null;
}

interface StoreContext {
  store: Store;
  setUser: (user: Store["user"]) => void;
}

export const StoreContext = React.createContext<StoreContext>(null!);

export default function StoreProvider({ children }: { children: JSX.Element }) {
  const user = StorageService.getUser();

  const [store, setStore] = useState<Store>({ user });

  const setUser = (user: Store["user"]) => {
    setStore({ ...store, user });
  };

  const storeContext = {
    setUser,
    store,
  };
  return (
    <StoreContext.Provider value={storeContext}>
      {children}
    </StoreContext.Provider>
  );
}
