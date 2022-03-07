import { Typography } from '@douyinfe/semi-ui';
import { Input,TextArea } from '@douyinfe/semi-ui';
import { DatePicker } from '@douyinfe/semi-ui';
import { Button } from '@douyinfe/semi-ui';
import "./CompetitionSetting.sass"

const { Title } = Typography;

export default function CompetitionSetting() {
  return (
    <>
    <div className='inputGroup'>
      <Title heading={6} className="title">比赛名称</Title>
      <Input className="input"></Input>
    </div>
    <div className='inputGroup'>
      <Title heading={6} className="title">比赛名称</Title>
      <DatePicker type="dateTime" density="compact" />
    </div>
    <div className='inputGroup'>
      <Title heading={6} className="title">比赛描述</Title>
      <TextArea className='input'/>
    </div>
    <div className='inputGroup'>
      <Button theme='solid' type='primary'>提交</Button>
    </div>
    </>
  )
}
