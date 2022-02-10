import axios from "axios";

export const getValidateCode = () => {
  return axios.get("/getValidateCode", {
    responseType: "blob",
  });
};

export const login = (
  username: string,
  password: string,
  validateCode: string,
  CAPTCHA: string
) => {
  return axios.post(
    "/login",
    { username, password },
    {
      //  Query Params
      params: {
        validateCode,
      },
      // Header Params
      headers: {
        CAPTCHA,
      },
    }
  );
};
