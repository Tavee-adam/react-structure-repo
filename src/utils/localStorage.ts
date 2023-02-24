import { printer } from "./general";

export const storageSetting = (
  key: string,
  value: string,
  file: string,
  line: number
) => {
  try {
    localStorage.setItem(key, value);
    return printer("success", "item saved successfully", file, line);
  } catch (error) {
    return printer("error", error, file, line);
  }
};

export const storageGetting = (key: string, file: string, line: number) => {
  try {
    const res = localStorage.getItem(key);
    printer("success", "getting item successfully", file, line);
    return res;
  } catch (error) {
    return printer("error", error, file, line);
  }
};

export const storageRemoving = (key: string, file: string, line: number) => {
  try {
    const res = localStorage.removeItem(key);
    printer("success", "removing item successfully", file, line);
    return res;
  } catch (error) {
    return printer("error", error, file, line);
  }
};
