import { Form, Notification, Typography, useFormApi } from '@douyinfe/semi-ui';
import { Button } from '@douyinfe/semi-ui';
import { AxiosResponse } from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { editContestSettings, getContestDetailed } from '../../../../api/superadmin';
import "./CompetitionSetting.sass"

const { Title } = Typography;

export default function CompetitionSetting() {
  const [loading, setLoading] = useState(false);
  const competitionData = useParams()
  const competitionId = competitionData.id ? competitionData.id : ""
  const [competitionInfo, setCompetitionInfo] = useState<any>()
  /**
   * 在这里获取到 FormApi 对表单进行操作
   * @returns 返回表单的提交按钮
   */
  const CompetitionSettingForm = () => {
    const formApi = useFormApi();
    useEffect(() => {
      setTimeout(() => {
        formApi.setValue("name", competitionInfo.data.name)
        formApi.setValue("description", competitionInfo.data.description)
        formApi.setValue("start", competitionInfo.data.start)
        formApi.setValue("end", competitionInfo.data.end)
      }, 1)
    }, [formApi, competitionInfo])
    return (
      <div className='inputGroup'>
        <Button theme='solid' type='primary' htmlType='submit' loading={loading}>提交</Button>
      </div>
    )
  }
  /**
   * 处理表单提交
   * @param values 表单的数据
   */
  function handleSubmit(values: Record<string, any>) {
    if (values.name !== undefined && values.start !== undefined && values.end !== undefined && values.description !== undefined) {
      setLoading(true)
      editContestSettings(competitionId, values.name, values.start, values.end, values.description).then((res: AxiosResponse) => {
        if (res.data.data === 'success') {
          setCompetitionInfo({ name: values.name, description: values.description, start: values.start, end: values.end })
          setLoading(false)
          Notification.success({
            title: '😄️ 修改成功',
            duration: 2,
            position: 'top',
          })
          setCompetitionInfo({ name: values.name, description: values.description, start: values.start, end: values.end })
        }
      }).catch(err => {
        setLoading(false)
        Notification.error({
          title: '😭️ 修改失败，请联系管理员',
          duration: 2,
          position: 'top',
          content: err.message
        })
      })
    }
  }

  //获取比赛详情
  useEffect(() => {
    getContestDetailed(competitionId).then((res) => {
      setCompetitionInfo(res.data)
    })
  }, [])

  return (
    <Fragment>
      <Form render={({ values, formApi }) => (
        <Fragment>
          <div className='inputGroup'>
            <Title heading={6} className="title">比赛名称</Title>
            <Form.Input className="input" name='name' required field='name' rules={[{required: true, message:'请填写信息'}]} disabled={loading} noLabel placeholder='请填写比赛名称'></Form.Input>
          </div>
          <div className='inputGroup'>
            <Title heading={6} className="title">比赛时间</Title>
            <div className='datePicker'>
              <div className='input'>
                <Form.Label>开始</Form.Label>
                <Form.DatePicker type="dateTime" density="compact" rules={[{required: true, message:'请填写信息'}]} field='start' disabled={loading} name='start' noLabel />
              </div>
              <div className='input'>
                <Form.Label>结束</Form.Label>
                <Form.DatePicker type="dateTime" density="compact" rules={[{required: true, message:'请填写信息'}]} field='end' disabled={loading} name='end' noLabel />
              </div>
            </div>
          </div>
          <div className='inputGroup'>
            <Title heading={6} className="title">比赛描述</Title>
            <Form.TextArea className='input' name='description' required rules={[{required: true, message:'请填写信息'}]} field='description' disabled={loading} noLabel placeholder='请填写比赛的描述' />
          </div>
          <CompetitionSettingForm />
        </Fragment>
      )} onSubmit={(values) => { handleSubmit(values) }} />
    </Fragment>
  )
}

