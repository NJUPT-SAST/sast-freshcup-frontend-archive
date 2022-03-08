import { Layout } from "@douyinfe/semi-ui";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import SemiHeader from "../../components/Header/Header";
import "./Student.sass";

const { Header, Content, Footer } = Layout;

export default function Student() {
  const [title, setTitle] = useState('第七届新柚杯计算机基础能力竞赛')

  return (
    <Layout className="layout">
      <Header>
        <SemiHeader text={title} logout={true} />
      </Header>
      <Outlet />
      <Footer></Footer>
    </Layout>
  );
}
