type StorageActionType = {
  get: (key: string) => string | boolean | unknown;
  set: (key: string, value: any) => void;
  set_stringify: (key: string, value: any) => void;
};

export const storageActions: StorageActionType = {
  get: (key) => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  },
  set: (key, value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  },
  set_stringify: (key, value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
};
