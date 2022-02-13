import React from 'react';
import { ArrayField, Button, Col, Form, Layout, Row } from "@douyinfe/semi-ui";
import SemiHeader from "../../../../../components/Header/Header";
import Sider from "@douyinfe/semi-ui/lib/es/layout/Sider";
import { IconMinusCircle, IconPlusCircle } from '@douyinfe/semi-icons';
const { Header, Content, Footer } = Layout;

export default function EditIssues() {
    return (
        <Layout>
            <Header>
                <SemiHeader text="新柚杯比赛管理系统" logout={true} />
            </Header>
            <Layout>
                <Sider
                    style={{
                        width: "40px"
                    }} />
                <Content
                    style={{
                        padding: "48px",
                        backgroundColor: "var(--semi-color-bg-0)",
                    }}
                >
                    <Form layout='vertical' onValueChange={values => console.log(values)}>

                        {({ formState }) => (
                            <React.Fragment>
                                <Form.Input field='Issue' label='题目名称' style={{ width: 320 }} />
                                <Form.Select field="Type" label='题型' style={{ width: 160 }}>
                                    <Form.Select.Option value="select">选择题</Form.Select.Option>
                                    <Form.Select.Option value="answer">简答题</Form.Select.Option>
                                </Form.Select>
                                <Form.TextArea
                                    style={{ width: 320, height: 120 }}
                                    field='DescripForIssue'
                                    label='题目描述'
                                    placeholder='题目描述'
                                />
                                <ArrayField field='OptionForIssue' >
                                    {({ add, arrayFields }) => (
                                        <React.Fragment>
                                            <Button onClick={add} icon={<IconPlusCircle />} theme='light'>新增空白选项</Button>
                                            {
                                                arrayFields.map(({ field, key, remove }, i) => (
                                                    <div key={key} style={{ width: 1000, display: 'flex' }}>
                                                        <Form.TextArea
                                                            field={`${field}[name]`}
                                                            label={`选项：（${field}.name）`}
                                                            style={{ width: 320, height: 60 }}
                                                        >
                                                        </Form.TextArea>
                                                        <Button type='danger' theme='borderless' icon={<IconMinusCircle />} onClick={remove} style={{ margin: 12 }}></Button>
                                                    </div>
                                                ))
                                            }
                                        </React.Fragment>
                                    )}
                                </ArrayField>
                                <Row>
                                    <Col span={4}>
                                        <Form.Switch field="isChecked" label='自动批改'>
                                        </Form.Switch>
                                    </Col>
                                    <Col span={8}>
                                        {formState.values.isChecked === true ? (
                                            <Form.Select field="CorrectAnswer" label='正确答案' style={{ width: 160 }}>
                                                <Form.Select.Option value={1}>1</Form.Select.Option>
                                                <Form.Select.Option value={2}>2</Form.Select.Option>
                                                <Form.Select.Option value={3}>3</Form.Select.Option>
                                            </Form.Select>
                                        ) : null}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={3}>
                                        <Button theme='solid' type='danger' style={{ margin: 8 }}>删除</Button>
                                    </Col>
                                    <Col span={3}>
                                        <Button theme='solid' type='primary' style={{ margin: 8 }}>放弃编辑</Button>
                                    </Col>
                                    <Col span={3}>
                                        <Button theme='solid' type='secondary' style={{ margin: 8 }}>保存</Button>
                                    </Col>
                                </Row>
                            </React.Fragment>
                        )}
                    </Form>
                </Content>
                <Sider
                    style={{
                        width: "40px"
                    }} />
                <Content
                    style={{
                        padding: "48px",
                        backgroundColor: "var(--semi-color-bg-0)",
                    }}
                >
                </Content>
                <Sider
                    style={{
                        width: "40px"
                    }} />
            </Layout>

            <Footer></Footer>
        </Layout>
    );
}