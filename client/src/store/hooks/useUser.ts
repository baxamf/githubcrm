import { useContext } from "react";
import { Store, StoreContext } from "../StoreProvider";

export const useUser = (): Store["user"] => useContext(StoreContext).store.user;
