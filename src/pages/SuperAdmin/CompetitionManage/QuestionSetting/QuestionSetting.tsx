import { Typography } from '@douyinfe/semi-ui';
import './QuestionSetting.sass'

const {Title} = Typography

export default function QuestionSetting() {
  return (
    <>
      <div className='inputGroup'>
      <Title heading={6} className="title">题目设置</Title>
      <div>拖拽列表</div>
      </div>
    </>
    );
}
