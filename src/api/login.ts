import axios from "axios";

// 获取验证码图片
export const getValidateCode = () => {
  return axios.get("/getValidateCode", {
    responseType: "blob",
  });
};

// 登录
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
