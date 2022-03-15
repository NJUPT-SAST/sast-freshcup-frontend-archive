import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Layout, Row } from "@douyinfe/semi-ui";
import { IconPlus } from "@douyinfe/semi-icons";
import { getContestList } from "../../../api/superadmin";
import "./CompetitionList.sass";

const { Content } = Layout;

export default function CompetitionList() {
  const [contestList, setContestList] = useState([]);
  useEffect(() => {
    getContestList().then((res) => {
      console.log(res);
      setContestList(res.data.data.records);
    });
  }, []);

  return (
    <Layout>
      <Content
        style={{
          padding: "24px",
          backgroundColor: "var(--semi-color-bg-0)",
        }}
      >
        <Row>
          <Col>
            <div className="contest-list">
              <Card className="add-contest-card">
                <IconPlus size="extra-large" />
              </Card>
              {contestList.map((item: any) => {
                return (
                  <Card className="common-card" title={item.name}>
                    {item.description}
                  </Card>
                );
              })}
            </div>
          </Col>
        </Row>
        List<Link to="1">To</Link>
      </Content>
    </Layout>
  );
}
