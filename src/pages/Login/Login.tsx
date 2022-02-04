import { IconLock, IconUser } from "@douyinfe/semi-icons";
import {
  Form,
  Row,
  Col,
  Layout,
  Button,
  Notification,
} from "@douyinfe/semi-ui";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getValidateCode, login } from "../../api/login";
import SemiFooter from "../../components/Footer/Footer";
import SemiHeader from "../../components/Header/Header";
import "./Login.css";

const { Input } = Form;
const { Header, Content, Footer } = Layout;

export default function Login() {
  let navigate = useNavigate();
  interface captchaObject {
    url: string;
    code: string;
  }
  const [captcha, setCaptcha] = useState<captchaObject>({
    url: "void",
    code: "void",
  });
  const Captcha = () => {
    getValidateCode().then((res) => {
      console.log(res);
      let contentType = res.headers["content-type"];
      let captchaImageBlob = new Blob([res.data], { type: contentType });
      let captchaImageUrl = URL.createObjectURL(captchaImageBlob);
      setCaptcha(() => {
        return {
          url: captchaImageUrl,
          code: res.headers["captcha"],
        };
      });
    });
  };
  const Login = (values: any) => {
    console.log(values);
    values.username &&
      values.password &&
      values.captcha &&
      login(
        values.username,
        values.password,
        values.captcha,
        captcha.code
      ).then((res) => {
        console.log(res, res.data.success, res.data.data.role);
        if (res.data.success === true) {
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("role", res.data.data.role);
          switch (parseInt(res.data.data.role)) {
            case 0:
              navigate("/student");
              break;
            case 1:
              navigate("/admin");
              break;
            case 2:
              navigate("/superadmin");
              break;
            default:
              Notification.open({
                title: "服务器错误",
                content:
                  "服务器返回了预期之外的数据，请联系系统管理员以解决该问题！",
                duration: 3,
              });
          }
        }
      });
  };

  useEffect(() => {
    Captcha();
  }, []);

  return (
    <Layout className="login-layout">
      <Header>
        <SemiHeader text="新柚杯比赛系统" />
      </Header>
      <Content style={{ paddingTop: "15vh", paddingBottom: "15vh" }}>
        <Row type="flex" justify="center" align="middle">
          <Col style={{ width: "270px" }}>
            <Form
              render={({ values }) => (
                <>
                  <Input
                    prefix={<IconUser />}
                    field="username"
                    label="用户名"
                    rules={[{ required: true, message: "请填写用户名！" }]}
                  />
                  <Input
                    prefix={<IconLock />}
                    field="password"
                    label="密码"
                    mode="password"
                    rules={[{ required: true, message: "请填写密码！" }]}
                  />
                  <Row style={{ display: "flex", flexDirection: "row" }}>
                    <div className="captcha-input">
                      <Input
                        field="captcha"
                        label="验证码"
                        rules={[{ required: true, message: "请填写验证码！" }]}
                      />
                    </div>
                    <img
                      className="captcha-image"
                      style={{}}
                      src={captcha.url}
                      alt="Captcha"
                      onClick={() => {
                        Captcha();
                      }}
                    />
                  </Row>
                  <Button
                    theme="solid"
                    type="primary"
                    htmlType="submit"
                    onClick={() => {
                      Login(values);
                    }}
                    style={{ width: "100%", marginTop: "12px" }}
                  >
                    登录
                  </Button>
                </>
              )}
            ></Form>
          </Col>
        </Row>
      </Content>
      <Footer>
        <SemiFooter />
      </Footer>
    </Layout>
  );
}
