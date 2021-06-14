import React from 'react'
import styles from '../Input.module.css'

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
    this.setState({ original: this.original.current.value, changed: this.changed.current.value })
    this.props.onChange(this.original.current.value, this.changed.current.value)
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
                    spellCheck='false' className={styles.inputText} onChange={this.handleChange} ref={this.original}
                    value={this.props.original}
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
                    spellCheck='false' className={styles.inputText} onChange={this.handleChange} ref={this.changed}
                    value={this.props.changed}
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

export default Input
