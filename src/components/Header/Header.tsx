import { Button, Typography, Col, Row } from "@douyinfe/semi-ui";
import { IconExit } from "@douyinfe/semi-icons";
import SASTLogo from "../../assets/images/sast-logo.png";
import "./Header.sass";
import { Navigate, useNavigate } from "react-router-dom";

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
          onClick={()=>{
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            navigate("/");
          }}
        >
          退出登录
        </Button>
      );
    } else return null;
  }

  return (
    <div className="header-content">
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
          <img className="sast-logo" src={SASTLogo} alt="SAST" />
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
