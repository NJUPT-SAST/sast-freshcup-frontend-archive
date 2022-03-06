import { Typography } from '@douyinfe/semi-ui';
import { Upload, Button } from '@douyinfe/semi-ui';
import { IconUpload } from '@douyinfe/semi-icons';
import "./StudentAccount.sass"

const { Title } = Typography;

export default function StudentAccount() {
  return (
  <>
    <div className='inputGroup'>
      <Title heading={6} className="title">导入学号</Title>
      <Upload accept='.csv'>
        <Button icon={<IconUpload />} theme="light">
              {' '}选择文件{' '}
        </Button>
        <span style={{marginLeft:10,color:'gray',fontSize:13}}>支持 CSV 格式</span>
      </Upload>
    </div>
    <div className='inputGroup'>
      <Button theme='solid' type='primary'>提交</Button>
    </div>
  </>
  );
}
