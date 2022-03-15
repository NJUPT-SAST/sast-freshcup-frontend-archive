import axios from "axios";

export const getContestList = () => {
  return axios.get("/superadmin/contest/all", {
    headers: {
      TOKEN: localStorage.getItem("token") || "null",
    },
  });
};
