import {
  Form,
  Row,
  Col,
  Layout,
  Button,
  Notification,
} from "@douyinfe/semi-ui";
import { IconLock, IconUser } from "@douyinfe/semi-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getValidateCode, login } from "../../api/login";
import SemiHeader from "../../components/Header/Header";
import SemiFooter from "../../components/Footer/Footer";
import VoidCaptcha from "../../assets/images/void-captcha.png";
import "./Login.sass";

const { Header, Content, Footer } = Layout;

export default function Login() {
  let navigate = useNavigate();
  interface captchaObject {
    url: string;
    code: string;
  }
  const [captcha, setCaptcha] = useState<captchaObject>({
    url: VoidCaptcha,
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
    <Layout className="login-layout">
      <Header>
        <SemiHeader text="新柚杯比赛系统" />
      </Header>
      <Content
        style={{
          padding: "15vh 24px",
          backgroundColor: "var(--semi-color-bg-0)",
        }}
      >
        <Row type="flex" justify="center" align="middle">
          <Col style={{ width: "270px" }}>
            <Form
              render={({ formApi, values }) => (
                <>
                  <Form.Input
                    prefix={<IconUser />}
                    field="username"
                    label="用户名"
                    rules={[{ required: true, message: "请填写用户名！" }]}
                  />
                  <Form.Input
                    prefix={<IconLock />}
                    field="password"
                    label="密码"
                    mode="password"
                    rules={[{ required: true, message: "请填写密码！" }]}
                  />
                  <Row style={{ display: "flex", flexDirection: "row" }}>
                    <div className="captcha-input">
                      <Form.Input
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
                        formApi.setValue("captcha", null);
                      }}
                    />
                  </Row>
                  <Button
                    theme="solid"
                    type="primary"
                    htmlType="submit"
                    onClick={() => {
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
                          if (res.data.success === true) {
                            console.log(
                              res,
                              res.data.success,
                              res.data.data.role
                            );
                            localStorage.setItem("token", res.data.data.token);
                            localStorage.setItem("role", res.data.data.role);
                            Notification.success({
                              title: "登录成功",
                              duration: 1,
                            });
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
                          } else {
                            console.log(res);
                            Notification.error({
                              title: "登录失败",
                              content: res.data.errMsg,
                              duration: 3,
                            });
                            formApi.setValue("captcha", null);
                            Captcha();
                          }
                        });
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
