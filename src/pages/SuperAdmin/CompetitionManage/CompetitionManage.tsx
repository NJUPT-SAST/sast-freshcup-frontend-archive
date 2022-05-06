import { useEffect, useState } from "react";
import { Nav, Layout } from "@douyinfe/semi-ui";
import {
  IconSetting,
  IconUserSetting,
  IconIdCard,
  IconCode,
  IconChevronLeft,
} from "@douyinfe/semi-icons";
import SemiFooter from "../../../components/Footer/Footer";
import { Outlet, useNavigate, useLocation, useParams } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

export default function CompetitionManage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [navigation, setNavigation] = useState("");
  const competitionId = useParams();
  // console.log(competitionId)

  useEffect(() => {
    // console.log((location?.pathname as any).match(/\/([^/]*)$/g)[0].match(/[a-z][^\s]*/g));
    let match = (location?.pathname as any)
      .match(/\/([^/]*)$/g)[0]
      .match(/[a-z][^\s]*/g);
    match ? setNavigation(match[0]) : setNavigation("");
  }, [location]);

  return (
    <Layout>
      <Sider style={{ backgroundColor: "var(--semi-color-bg-1)" }}>
        <Nav
          style={{ maxWidth: 220, height: "100%" }}
          defaultSelectedKeys={[navigation]}
          onSelect={({ itemKey }) => {
            console.log(itemKey);
            if (itemKey === "back") {
              navigate("/superadmin");
            } else {
              setNavigation(itemKey.toString());
              navigate(itemKey.toString());
            }
          }}
          items={[
            {
              itemKey: "back",
              text: "返回列表",
              icon: <IconChevronLeft size="large" />,
            },
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
      <Layout style={{ minHeight: "100%" }}>
        <Content
          style={{
            padding: "24px",
            backgroundColor: "var(--semi-color-bg-0)",
          }}
        >
          <Outlet />
        </Content>
        <Footer>
          <SemiFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}
