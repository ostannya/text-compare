import React from 'react'
import styles from '../Home.module.css'
import sanitizeHtml from 'sanitize-html'

window.onload = function () {
  const original = document.getElementById('originalInput')
  const button = document.getElementById('button')
  button.addEventListener('click', () => {
    console.log('Clicked')
    console.log(original.value)
  })

  const clean = sanitizeHtml(original, {
    allowedTags: [],
    allowedAttributes: {}
  })
}

export class Home extends React.Component {
  render () {
    return (
      <div className={styles.main}>
        <div className={styles.header}>Text Compare</div>

        <div className={styles.diffInputs}>
          <div className={styles.diffInput}>
            <div className={styles.diffInputHeader}>Original Text</div>
            <textarea spellCheck='false' placeholder='Left' className={styles.diffInputText} id='originalInput' />
          </div>
          <div className={styles.diffInput}>
            <div className={styles.diffInputHeader}>Changed Text</div>
            <textarea spellCheck='false' placeholder='Right' className={styles.diffInputText} />
          </div>
        </div>
        <button type='submit' className={styles.compareButton} id='button'>Compare</button>

      </div>
    )
  }
}

export default Home
