import axios from "axios";

export const getCompetitionList = (
    pageNum: string,
    pageSize: string,
    TOKEN: any,
) => {
  return axios.get("/admin/contests", {
    //  Query Params
    params: {
      pageNum,
      pageSize,
    },
    // Header Params
    headers: {
      TOKEN,
    },
  });
};