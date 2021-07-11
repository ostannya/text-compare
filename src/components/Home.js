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
import { connect } from 'react-redux'
import store from '../redux/store.js'
import { identical, notIdentical, result, noResult, swapped, notSwapped, valueChangeOriginal, valueChangeChanged } from '../redux/actions.js'

function mapStateToProps (state) {
  return {
    identical: state.isIdentical,
    result: state.hasResult,
    swapped: state.isSwapped,
    original: state.original,
    changed: state.changed
  }
}

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
      diffArray: []
    }
  }

  handleCompare () {
    const original = this.props.original
    const changed = this.props.changed
    const diffArray = Diff.diffChars(original, changed)
    if (original === changed) {
      store.dispatch(identical())
      store.dispatch(noResult())
    } else {
      store.dispatch(notIdentical())
      store.dispatch(result())
      this.setState({ diffArray: diffArray })
    }
  }

  handleChange () {
    store.dispatch(valueChangeOriginal(this.props.original))
    store.dispatch(valueChangeChanged(this.props.changed))
  }

  handleClear () {
    store.dispatch(valueChangeOriginal(''))
    store.dispatch(valueChangeChanged(''))
    store.dispatch(notIdentical())
    store.dispatch(noResult())
  }

  handleMenuClick () {
    store.dispatch(notIdentical())
  }

  handleLowercase () {
    store.dispatch(valueChangeOriginal(this.props.original.toLocaleLowerCase()))
    store.dispatch(valueChangeChanged(this.props.changed.toLocaleLowerCase()))
    store.dispatch(notIdentical())
  }

  handleBreaksToSpaces () {
    store.dispatch(valueChangeOriginal(replaceBreaks(this.props.original)))
    store.dispatch(valueChangeChanged(replaceBreaks(this.props.changed)))
    store.dispatch(notIdentical())
  }

  handleRemoveWhiteSpaces () {
    store.dispatch(valueChangeOriginal(removeWhiteSpaces(this.props.original)))
    store.dispatch(valueChangeChanged(removeWhiteSpaces(this.props.changed)))
    store.dispatch(notIdentical())
  }

  // doesn't work as expected
  handleSwap () {
    if (this.props.swapped === false) {
      store.dispatch(valueChangeOriginal(this.props.changed))
      store.dispatch(valueChangeChanged(this.props.original))
      this.handleCompare()
      store.dispatch(notIdentical())
      store.dispatch(swapped())
    } else {
      store.dispatch(valueChangeOriginal(this.props.original))
      store.dispatch(valueChangeChanged(this.props.changed))
      this.handleCompare()
      store.dispatch(notSwapped())
      store.dispatch(notIdentical())
    }
  }

  render () {
    const { identical, result } = this.props
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

export default connect(mapStateToProps)(Home)
