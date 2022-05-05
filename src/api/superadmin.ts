import axios from "axios";

/**
 * 获取比赛列表
 * @param pageNum 页数
 * @param pageSize 每页展示数量
 * @returns axios api
 */
export const getContestList = (pageNum: number, pageSize: number) => {
  return axios.get("/superadmin/contest/all", {
    params: { pageNum, pageSize },
    headers: {
      TOKEN: localStorage.getItem("token") || "null",
    },
  });
};

/**
 * 获取比赛详情
 * @param id 比赛id
 * @returns axios api
 */
export function getContestDetailed(id: string) {
  return axios({
    method: "GET",
    url: "/superadmin/contest/info",
    headers: {
      TOKEN: localStorage.getItem("token") || "null",
    },
    params: { id },
  });
}

/**
 * 编辑比赛设置
 * @param id 比赛id
 * @param name 比赛名称
 * @param start 比赛开始时间
 * @param end 比赛结束时间
 * @param description 比赛描述
 * @returns axios api
 */
export function editContestSettings(id: string,name: string,start: string,end: string, description: string){
  return axios({
    method: "POST",
    url: '/superadmin/contest/edit',
    headers: {
      TOKEN: localStorage.getItem('token') || 'null',
    },
    data: { id,name,start,end,description },
  })
}

