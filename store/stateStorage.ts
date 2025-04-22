import { MMKV } from "react-native-mmkv";
import { StateStorage } from "zustand/middleware";

// Determine if running in a web environment
const isWeb = typeof window !== "undefined";

// MMKV storage for React Native
const mmkvStorage = new MMKV();

// Web storage using localStorage
const webStorage: StateStorage = {
  setItem: localStorage.setItem.bind(localStorage),
  getItem: (key) => localStorage.getItem(key) ?? null, // Ensure it returns `string | null`
  removeItem: localStorage.removeItem.bind(localStorage),
};

// MMKV storage wrapper to match StateStorage type
const nativeStorage: StateStorage = {
  setItem: (key, value) => mmkvStorage.set(key, value),
  getItem: (key) => {
    const value = mmkvStorage.getString(key);
    return value ?? null; // Ensure `null` is returned instead of `undefined`
  },
  removeItem: (key) => mmkvStorage.delete(key),
};

// Select appropriate storage based on environment
const stateStorage: StateStorage = isWeb ? webStorage : nativeStorage;

export default stateStorage;
