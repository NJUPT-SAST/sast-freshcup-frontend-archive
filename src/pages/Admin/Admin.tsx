import { Layout } from "@douyinfe/semi-ui";
import { Outlet } from "react-router-dom";
import SemiHeader from "../../components/Header/Header";

const { Header, Content, Footer } = Layout;

export default function Admin() {
  return (
    <Layout>
      <Header>
        <SemiHeader text="新柚杯比赛管理系统" logout={true} />
      </Header>
      <Outlet />
    </Layout>
  );
}
