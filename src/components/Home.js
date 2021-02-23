import React from 'react'
import styles from '../Home.module.css'

export class Home extends React.Component {
  render () {
    return (
      <div className={styles.main}>
        <div className={styles.header}>Text Compare</div>
        <div className={styles.row}>
          <input type='text' placeholder='Left' className={styles.column} />
          <input type='text' placeholder='Right' className={styles.column} />
        </div>
      </div>
    )
  }
}

export default Home
