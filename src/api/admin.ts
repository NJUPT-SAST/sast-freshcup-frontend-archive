import axios from "axios";

export const getCompetitionList = (
  pageNum: string,
  pageSize: string,
  TOKEN: any
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

export const getIssuesList = (
  contestId: string | undefined,
  pageNum: string,
  pageSize: string,
  TOKEN: any
) => {
  return axios.get("/admin/problems", {
    //  Query Params
    params: {
      contestId,
      pageNum,
      pageSize,
    },
    // Header Params
    headers: {
      TOKEN,
    },
  });
};

export const deleteIssue = (id: string | undefined, TOKEN: any) => {
  return axios.post(
    "/admin/deleteProblem",
    {},
    {
      //  Query Params
      params: {
        id,
      },
      // Header Params
      headers: {
        TOKEN,
      },
    }
  );
};

export const correctIssue = (
  answerId: number,
  judgerId: number,
  score: number,
  TOKEN: any
) => {
  return axios.post(
    "/admin/deleteProblem",
    {
      answerId,
      judgerId,
      score,
    },
    {
      //  Query Params
      params: {},
      // Header Params
      headers: {
        TOKEN,
      },
    }
  );
};
