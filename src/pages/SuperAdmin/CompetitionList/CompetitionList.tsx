import { Link } from "react-router-dom";
import { Layout } from "@douyinfe/semi-ui";

const { Content } = Layout;

export default function CompetitionList() {
  return (
    <Layout>
      <Content
        style={{
          padding: "24px",
          backgroundColor: "var(--semi-color-bg-0)",
        }}
      >
        List<Link to="1">To</Link>
      </Content>
    </Layout>
  );
}
