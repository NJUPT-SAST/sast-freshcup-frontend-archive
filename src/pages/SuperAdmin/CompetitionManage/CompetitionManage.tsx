import { Nav, Layout } from "@douyinfe/semi-ui";
import {
  IconHome,
  IconSetting,
  IconUserSetting,
  IconIdCard,
  IconCode,
} from "@douyinfe/semi-icons";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

export default function CompetitionManage() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider style={{ backgroundColor: "var(--semi-color-bg-1)" }}>
        <Nav
          style={{ maxWidth: 220, height: "100%" }}
          defaultSelectedKeys={["Home"]}
          onSelect={({
            itemKey,
            selectedKeys,
            selectedItems,
            domEvent,
            isOpen,
          }) => {
            console.log(itemKey, selectedKeys, selectedItems, domEvent, isOpen);
            navigate(`${selectedKeys[0]}`);
          }}
          items={[
            {
              itemKey: "",
              text: "比赛设置",
              icon: <IconSetting size="large" />,
            },
            {
              itemKey: "question",
              text: "题目设置",
              icon: <IconCode size="large" />,
            },
            {
              itemKey: "account",
              text: "选手账号",
              icon: <IconUserSetting size="large" />,
            },
            {
              itemKey: "authorize",
              text: "管理员授权",
              icon: <IconIdCard size="large" />,
            },
          ]}
          footer={{
            collapseButton: true,
          }}
        />
      </Sider>
      <Content
        style={{
          padding: "24px",
          backgroundColor: "var(--semi-color-bg-0)",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
}
