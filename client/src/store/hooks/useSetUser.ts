import { useContext } from "react";
import { StoreContext } from "../StoreProvider";

export const useSetUser = () => useContext(StoreContext).setUser;
