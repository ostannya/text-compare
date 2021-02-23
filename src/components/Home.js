import React from 'react'
import styles from '../Home.module.css'

export class Home extends React.Component {
  render () {
    return (
      <div className={styles.main}>
        <div className={styles.header}>Text Compare</div>

        <div className={styles.diffInputs}>
          <div className={styles.diffInput}>
            <div className={styles.diffInputHeader}>Original Text</div>
            <div role='textbox' contentEditable='true' aria-placeholder='Left' className={styles.diffInputOriginal} />
          </div>
          <div className={styles.diffInput}>
            <div className={styles.diffInputHeader}>Changed Text</div>
            <div role='textbox' contentEditable='true' aria-placeholder='Left' className={styles.diffInputChanged} />
          </div>
        </div>
        <button type='submit' className={styles.compareButton}>Compare</button>

      </div>
    )
  }
}

export default Home
