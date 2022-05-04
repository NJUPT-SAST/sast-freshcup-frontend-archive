import axios from "axios";

//===Start||get Method===
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

export const getIssueDetailedInfo=( id:string , TOKEN:any )=>{
  return axios.get("/admin/problemInfo", {
    //  Query Params
    params: {
      id
    },
    // Header Params
    headers: {
      TOKEN,
    },
  });
}
//===End||get Method===

//===Start||Post Method===

/**
 * @brief 删除题目
 */
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

/**
 * @brief 批改题目
 */
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

/**
 * @brief 出题
 */
export const setIssue = (
    contestId: number,
    ownerUid: number,
    type: number,
    answer:string,
    desc:string,
    opt1:string,
    opt2:string,
    opt3:string,
    opt4:string,
    score:number,
    order_id:number,
    pic:string,
    TOKEN: any
) => {
  return axios.post(
      "/admin/setProblem",
      {
          contestId,
          ownerUid,
          type,
          answer,
          desc,
          opt1,
          opt2,
          opt3,
          opt4,
          score,
          order_id,
          pic
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

/**
 * @brief 修改题目内容
 */
export const updateIssue = (
    contestId: number,
    ownerUid: number,
    type: number,
    answer:string,
    desc:string,
    opt1:string,
    opt2:string,
    opt3:string,
    opt4:string,
    score:number,
    order:number,
    pic:string,
    id:number,
    TOKEN: any
) => {
    return axios.post(
        "/admin/updateProblem",
        {
            contestId,
            ownerUid,
            type,
            answer,
            desc,
            opt1,
            opt2,
            opt3,
            opt4,
            score,
            order,
            pic
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
//===End||Post Method===