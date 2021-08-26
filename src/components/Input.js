import React from 'react'
import styles from '../Input.module.css'
import { valueChange } from '../redux/actions.js'
import store from '../redux/store.js'
import { connect } from 'react-redux'

function BreakedByLine ({ numbered, index, inputLine }) {
  return (
    <div className={numbered} key={index}>{inputLine}</div>)
}

class Input extends React.Component {
  handleOriganalChange (e) {
    store.dispatch(valueChange(e.target.value, this.props.changed))
  }

  handleChangedChange (e) {
    store.dispatch(valueChange(this.props.original, e.target.value))
  }

  render () {
    const { original, changed } = this.props
    const originalBreakedByLine = original.split('\n').map((inputLine, index) =>
      <BreakedByLine key={index} inputLine={inputLine} numbered={styles.numberedOriginal} />)
    const changedBreakedByLine = changed.split('\n').map((inputLine, index) =>
      <BreakedByLine key={index} inputLine={inputLine} numbered={styles.numberedChanged} />)
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={`${styles.inputs} ${styles.numberedInputs}`}>
            <div className={styles.input}>
              <div className={styles.inputHeader}>Original Text</div>
              <div className={styles.scrollOriginalContainer}>
                <div className={styles.scroll}>
                  <div className={styles.linesContainer}>{originalBreakedByLine}</div>
                  <textarea
                    spellCheck='false' className={styles.inputText}
                    onChange={(originalEvent) => this.handleOriganalChange(originalEvent)}
                    value={original}
                  />
                </div>
              </div>
            </div>
            <div className={styles.input}>
              <div className={styles.inputHeader}>Changed Text</div>
              <div className={styles.scrollChangedContainer}>
                <div className={styles.scroll}>
                  <div className={styles.linesContainer}>{changedBreakedByLine}</div>
                  <textarea
                    spellCheck='false' className={styles.inputText}
                    onChange={(changedEvent) => this.handleChangedChange(changedEvent)}
                    value={changed}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {
    original: state.original,
    changed: state.changed
  }
})(Input)
