import { useNavigate } from "react-router-dom";
import { Button, Empty, Layout } from "@douyinfe/semi-ui";
import {
  IllustrationNotFound,
  IllustrationNotFoundDark,
} from "@douyinfe/semi-illustrations";
import SemiHeader from "../../components/Header/Header";
import SemiFooter from "../../components/Footer/Footer";
import "./Error.sass";

const { Header, Content, Footer } = Layout;

export default function Error() {
  const navigate = useNavigate();

  return (
    <Layout className="error-layout">
      <Header>
        <SemiHeader text="新柚杯比赛系统" />
      </Header>
      <Content className="error-content">
        <Empty
          image={<IllustrationNotFound style={{ width: 150, height: 150 }} />}
          darkModeImage={
            <IllustrationNotFoundDark style={{ width: 150, height: 150 }} />
          }
          title={"你好像走丢了…"}
          description="这个页面似乎找不到了。不过别担心，已经有大佬尝试在修复了。不如先返回首页再试试？"
        >
          <div>
            <Button
              style={{ padding: "6px 24px", marginRight: 12 }}
              theme="solid"
              type="primary"
              onClick={() => {
                navigate("/");
              }}
            >
              返回首页
            </Button>
            <Button
              style={{ padding: "6px 24px" }}
              type="primary"
              onClick={() => {
                window.location.reload();
              }}
            >
              刷新页面
            </Button>
          </div>
        </Empty>
      </Content>
      <Footer>
        <SemiFooter />
      </Footer>
    </Layout>
  );
}
