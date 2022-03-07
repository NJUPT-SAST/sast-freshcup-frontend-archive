import { Button, Layout, Pagination, Row, Col, Card, Space, Typography, ButtonGroup } from "@douyinfe/semi-ui";
import { IconPlusCircle } from "@douyinfe/semi-icons";
import { getIssuesList, deleteIssue } from "../../../../api/admin";
import { useState, useEffect, SetStateAction } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const { Content, Footer, Sider } = Layout;
const CardItem = (props: any) => {
  const navigate = useNavigate();
  const { problemName } = props.item;
  const deleteit = () => {
    deleteIssue(
      props.item.id.toString(),
      localStorage.getItem("token"),
    )
      .then((res) => {
        // console.log(props.item.id.toString());
        // console.log(localStorage.getItem("token"));
        if (res.data.success === true) {
          // console.log("ok");
        } else {
          console.log(res.data.errMsg);
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <Card
      shadows="hover"
      style={{ height: 64 }}
      title={problemName}
      headerExtraContent={
        <ButtonGroup size='small'>
          <Button
            type='tertiary'
            onClick={() => {
              navigate(`/admin/correct/${props.item.id}`);
            }}
          >批改</Button>
          <Button
            type='primary'
            onClick={() => {
              navigate(`edit`, { state: 2 });
            }}
          >
            编辑
          </Button>
          <Button
            type='danger'
            onClick={() => {
              deleteit();
            }}
          >删除</Button>
        </ButtonGroup>
      }
      bodyStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
    </Card>
  );
};

export default function IssuesList() {
  const navigate = useNavigate();
  const PageSize = 10
  const { id } = useParams();
  const [IssuesList, setIssuesList] = useState([]);
  const [Total, setTotal] = useState(0);
  const [PageNum, setPageNum] = useState(1);
  const onPageChange = (currentPage: SetStateAction<number>) => {
    setPageNum(currentPage);
    getIssuesList(
      id,
      currentPage.toString(),
      PageSize.toString(),
      localStorage.getItem("token")
    )
      .then((res) => {
        //console.log(res.data);
        if (res.data.success === true) {
          // console.log(res.data.data.records);
          setIssuesList(res.data.data.records);
          setTotal(res.data.data.total);
        } else {
          console.log(res.data.errMsg);
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  useEffect(() => {
    getIssuesList(id, "1", PageSize.toString(), localStorage.getItem("token"))
      .then((res) => {
        //console.log(res.data);
        if (res.data.success === true) {
          // console.log(res.data.data.records);
          setIssuesList(res.data.data.records);
          setTotal(res.data.data.total);
        } else {
          console.log(res.data.errMsg);
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  return (
    <Layout>
      <Layout>
        <Sider
          style={{
            width: "40px",
          }}
        />
        <Content
          style={{
            width: "640px",
            padding: "48px",
            backgroundColor: "var(--semi-color-bg-0)",
          }}
        >
          <Row gutter={[72, 24]}>

            {IssuesList.length > 0 &&
              IssuesList.map((item) => (
                <Col span={24}>
                  <CardItem item={item} />
                </Col>
              ))}
          </Row>
        </Content>
        <Sider
          style={{
            width: "40px",
          }}
        />
        <Content
          style={{
            padding: "48px",
            backgroundColor: "var(--semi-color-bg-0)",
          }}
        >
          <Button
            theme="solid"
            type="primary"
            style={{ marginRight: 8 }}
            icon={<IconPlusCircle />}
            onClick={() => {
              navigate(`new`, { state: 1 });
            }}
          >
            创建题目
          </Button>
        </Content>
        <Sider
          style={{
            width: "40px",
          }}
        />
      </Layout>
      <Row type="flex" justify="center" align="middle">
        <Col>
          <Pagination
            showTotal
            total={Total}
            pageSize={PageSize}
            currentPage={PageNum}
            onPageChange={onPageChange}
            style={{ marginBottom: 12, alignContent: "center" }}
          ></Pagination>
        </Col>
      </Row>
      <Footer></Footer>
    </Layout>
  );
}
