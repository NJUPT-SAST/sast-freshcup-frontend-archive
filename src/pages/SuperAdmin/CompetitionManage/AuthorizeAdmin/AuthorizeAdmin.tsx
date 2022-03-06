import { Typography } from '@douyinfe/semi-ui';
import { Upload, Button } from '@douyinfe/semi-ui';
import { IconUpload } from '@douyinfe/semi-icons';
import './AuthorizeAdmin.sass'

const { Title } = Typography;

export default function AuthorizeAdmin() {
  return (
    <>
      <div className='inputGroup'>
        <Title heading={6} className="title">批量生成</Title>
        <Upload accept='.csv'>
          <Button icon={<IconUpload />} theme="light">
                {' '}
                选择文件{' '}
          </Button>
          <span style={{marginLeft:10,color:'gray',fontSize:13}}>支持 CSV 格式</span>
          <Button theme='solid' type='primary' style={{marginLeft:20}}>下载账号</Button>
        </Upload>
      </div>
      <div className='inputGroup'>
        <Title heading={6} className="title">批改授权</Title>
        <Upload accept='.csv'>
          <Button icon={<IconUpload />} theme="light">
                {' '}选择文件{' '}
          </Button>
          <span style={{marginLeft:10,color:'gray',fontSize:13}}>支持 CSV 格式</span>
          <Button theme='solid' type='primary' style={{marginLeft:20}}>执行授权</Button>
        </Upload>
      </div>
    </>
    );
}
