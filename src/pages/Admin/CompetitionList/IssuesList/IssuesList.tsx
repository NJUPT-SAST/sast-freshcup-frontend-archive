import { Button, Col, Layout, Pagination, Row } from "@douyinfe/semi-ui";
import SemiHeader from "../../../../components/Header/Header";
import { Card } from '@douyinfe/semi-ui';
import Meta from "@douyinfe/semi-ui/lib/es/card/meta";
import { IconPlusCircle } from '@douyinfe/semi-icons';
import Sider from "@douyinfe/semi-ui/lib/es/layout/Sider";

const { Header, Content, Footer } = Layout;

const CardItem = () => {
    return (
        <Card
            shadows='hover'
            style={{ height: 64 }}
            bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Meta
                title="第一题"
            />
        </Card>
    )
}

export default function IssuesList() {
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
                    <Row gutter={[72, 24]}>
                        <Col span={24}>
                            <CardItem />
                        </Col>
                        <Col span={24}>
                            <CardItem />
                        </Col><Col span={24}>
                            <CardItem />
                        </Col><Col span={24}>
                            <CardItem />
                        </Col><Col span={24}>
                            <CardItem />
                        </Col>
                    </Row>
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
                    <Button theme='solid' type='primary' style={{ marginRight: 8 }} icon={<IconPlusCircle />}>创建题目</Button>
                </Content>
                <Sider
                    style={{
                        width: "40px"
                    }} />
            </Layout>
            <Row type="flex" justify="center" align="middle">
                <Col>
                    <Pagination showTotal total={50} pageSize={5} style={{ marginBottom: 12, alignContent: "center" }} ></Pagination>
                </Col>
            </Row>
            <Footer></Footer>
        </Layout>
    );
}