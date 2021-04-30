import React from 'react'
import styles from '../Home.module.css'
import { Button, Tooltip } from 'antd'
import { SwapOutlined } from '@ant-design/icons'
import Toolbar from './Toolbar'
import logo from '../assets/logo.png'
import GitHubButton from 'react-github-btn'
import Output from './Output'
import * as Diff from 'diff'
import Input from './Input'

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
    const original = this.state.original
    const changed = this.state.changed
    const diffArray = Diff.diffChars(original, changed)
    if (original === changed) {
      this.setState({ identical: true, result: false })
    } else {
      this.setState({ diffArray: diffArray, result: true, identical: false })
    }
  }

  handleChange (original, changed) {
    this.setState({ original, changed })
  }

  handleClear () {
    this.setState({ result: false, identical: false, original: '', changed: '' })
  }

  handleMenuClick () {
    this.setState({ identical: false })
  }

  handleLowercase () {
    this.setState({
      identical: false,
      original: this.state.original.toLocaleLowerCase(),
      changed: this.state.changed.toLocaleLowerCase()
    })
  }

  handleBreaksToSpaces () {
    this.setState({
      identical: false,
      original: replaceBreaks(this.state.original),
      changed: replaceBreaks(this.state.changed)
    })
  }

  handleRemoveWhiteSpaces () {
    this.setState({
      identical: false,
      original: removeWhiteSpaces(this.state.original),
      changed: removeWhiteSpaces(this.state.changed)
    })
  }

  handleSwap () {
    if (this.state.swapped === false) {
      [this.state.original, this.state.changed] = [this.state.changed, this.state.original]
      this.handleCompare()
      this.setState({ identical: false, swapped: true })
    } else {
      [this.state.changed, this.state.original] = [this.state.original, this.state.changed]
      this.setState({ identical: false, swapped: false })
      this.handleCompare()
    }
  }

  render () {
    const { result, identical } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.header}>
            <img className={styles.logo} src={logo} alt='logo' />
            <div className={styles.headerText}>2Text Compare</div>
          </div>
          {identical
            ? <div>The two texts are identical!</div>
            : null}
          {
            !result
              ? null
              : (
                <div>
                  <Toolbar
                    diffArray={this.state.diffArray} onMenuClick={this.handleMenuClick} onLowercase={this.handleLowercase}
                    onBreaksToSpaces={this.handleBreaksToSpaces} onRemoveWhiteSpaces={this.handleRemoveWhiteSpaces}
                  />
                  <Output diffArray={this.state.diffArray} />
                  <div className={styles.outputButtons}>
                    <Button className={styles.clearButton} onClick={this.handleClear}>Clear</Button>
                    <Tooltip title='Swap'>
                      <SwapOutlined className={styles.swapButton} onClick={this.handleSwap} />
                    </Tooltip>
                  </div>
                </div>)
          }
          <Input
            onChange={this.handleChange}
            original={this.state.original} changed={this.state.changed}
          />
          <Button type='primary' className={styles.compareButton} onClick={this.handleCompare}>Compare</Button>
          <div className={styles.push} />
        </div>
        <div className={styles.footer}>
          <div className={styles.gitHubButton}>
            <GitHubButton
              href='https://github.com/ostannya/text-compare'
              aria-label='Star ostannya/text-compare on GitHub'
            >Star on GitHub
            </GitHubButton>
          </div>
          <div
            className={styles.footerText}
          >2Text Compare is a an open source side-by-side text comparison tool. Created using ⚛️ React and
            <a href='https://github.com/kpdecker/jsdiff'> jsdiff</a> library.
          </div>
        </div>
      </div>
    )
  }
}

export default Home
