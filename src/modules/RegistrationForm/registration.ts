import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const registrationUser = async (params: {}) => {
  try {
    const api = `${process.env.REACT_APP_BASE_URL}/registration`;
    const response = await axios.post(api, params, {
      headers: { "content-Type": "application/json" },
    });
    const data = await response.data;
    if (response.status === 200) {
      cookies.set("ob_", data.token);
      return data;
    }
  } catch (e: any) {
    return e.response?.data?.message;
  }
  return null;
};
