import React from 'react'
import styles from '../Home.module.css'
import { Button, Tooltip } from 'antd'
import { SwapOutlined } from '@ant-design/icons'
import Toolbar from './Toolbar'
import logo from '../assets/logo.png'
import GitHubButton from 'react-github-btn'
import Parts from './Parts'

function removeWhiteSpaces (text) {
  const result = text.replace(/\s{2,}/g, ' ').trim()
  return result
}

function replaceBreaks (text) {
  const result = text.replace(/\n/g, ' ')
  return result
}

export class Home extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleCompare = this.handleCompare.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleLowercase = this.handleLowercase.bind(this)
    this.handleBreaksToSpaces = this.handleBreaksToSpaces.bind(this)
    this.handleRemoveWhiteSpaces = this.handleRemoveWhiteSpaces.bind(this)
    this.handleSwap = this.handleSwap.bind(this)
    this.changed = React.createRef()
    this.original = React.createRef()
    this.state = {
      diffArray: [],
      result: false,
      identical: false,
      swapped: false,
      original: '',
      changed: ''
    }
  }

  handleCompare () {
    const Diff = require('diff')
    const original = this.original.current.value
    const changed = this.changed.current.value
    const diffArray = Diff.diffChars(original, changed)
    if (original === changed) {
      this.setState({ identical: true, result: false })
    } else {
      this.setState({ diffArray: diffArray, result: true, identical: false })
    }
  }

  handleChange () {
    this.setState({ original: this.original.current.value, changed: this.changed.current.value })
  }

  handleClear () {
    this.original.current.value = ''
    this.changed.current.value = ''
    this.setState({ result: false, identical: false, original: this.original.current.value, changed: this.changed.current.value })
  }

  handleMenuClick () {
    this.setState({ identical: false })
  }

  handleLowercase () {
    this.original.current.value = this.original.current.value.toLowerCase()
    this.changed.current.value = this.changed.current.value.toLowerCase()
    this.setState({ identical: false })
  }

  handleBreaksToSpaces () {
    this.original.current.value = replaceBreaks(this.original.current.value)
    this.changed.current.value = replaceBreaks(this.changed.current.value)
    this.setState({ identical: false })
  }

  handleRemoveWhiteSpaces () {
    this.original.current.value = removeWhiteSpaces(this.original.current.value)
    this.changed.current.value = removeWhiteSpaces(this.changed.current.value)
    this.setState({ identical: false })
  }

  handleSwap () {
    if (this.state.swapped === false) {
      [this.original.current.value, this.changed.current.value] = [this.changed.current.value, this.original.current.value]
      this.handleCompare()
      this.setState({ identical: false, swapped: true })
    } else {
      [this.changed.current.value, this.original.current.value] = [this.original.current.value, this.changed.current.value]
      this.setState({ identical: false, swapped: false })
      this.handleCompare()
    }
  }

  render () {
    const { result, identical, original, changed } = this.state
    const originalBreakedByLine = original.split('\n').map(function (inputLine, index) {
      return (
        <div className={styles.numberedOriginal} key={index}>{inputLine}</div>)
    })
    const changedBreackedByLine = changed.split('\n').map(function (inputLine, index) {
      return (
        <div className={styles.numberedChanged} key={index}>{inputLine}</div>)
    })
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.header}>
            <img className={styles.logo} src={logo} alt='logo' />
            <div className={styles.headerText}>2Text Compare</div>
          </div>
          {identical
            ? <div>The two texts are identical!</div> : null}
          {!result ? null
            : (
              <div>
                <Toolbar
                  diffArray={this.state.diffArray} onMenuClick={this.handleMenuClick.bind()} onLowercase={this.handleLowercase.bind()}
                  onBreaksToSpaces={this.handleBreaksToSpaces.bind()} onRemoveWhiteSpaces={this.handleRemoveWhiteSpaces.bind()}
                />
                <Parts diffArray={this.state.diffArray} />
                <div className={styles.outputButtons}>
                  <Button className={styles.clearButton} onClick={this.handleClear}>Clear</Button>
                  <Tooltip title='Swap'>
                    <SwapOutlined className={styles.swapButton} onClick={this.handleSwap} />
                  </Tooltip>
                </div>
              </div>
            )}
          <div className={`${styles.inputs} ${styles.numberedInputs}`}>
            <div className={styles.input}>
              <div className={styles.inputHeader}>Original Text</div>
              <div className={styles.scrollOriginalContainer}>
                <div className={styles.scroll}>
                  <div className={styles.linesContainer}>{originalBreakedByLine}</div>
                  <textarea spellCheck='false' className={styles.inputText} onChange={this.handleChange.bind()} ref={this.original} />
                </div>
              </div>
            </div>
            <div className={styles.input}>
              <div className={styles.inputHeader}>Changed Text</div>
              <div className={styles.scrollChangedContainer}>
                <div className={styles.scroll}>
                  <div className={styles.linesContainer}>{changedBreackedByLine}</div>
                  <textarea spellCheck='false' className={styles.inputText} onChange={this.handleChange.bind()} ref={this.changed} />
                </div>
              </div>
            </div>
          </div>
          <Button type='primary' className={styles.compareButton} onClick={this.handleCompare}>Compare</Button>
          <div className={styles.push} />
        </div>
        <div className={styles.footer}>
          <div className={styles.gitHubButton}>
            <GitHubButton href='https://github.com/ostannya/text-compare' aria-label='Star ostannya/text-compare on GitHub'>Star on GitHub</GitHubButton>
          </div>
          <div className={styles.footerText}>2Text Compare is a an open source side-by-side text comparison tool. Created using ⚛️ React and <a href='https://github.com/kpdecker/jsdiff'>jsdiff</a> library.</div>
        </div>
      </div>
    )
  }
}

export default Home
