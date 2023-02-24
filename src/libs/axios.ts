import axios from "axios";
import { USER_ACCESS_TOKEN } from "@/data/constances/userInfoLocalStore";
import { storageGetting } from "@/utils/localStorage";
export const axiosGet = async (
  endPoint: string,
  option: object,
  file: string,
  line: number
) => {
  try {
    const res = await axios.get(endPoint, option);
    if ((res.data.code = 200 || "200")) {
      return res;
    }
  } catch (error) {}
};
