import React from 'react'
import styles from "./ContentBlock.module.css"
import RandomBars from './RandomBars'
import UserSearchBar from './UserSearchBar'
import TableComponent from '../components/table/TableComponent'

const ContentBlock = () => {
  return (
    <div className={styles.container}>
        <div className={styles.bodyContainer}>
            <div className={styles.dashboardHeader}>
                <h1>Dashboard</h1>
                <span>01 - 25 March, 2020</span>
            </div>
            <RandomBars/>
            <UserSearchBar/>
            <TableComponent data={[{Name:"some",Email:"ss",Phone:"ss",Status:"sbdbu"}]}/>
        </div>
    </div>
  )
}

export default ContentBlock