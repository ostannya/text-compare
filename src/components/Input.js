import React from 'react'
import styles from '../Input.module.css'

export class Input extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.changed = React.createRef()
    this.original = React.createRef()
    // where state is used?
    this.state = {
      original: '',
      changed: ''
    }
  }

  handleChange () {
    this.setState({ original: this.original.current.value, changed: this.changed.current.value })
    this.props.onChange(this.original.current.value, this.changed.current.value)
  }

  render () {
    const { original, changed } = this.props
    const originalBreakedByLine = original.split('\n').map(function (inputLine, index) {
      return (
        <div className={styles.numberedOriginal} key={index}>{inputLine}</div>)
    })
    // code duplication
    const changedBreackedByLine = changed.split('\n').map(function (inputLine, index) {
      return (
        <div className={styles.numberedChanged} key={index}>{inputLine}</div>)
    })
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
                  <div className={styles.linesContainer}>{changedBreackedByLine}</div>
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
