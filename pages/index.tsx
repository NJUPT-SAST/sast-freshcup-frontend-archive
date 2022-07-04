import React from 'react'
import type { NextPage } from 'next'
import { Switch } from '@douyinfe/semi-ui'
import styles from './index.module.scss'

const Index: NextPage = () => {
  return (
    <div>
      <h1 className={styles.text}>sast-freshcup-frontend-refresh</h1>
      <Switch
        defaultChecked={true}
        onChange={(v, e) => console.log(v, e)}
        aria-label="a switch for semi demo"
      ></Switch>
    </div>
  )
}

export default Index
