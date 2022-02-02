import {
  Form,
  Row,
  Col,
  Layout,
  Button,
  Notification,
} from "@douyinfe/semi-ui";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getValidateCode, login } from "../../api/login";
import Footer from "../../components/Footer/Footer";
import "./Login.css";

const { Input } = Form;
const { Header, Content } = Layout;

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
  useEffect(() => {
    Captcha();
  }, []);
  return (
    <Layout>
      <Content>
        <Row
          type="flex"
          justify="center"
          align="middle"
          // gutter={{ xs: 16, sm: 16, md: 16, lg: 24, xl: 24, xxl: 24 }}
          className="login-form"
        >
          <Col xs={14} sm={14} md={4} lg={4} xl={4}>
            <Form
              render={({ formState, formApi, values }) => (
                <>
                  <Input field="username" label="用户名" />
                  <Input field="password" label="密码" mode="password" />
                  <Input
                    field="captcha"
                    label="验证码"
                    rules={[{ required: true, message: "请填写验证码！" }]}
                  />
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={captcha.url}
                    alt="Captcha"
                    onClick={() => {
                      Captcha();
                    }}
                  ></img>
                  <code style={{ marginTop: 30 }}>
                    {JSON.stringify(formState)}
                  </code>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={() => {
                      console.log(formState);
                      login(
                        formState.values.username,
                        formState.values.password,
                        formState.values.captcha,
                        captcha.code
                      ).then((res) => {
                        console.log(res, res.data.success, res.data.data.role);
                        if (res.data.success === true) {
                          localStorage.setItem("token", res.data.token);
                          localStorage.setItem("role", res.data.role);
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
                    }}
                  >
                    登录
                  </Button>
                  <Link to="/Student">Student</Link>
                  <Link to="/Admin">Admin</Link>
                </>
              )}
              layout="vertical"
            ></Form>
          </Col>
        </Row>
      </Content>
      {/* <Footer /> */}
    </Layout>
  );
}
