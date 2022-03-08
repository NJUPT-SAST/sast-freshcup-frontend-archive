import { Col, Layout, Row, Button } from "@douyinfe/semi-ui";
import { Link, Outlet } from "react-router-dom";
import './CompetitionList.sass'

const {Content} = Layout

export default function CompetitionList(){
    return(
      <Layout>
        <Content>
          <Row type="flex" justify="center" align="middle">
            <Col className="contestList">contest list</Col>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <Col>
              <Link to='./subjective'><Button theme='solid' type='primary'>进入比赛</Button></Link>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
}