import { Fragment, useState } from "react";
import { Col, Layout, Row, Button, Typography, Anchor, TextArea, Banner } from '@douyinfe/semi-ui'
import { IconArrowLeft, IconArrowRight, IconBell, IconSend } from '@douyinfe/semi-icons'
import './TaskType/Subjective/Subjective'
import Subjective from "./TaskType/Subjective/Subjective";
import './Task.sass'
import SingleSelect from "./TaskType/SingleSelect/SingleSelect";
import MultiSelect from "./TaskType/MultiSelect/MultiSelect";

const { Content } = Layout

export default function Task() {
    const Tasks = ['南邮仙林自行车停放场1', '南邮仙林自行车停放场2', '南邮仙林自行车停放场3']
    const [TimeLast, setTimeLast] = useState('6:30')
    const [TaskTitle, setTaskTitle] = useState(Tasks[0])
    return (
        <Fragment>
            <Layout>
                <Content>
                    <Row type='flex' justify='space-around' align='middle' className='main'>
                        <Col span={4} className='SideFixLeft'>
                            <Button icon={<IconBell />} theme="solid" className='TimeLast'>{TimeLast}</Button>
                            <Anchor scrollMotion={true} style={{ marginTop: 20, fontSize: 16 }}>
                                <Anchor.Link href='#Subjective' title={'南邮仙林自行车停放场1'} />
                                <Anchor.Link href='#SingleSelect' title={'南邮仙林自行车停放场1'} />
                                <Anchor.Link href='#MultiSelect' title={'南邮仙林自行车停放场1'} />
                            </Anchor>
                        </Col>
                        <Subjective />
                        <SingleSelect />
                        <MultiSelect />
                        <Col span={4} style={{ textAlign: "right" }} className='SideFixRight'>
                            <Banner
                                title='提示公告：'
                                type='info'
                                fullMode={false}
                                bordered
                                description='本题的xx选项有误，更改为xxxx，敬请留意'
                            ></Banner>
                            <Button icon={<IconSend />} theme="solid" style={{ marginTop: 20 }}>提交试卷</Button>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Fragment>
    )
}