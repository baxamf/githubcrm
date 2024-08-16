import { jwtDecode } from "jwt-decode";
import { User } from "./StoreProvider";

export enum StorageKey {
  ACCESS_TOKEN = "GIT_HUB_CRM_ACCESS_TOKEN",
}

export class StorageService {
  public static setAccessToken(token: string) {
    localStorage.setItem(StorageKey.ACCESS_TOKEN, token);
  }

  public static getAccessToken() {
    return localStorage.getItem(StorageKey.ACCESS_TOKEN) || null;
  }

  public static getBearerToken() {
    const token = this.getAccessToken();

    return token ? `Bearer ${token}` : "";
  }

  public static removeAccessToken() {
    localStorage.removeItem(StorageKey.ACCESS_TOKEN);
  }

  public static getUser() {
    const accessToken = this.getAccessToken();

    return accessToken ? jwtDecode<User>(accessToken) : null;
  }
}
