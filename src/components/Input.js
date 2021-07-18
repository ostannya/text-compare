import React from 'react'
import styles from '../Input.module.css'
import { valueChange } from '../redux/actions.js'
import store from '../redux/store.js'
import { connect } from 'react-redux'

function mapStateToProps (state) {
  return {
    original: state.original,
    changed: state.changed
  }
}

function BreakedByLine ({ numbered, index, inputLine }) {
  return (
    <div className={numbered} key={index}>{inputLine}</div>)
}

export class Input extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.changed = React.createRef()
    this.original = React.createRef()
  }

  handleChange () {
    store.dispatch(valueChange(this.original.current.value, this.changed.current.value))
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
                    spellCheck='false' className={styles.inputText} onChange={() => this.handleChange(original)}
                    ref={this.original} value={this.props.original}
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
                    spellCheck='false' className={styles.inputText} onChange={() => this.handleChange(changed)}
                    ref={this.changed} value={this.props.changed}
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

export default connect(mapStateToProps)(Input)
