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

export class Home extends React.Component {
  constructor (props) {
    super(props)
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
      swapped: false
    }
  }

  handleCompare () {
    const Diff = require('diff')
    const original = this.original.current.value
    const changed = this.changed.current.value
    const diff = Diff.diffChars(original, changed)
    if (original === changed) {
      this.setState({ identical: true })
    } else {
      this.setState({ diff: diff, result: true })
    }
  }

  handleClear () {
    this.original.current.value = ''
    this.changed.current.value = ''
    this.setState({ result: false, identical: false })
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
    // line break doesn't show, if ? object.value === '\n'
    const { diff, result, identical } = this.state
    const partsRemoved = diff.filter(object => !(object.added === true)).map(function (object, index, partsRemoved) {
      const objectNextRemoved = partsRemoved[index + 1]
      // console.log('partsRemoved 1 value: ', partsRemoved[index + 1].value)
      if (objectNextRemoved && objectNextRemoved.removed && objectNextRemoved.value === '\n') {
        return <span style={{ backgroundColor: '#ffc4c1' }} key={index}>{object.value}</span>
      } else {
        return <span style={{ backgroundColor: object.removed ? '#ffc4c1' : 'transparent' }} key={index}>{object.value}</span>
      }
    })
    const partsAdded = diff.filter(object => !(object.removed === true)).map(function (object, index, partsAdded) {
      const objectNextAdded = partsAdded[index + 1]
      if (objectNextAdded && objectNextAdded.added && objectNextAdded.value === '\n') {
        return <span style={{ backgroundColor: '#77E2BD' }} key={index}>{object.value}</span>
      } else {
        return <span style={{ backgroundColor: object.added ? '#77E2BD' : 'transparent' }} key={index}>{object.value}</span>
      }
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
          <div className={styles.diffInputs}>
            <div className={styles.diffInput}>
              <div className={styles.diffInputHeader}>Original Text</div>
              <textarea spellCheck='false' className={`${styles.diffInputText} ${styles.left}`} ref={this.original} defaultValue='aaaa aaaa' />
            </div>
            <div className={styles.diffInput}>
              <div className={styles.diffInputHeader}>Changed Text</div>
              <textarea spellCheck='false' className={`${styles.diffInputText} ${styles.right}`} ref={this.changed} defaultValue='aa aaaaa aaa' />
            </div>
          </div>
          <Button type='primary' className={styles.compareButton} onClick={this.handleCompare}>Compare</Button>
          <div className={styles.push} />
        </div>
        <div className={styles.footer}>
          <div className={styles.githubButton}>
            <GitHubButton href='https://github.com/ostannya/text-compare' aria-label='Star ostannya/text-compare on GitHub'>Star on GitHub</GitHubButton>
          </div>
          <div className={styles.footerText}>2Text Compare is a an open source side-by-side text comparison tool. It doesn’t store any data neither use analytics to track users. Created using ⚛️ React and <a href='https://github.com/kpdecker/jsdiff'>jsdiff</a> library.</div>
        </div>
      </div>
    )
  }
}

export default Home
