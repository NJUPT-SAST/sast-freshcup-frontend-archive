import { Button, Typography, Col, Row } from "@douyinfe/semi-ui";
import { IconExit } from "@douyinfe/semi-icons";
import SASTLogo from "../../assets/images/sast-logo.png";
import "./Header.sass";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export default function SemiHeader(props: any) {
  const navigate = useNavigate();
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
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            navigate("/");
          }}
        >
          注销
        </Button>
      );
    } else return null;
  }

  return (
    <div className="header-content">
      <Row type="flex" justify="center" align="middle">
        <Col className="sast-logo-wrapper" span={4}>
          <img className="sast-logo" src={SASTLogo} alt="SAST" />
        </Col>
        <Col className="title-wrapper" span={16}>
          <Title heading={5}>{props.text}</Title>
        </Col>
        <Col className="logout-wrapper" span={4}>
          <LogoutButton />
        </Col>
      </Row>
    </div>
  );
}
