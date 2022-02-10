import axios from "axios";

export const getContestList = () => {
  return axios.get("/superadmin/contest/all");
};
