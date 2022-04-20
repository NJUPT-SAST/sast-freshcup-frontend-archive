import { Fragment } from "react";
import { Empty, Layout } from "@douyinfe/semi-ui";
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from "@douyinfe/semi-illustrations";
import SemiHeader from "../../components/Header/Header";
import SemiFooter from "../../components/Footer/Footer";
import "./Error.sass";

const { Header, Content, Footer } = Layout;

export default function Error() {
  return (
    <Layout className="error-layout">
      <Header>
        <SemiHeader />
      </Header>
      <Content className="error-content">
        <Empty
          image={
            <IllustrationConstruction style={{ width: 150, height: 150 }} />
          }
          darkModeImage={
            <IllustrationConstructionDark style={{ width: 150, height: 150 }} />
          }
          title={"功能建设中"}
          description="当前功能暂未开放，敬请期待。"
        />
      </Content>
      <Footer>
        <SemiFooter />
      </Footer>
    </Layout>
  );
}
