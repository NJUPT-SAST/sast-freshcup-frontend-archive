import { Form, Row, Col, Layout, Button } from "@douyinfe/semi-ui";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Login.css";

const { Input } = Form;
const { Header, Content } = Layout;

export default function Login() {
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
                    <Input field="UserName" label="用户名" />
                    <Input mode="password" field="Password" label="密码" />
                    <code style={{ marginTop: 30 }}>
                      {JSON.stringify(formState)}
                    </code>
                    <Button onClick={()=>{}}>登录</Button>
                    <Link to="/Student">Student</Link>
                    <Link to="/Admin">Admin</Link>
                  </>
                )}
                layout="vertical"
                onValueChange={(values) => console.log(values)}
              ></Form>
            </Col>
          </Row>
        </Content>
        {/* <Footer /> */}
      </Layout>
  );
}
