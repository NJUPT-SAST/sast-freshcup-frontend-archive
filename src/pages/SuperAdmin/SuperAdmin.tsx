import { Layout } from "@douyinfe/semi-ui";
import { Outlet } from "react-router-dom";
import SemiHeader from "../../components/Header/Header";
import "./SuperAdmin.sass";

const { Header } = Layout;

export default function SuperAdmin() {
  return (
    <Layout className="layout">
      <Header>
        <SemiHeader text="新柚杯比赛管理系统" logout={true} />
      </Header>
      <Outlet />
    </Layout>
  );
}
