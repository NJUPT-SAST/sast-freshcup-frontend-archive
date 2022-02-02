import { IconComment, IconGithubLogo, IconMail } from "@douyinfe/semi-icons";
import { Row, Col } from "@douyinfe/semi-ui";
import "./Footer.css";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        color: "var(--semi-color-text-2)",
        backgroundColor: "rgba(var(--semi-blue-9), 1)",
      }}
    >
      <Row>
        <Col>
          <p>Igniting the Thought!</p>
          <p>南京邮电大学大学生科学技术协会（简称SAST）是在校团委指导下，</p>
          <div>独立展开活动的学生科技文化及学术研究组织。</div>
          <div>Copyright © NJUPT.SAST 1992-2021</div>
        </Col>
        <Col>
          <div>
            <span style={{ fontSize: "20px" }}>Contact Us</span>
          </div>
          <div>
            <a href="mailto:sast@njupt.edu.cn">
              <span>
                <IconMail />
              </span>
              <span>Mail to us</span>
            </a>
          </div>
          <div>
            <a href="https://github.com/NJUPT-SAST-Technology-Center">
              <span>
                <IconGithubLogo />
              </span>
              <span>Github</span>
            </a>
          </div>
          <div>
            <span>
              <IconComment />
            </span>
            <span>QQ 2595331904</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
