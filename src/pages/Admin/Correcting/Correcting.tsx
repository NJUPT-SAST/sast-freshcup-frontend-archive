import { Button, Card, Col, Form, Layout, Pagination, Row } from "@douyinfe/semi-ui";
import SemiHeader from "../../../components/Header/Header";
import Sider from "@douyinfe/semi-ui/lib/es/layout/Sider";

const { Header, Content, Footer } = Layout;

export default function Correcting() {
  return (
    <Layout>
      <Header>
        <SemiHeader text="新柚杯比赛管理系统" logout={true} />
      </Header>
      <Layout>
        <Sider
          style={{
            width: "40px"
          }} />
        <Content
          style={{
            padding: "48px",
            backgroundColor: "var(--semi-color-bg-0)",
          }}
        >
          <Card>
            题目
          </Card>
        </Content>
        <Sider
          style={{
            width: "40px"
          }} />
        <Content
          style={{
            padding: "48px",
            backgroundColor: "var(--semi-color-bg-0)",
          }}
        >
          <Row type="flex" justify="center" align="middle">
            <Col>
              <Form layout="horizontal" style={{
                marginBottom: 12,
                marginTop: 12
              }}>
                <Form.Input noLabel field="username" minLength={4} style={{ width: 50 }} />
                <Button type="primary" htmlType="submit">提交</Button>
              </Form>
              <Pagination size="small" total={50} pageSize={1} hoverShowPageSelect style={{ marginBottom: 12, alignContent: "center" }} ></Pagination>

            </Col>
          </Row>
        </Content>
        <Sider
          style={{
            width: "40px"
          }} />
      </Layout>

      <Footer></Footer>
    </Layout>
  );
}