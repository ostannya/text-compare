import React from 'react'
import styles from '../Home.module.css'
import { Button, Tooltip } from 'antd'
import { SwapOutlined } from '@ant-design/icons'
import Toolbar from './Toolbar'
import logo from '../assets/logo.png'
import GitHubButton from 'react-github-btn'

function removeWhitespaces (text) {
  const result = text.replace(/\s{2,}/g, ' ').trim()
  return result
}

function replaceBreaks (text) {
  const result = text.replace(/\n/g, ' ')
  return result
}

const lineBreakedDiff = (partsDiff) => {
  const lines = []
  let line = []
  for (let i = 0; i < partsDiff.length; i++) {
    if (partsDiff[i].value.match('\n')) {
      const valueArray = partsDiff[i].value.split('\n')
      for (let j = 0; j < valueArray.length - 1; j++) {
        line.push({
          ...partsDiff[i],
          value: valueArray[j]
        })
        lines.push(line)
        line = []
      }
      line.push({
        ...partsDiff[i],
        value: valueArray[valueArray.length - 1]
      })
    } else {
      line.push(partsDiff[i])
    }
  }
  if (line.length) {
    lines.push(line)
  }
  return lines
}

export class Home extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleCompare = this.handleCompare.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleLowercase = this.handleLowercase.bind(this)
    this.handleBreakstoSpaces = this.handleBreakstoSpaces.bind(this)
    this.handleRemoveWhitespaces = this.handleRemoveWhitespaces.bind(this)
    this.handleSwap = this.handleSwap.bind(this)
    this.changed = React.createRef()
    this.original = React.createRef()
    this.state = {
      diff: [],
      result: false,
      identical: false,
      swapped: false,
      original: '',
      changed: ''
    }
  }

  handleChange () {
    this.setState({ original: this.original.current.value, changed: this.changed.current.value })
  }

  handleCompare () {
    const Diff = require('diff')
    const original = this.original.current.value
    const changed = this.changed.current.value
    const diff = Diff.diffChars(original, changed)
    if (original === changed) {
      this.setState({ identical: true, result: false })
    } else {
      this.setState({ diff: diff, result: true, identical: false })
    }
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

  handleBreakstoSpaces () {
    this.original.current.value = replaceBreaks(this.original.current.value)
    this.changed.current.value = replaceBreaks(this.changed.current.value)
    this.setState({ identical: false })
  }

  handleRemoveWhitespaces () {
    this.original.current.value = removeWhitespaces(this.original.current.value)
    this.changed.current.value = removeWhitespaces(this.changed.current.value)
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
    const { diff, result, identical, original, changed } = this.state
    const partsRemoved = lineBreakedDiff(diff.filter(object => !(object.added === true)))
      .map(function (line, index) {
        return (
          <div className={styles.numberedLineLeft} key={index}>
            {line.map(function (object, index, partsRemoved) {
              const objectNextRemoved = partsRemoved[index + 1]
              if (objectNextRemoved && objectNextRemoved.removed && objectNextRemoved.value === '\n') {
                return <span style={{ backgroundColor: '#ffc4c1' }} key={index}>{object.value}</span>
              } else {
                return <span style={{ backgroundColor: object.removed ? '#ffc4c1' : 'transparent' }} key={index}>{object.value}</span>
              }
            })}
          </div>
        )
      })
    const partsAdded = lineBreakedDiff(diff.filter(object => !(object.removed === true)))
      .map(function (line, index) {
        return (
          <div className={styles.numberedLineRight} key={index}>
            {line.map(function (object, index, partsAdded) {
              const objectNextAdded = partsAdded[index + 1]
              if (objectNextAdded && objectNextAdded.added && objectNextAdded.value === '\n') {
                return <span style={{ backgroundColor: '#b5efdb' }} key={index}>{object.value}</span>
              } else {
                return <span style={{ backgroundColor: object.added ? '#b5efdb' : 'transparent' }} key={index}>{object.value}</span>
              }
            })}
          </div>
        )
      })
    const originalLine = original.split('\n').map(function (inputLine, index) {
      return (
        <div className={styles.numberedOriginal} key={index}>{inputLine}</div>)
    })
    const changedLine = changed.split('\n').map(function (inputLine, index) {
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
                  diff={this.state.diff} onMenuClick={this.handleMenuClick.bind()} onLowercase={this.handleLowercase.bind()}
                  onBreakstoSpaces={this.handleBreakstoSpaces.bind()} onRemoveWhitespaces={this.handleRemoveWhitespaces.bind()}
                />
                <div className={styles.diffOutputs}>
                  <div spellCheck='false' className={`${styles.output} ${styles.outputLeft}`}>{partsRemoved}</div>
                  <div spellCheck='false' className={`${styles.output} ${styles.outputRight}`}>{partsAdded}</div>
                </div>
                <div className={styles.outputButtons}>
                  <Button className={styles.clearButton} onClick={this.handleClear}>Clear</Button>
                  <Tooltip title='Swap'>
                    <SwapOutlined className={styles.swapButton} onClick={this.handleSwap} />
                  </Tooltip>
                </div>
              </div>
            )}
          <div className={`${styles.diffInputs} ${styles.numberedInputs}`}>
            <div className={styles.diffInput}>
              <div className={styles.diffInputHeader}>Original Text</div>
              <div className={styles.inputScrollOriginal}>
                <div className={styles.innerScrollOriginal}>
                  <div className={styles.linesContainer}>{originalLine}</div>
                  <textarea spellCheck='false' className={`${styles.diffInputText} ${styles.left}`} onChange={this.handleChange.bind()} ref={this.original} />
                </div>
              </div>
            </div>
            <div className={styles.diffInput}>
              <div className={styles.diffInputHeader}>Changed Text</div>
              <div className={styles.inputScrollChanged}>
                <div className={styles.innerScrollChanged}>
                  <div className={styles.linesContainer}>{changedLine}</div>
                  <textarea spellCheck='false' className={`${styles.diffInputText} ${styles.right}`} onChange={this.handleChange.bind()} ref={this.changed} />
                </div>
              </div>
            </div>
          </div>
          <Button type='primary' className={styles.compareButton} onClick={this.handleCompare}>Compare</Button>
          <div className={styles.push} />
        </div>
        <div className={styles.footer}>
          <div className={styles.githubButton}>
            <GitHubButton href='https://github.com/ostannya/text-compare' aria-label='Star ostannya/text-compare on GitHub'>Star on GitHub</GitHubButton>
          </div>
          <div className={styles.footerText}>2Text Compare is a an open source side-by-side text comparison tool. Created using ⚛️ React and <a href='https://github.com/kpdecker/jsdiff'>jsdiff</a> library.</div>
        </div>
      </div>
    )
  }
}

export default Home
