import { Avatar, Col, Layout, Pagination, Popover, Row } from "@douyinfe/semi-ui";
import SemiHeader from "../../../components/Header/Header";
import { Card } from '@douyinfe/semi-ui';
import Meta from "@douyinfe/semi-ui/lib/es/card/meta";
import { IconInfoCircle } from '@douyinfe/semi-icons';
import Sider from "@douyinfe/semi-ui/lib/es/layout/Sider";

const { Header, Content, Footer } = Layout;

const CardItem = () => {
  return (
    <Card
      shadows='hover'
      style={{ height: 160 }}
      bodyStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Meta
        title="Semi Doc"
        avatar={
          <Avatar
            alt='Card meta img'
            size="default"
            src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg'
          />
        }
      />
      <Popover
        position='top'
        showArrow
        content={
          <article style={{ padding: 6 }}>
            这是一个 Card
          </article>
        }
      >
        <IconInfoCircle style={{ color: 'var(--semi-color-primary)' }} />
      </Popover>
    </Card>
  )
}

export default function CompetitionList() {
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
          <Row gutter={[72, 48]}>
            <Col span={8}> <CardItem />
            </Col><Col span={8}> <CardItem />
            </Col><Col span={8}> <CardItem />
            </Col><Col span={8}> <CardItem />
            </Col><Col span={8}> <CardItem />
            </Col><Col span={8}> <CardItem />
            </Col>
          </Row>
        </Content>
        <Sider
          style={{
            width: "40px"
          }} />
      </Layout>
      <Row type="flex" justify="center" align="middle">
        <Col>
          <Pagination showTotal total={10} pageSize={6} style={{ marginBottom: 12, alignContent: "center" }} ></Pagination>
        </Col>
      </Row>
      <Footer></Footer>
    </Layout>
  );
}