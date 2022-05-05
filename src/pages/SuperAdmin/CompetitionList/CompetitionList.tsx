import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Layout, Col, Row, Pagination } from "@douyinfe/semi-ui";
import { IconPlus } from "@douyinfe/semi-icons";
import { getContestList } from "../../../api/superadmin";
import "./CompetitionList.sass";

const { Content } = Layout;

export default function CompetitionList() {
  const navigate = useNavigate();
  const [contestRecords, setContestRecords] = useState([]);
  const [totalContest, setTotalContest] = useState(1);

  const [filter, setFilter] = useState({
    pageNum: 1,
    pageSize: 15,
  });
  useEffect(() => {
    let truePageSize = filter.pageSize;
    if (filter.pageNum === 1) truePageSize = filter.pageSize - 1;
    getContestList(filter.pageNum, truePageSize).then((res) => {
      console.log(res);
      setContestRecords(res.data.data.records);
      setTotalContest(res.data.data.total);
    });
  }, [filter]);

  function AddContestCard() {
    console.log(filter.pageNum);
    if (filter.pageNum === 1)
      return (
        <div
          onClick={() => {
            navigate("new");
          }}
        >
          <Card className="add-contest-card common-card">
            <IconPlus size="extra-large" />
          </Card>
        </div>
      );
    else return null;
  }

  return (
    <Content className="contest-list-wrapper">
      <div className="contest-list">
        <AddContestCard />
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
      <Pagination
        total={totalContest}
        style={{ marginTop: 12 }}
        pageSize={filter.pageSize}
        pageSizeOpts={[15, 30, 50]}
        onPageChange={(currentPage: number) => {
          setFilter({ ...filter, pageNum: currentPage });
        }}
        onPageSizeChange={(pageSize: number) => {
          setFilter({ ...filter, pageSize });
        }}
        showSizeChanger
      ></Pagination>
    </Content>
  );
}
