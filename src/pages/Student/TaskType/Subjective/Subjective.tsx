import { Col, Layout, Row, Button, Typography,Anchor,TextArea } from '@douyinfe/semi-ui'
import { IconBell } from '@douyinfe/semi-icons'
import './Subjective.sass'
import { useState } from 'react'

const { Content } = Layout
const { Title,Paragraph } = Typography

export default function Subjective() {
    const Tasks=['南邮仙林自行车停放场1','南邮仙林自行车停放场2','南邮仙林自行车停放场3']
    const [TimeLast, setTimeLast] = useState('6:30')
    const [TaskTitle, setTaskTitle] = useState(Tasks[0])
    console.log(Tasks[0])
    return (
        <Layout>
            <Content>
                <Row type='flex' justify='space-around' align='middle' className='main'>
                    <Col span={4}>
                        <Button icon={<IconBell />} theme="solid" className='TimeLast'>{TimeLast}</Button>
                        <Anchor style={{marginTop:20,fontSize:16}}>
                            <Anchor.Link href='#title' title={'南邮仙林自行车停放场1'} />
                            <Anchor.Link href='/student/SingleSelect' title={'南邮仙林自行车停放场1'} />
                            <Anchor.Link href='/student/MultiSelect' title={'南邮仙林自行车停放场1'} />
                        </Anchor>
                    </Col>
                    <Col span={12}>
                        <Title heading={2} id='title'>{TaskTitle}</Title>
                        <Paragraph spacing='extended' style={{fontSize:17}}>好消息！南邮规划建设自行车停放场，现已选定多个场地，它们均为规则多边形。
                            现请你帮助学校确定哪块场地面积最大，这里以鼎山之顶为平面坐标原点，按顺时针或逆时针给出顶点坐标。
                            <Title heading={3}>输入</Title>
                            输入数据中含有一些多边形场地（1≤数量≤20），按输入顺序编号（从1开始）。每个多边形场地的第一行数据n（3≤n≤10），后续n行分别给出顶点的平面坐标（平面两个坐标的绝对值≤50）。
                            <Title heading={3}>输出</Title>
                            输出面积最大的多边形场地序号。当面积最大的多边形场地有多个时，输出这些场地中的最小序号
                        </Paragraph>
                        <TextArea maxCount={1000} style={{marginTop:100}}/>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </Content>
        </Layout>
    )
}