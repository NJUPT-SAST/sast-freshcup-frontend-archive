import axios from "axios";

export const getContestList = (pageNum: number, pageSize: number) => {
  return axios.get("/superadmin/contest/all", {
    params: { pageNum, pageSize },
    headers: {
      TOKEN: localStorage.getItem("token") || "null",
    },
  });
};
