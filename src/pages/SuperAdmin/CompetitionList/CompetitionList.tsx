import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Layout, Pagination, Spin } from "@douyinfe/semi-ui";
import { getContestList } from "../../../api/superadmin";
import "./CompetitionList.sass";

const { Content } = Layout;

export default function CompetitionList() {
  const navigate = useNavigate();
  const [contestRecords, setContestRecords] = useState<Array<48>>([]);
  const [totalContest, setTotalContest] = useState<number>(0);
  const [contestListLoading, setContextListLoading] = useState<boolean>(false);

  const [filter, setFilter] = useState<any>({
    pageNum: 1,
    pageSize: 12,
  });

  useEffect(() => {
    setContextListLoading(true);
    getContestList(filter.pageNum, filter.pageSize).then((res) => {
      console.log(res);
      setContestRecords(res.data.data.records);
      setTotalContest(res.data.data.total);
      setContextListLoading(false);
    });
  }, [filter]);

  return (
    <Content className="contest-list-wrapper">
      <div className="add-contest-button-wrapper">
        <Button
          className="add-contest-button"
          theme="borderless"
          type="primary"
        >
          创建比赛
        </Button>
      </div>
      <Spin size="large" spinning={contestListLoading}>
        <div className="contest-list">
          {contestRecords.map((item: any, index: number) => {
            return (
              <Card
                key={index}
                className="common-card"
                title={item.name}
                headerExtraContent={
                  <Button
                    theme="borderless"
                    type="tertiary"
                    onClick={() => {
                      console.log(item);
                      navigate(item.id.toString());
                    }}
                  >
                    查看
                  </Button>
                }
              >
                <span className="card-description">{item.description}</span>
              </Card>
            );
          })}
        </div>
      </Spin>
      <Pagination
        total={totalContest}
        style={{ margin: "12px 0" }}
        pageSize={filter.pageSize}
        pageSizeOpts={[12, 24, 48]}
        onPageChange={(currentPage: number) => {
          setFilter({ ...filter, pageNum: currentPage });
        }}
        onPageSizeChange={(pageSize: number) => {
          setFilter({ ...filter, pageSize });
        }}
        showTotal
        showSizeChanger
      ></Pagination>
    </Content>
  );
}
