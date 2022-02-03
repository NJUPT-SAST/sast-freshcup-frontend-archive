import { IconComment, IconGithubLogo, IconMail } from "@douyinfe/semi-icons";
import { Row, Col, Typography } from "@douyinfe/semi-ui";
import "./Footer.css";

const { Text } = Typography;

export default function SemiFooter() {
  return (
    <div
      style={{
        padding: "20px",
        color: "var(--semi-color-text-2)",
        backgroundColor: "rgba(var(--semi-grey-0), 1)",
      }}
    >
      <Row type="flex" align="middle">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9, offset: 2 }}>
          <p>Igniting the Thought!</p>
          <p>
            南京邮电大学大学生科学技术协会（简称SAST）是在校团委指导下，独立展开活动的学生科技文化及学术研究组织。
          </p>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 9, offset: 2 }}>
          <span className="footer-title">Contact Us</span>
          <div className="footer-link">
            
            <a href="mailto:sast@njupt.edu.cn"><IconMail className="footer-icon" />Mail to us</a>
          </div>
          <div className="footer-link">
            <div style={{scale:1.5}}></div>
            
            <a href="https://github.com/NJUPT-SAST-Technology-Center"><IconGithubLogo className="footer-icon" />Github</a>
          </div>
          <div className="footer-link">
            
            <span><IconComment size="inherit" className="footer-icon" />QQ 2595331904</span>
          </div>
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
