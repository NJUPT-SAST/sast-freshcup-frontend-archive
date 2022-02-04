import { Button, Typography, Col, Row } from "@douyinfe/semi-ui";
import { IconExit } from "@douyinfe/semi-icons";
import SASTLogo from "../../assets/images/sast-logo.png";
import "./Header.css";

const { Title } = Typography;

export default function SemiHeader(props: any) {
  function LogoutButton() {
    if (props.logout) {
      return (
        <Button
          theme="borderless"
          icon={<IconExit size="large" />}
          style={{
            color: "var(--semi-color-text-2)",
            marginRight: "12px",
          }}
        >
          退出登录
        </Button>
      );
    } else return null;
  }

  return (
    <div
      style={{
        height: "60px",
        overflow: "hidden",
        backgroundColor: "var(--semi-color-bg-1)",
        borderBottom: "1px solid var(--semi-color-border)",
      }}
    >
      <Row type="flex" justify="center" align="middle">
        <Col
          xs={{ span: 0 }}
          sm={{ span: 0 }}
          md={{ span: 4 }}
          style={{
            display: "flex",
            justifyContent: "left",
            paddingLeft: "16px",
          }}
        >
          <img
            src={SASTLogo}
            alt="SAST"
            style={{ height: "52px", marginTop: "4px", marginBottom: "4px" }}
          ></img>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 16 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Title heading={5}>{props.text}</Title>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 4 }}
          style={{ display: "flex", justifyContent: "right" }}
        >
          <LogoutButton />
        </Col>
      </Row>
    </div>
  );
}
