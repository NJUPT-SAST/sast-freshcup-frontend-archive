import { Row, Col } from "@douyinfe/semi-ui";
import { IconComment, IconGithubLogo, IconMail } from "@douyinfe/semi-icons";
import "./Footer.sass";

export default function SemiFooter() {
  return (
    <div
      style={{
        padding: "20px",
        color: "var(--semi-color-text-2)",
        backgroundColor: "rgba(var(--semi-grey-0), 1)",
      }}
    >
      <Row type="flex" align="top">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9, offset: 2 }}>
          <p>Igniting the Thought!</p>
          <p style={{ wordBreak: "keep-all" }}>
            南京邮电大学大学生科学技术协会（简称SAST）是在校团委指导下，独立展开活动的学生科技文化及学术研究组织。
          </p>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9, offset: 2 }}>
          <p
            style={{
              fontSize: "20px",
              marginTop: "14px",
              marginBottom: "10px",
            }}
          >
            Contact Us
          </p>
          <span className="footer-link">
            <IconMail className="footer-icon" />
            <a href="mailto:sast@njupt.edu.cn">Mail to us</a>
          </span>
          <span className="footer-link">
            <IconGithubLogo className="footer-icon" />
            <a href="https://github.com/NJUPT-SAST-Technology-Center">Github</a>
          </span>
          <span className="footer-link">
            <IconComment className="footer-icon" />
            <span>QQ 2595331904</span>
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 22, offset: 2 }}>
          <p>Copyright © NJUPT.SAST 1992-2022</p>
        </Col>
      </Row>
    </div>
  );
}
