import { Layout } from "@douyinfe/semi-ui";
import SemiHeader from "../../components/Header/Header";

const { Header, Content, Footer } = Layout;

export default function SuperAdmin() {
  return (
    <Layout>
      <Header>
        <SemiHeader text="新柚杯比赛管理系统" logout={true} />
      </Header>
      <Content
        style={{
          padding: "24px",
          backgroundColor: "var(--semi-color-bg-0)",
        }}
      >
        SuperAdmin
      </Content>
      <Footer></Footer>
    </Layout>
  );
}
