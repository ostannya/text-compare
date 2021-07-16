import React from 'react'
import styles from '../Home.module.css'
import { Button, Tooltip } from 'antd'
import { SwapOutlined } from '@ant-design/icons'
import Toolbar from './Toolbar'
import logo from '../assets/logo.png'
import GitHubButton from 'react-github-btn'
import Output from './Output'
import Input from './Input'
import { connect } from 'react-redux'
import store from '../redux/store.js'
import {
  notIdentical,
  compare,
  swap,
  clear,
  change,
  lowercase,
  breaksToSpaces,
  removeWhiteSpaces
} from '../redux/actions.js'

function mapStateToProps (state) {
  return {
    identical: state.identical,
    result: state.result,
    original: state.original,
    changed: state.changed,
    diffArray: state.diffArray
  }
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
  }

  handleCompare () {
    store.dispatch(compare(this.props.original, this.props.changed))
  }

  handleChange () {
    store.dispatch(change(this.props.original, this.props.changed))
  }

  handleClear () {
    store.dispatch(clear())
  }

  handleMenuClick () {
    store.dispatch(notIdentical())
  }

  handleLowercase () {
    store.dispatch(lowercase(this.props.original, this.props.changed))
  }

  handleBreaksToSpaces () {
    store.dispatch(breaksToSpaces(this.props.original, this.props.changed))
  }

  handleRemoveWhiteSpaces () {
    store.dispatch(removeWhiteSpaces(this.props.original, this.props.changed))
  }

  handleSwap (original, changed) {
    store.dispatch(swap(original, changed))
    this.handleCompare(changed, original)
  }

  render () {
    const { identical, result, original, changed } = this.props
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
                    diffArray={this.props.diffArray} onMenuClick={this.handleMenuClick} onLowercase={this.handleLowercase}
                    onBreaksToSpaces={this.handleBreaksToSpaces} onRemoveWhiteSpaces={this.handleRemoveWhiteSpaces}
                  />
                  <Output diffArray={this.props.diffArray} />
                  <div className={styles.outputButtons}>
                    <Button className={styles.clearButton} onClick={this.handleClear}>Clear</Button>
                    <Tooltip title='Swap'>
                      <SwapOutlined className={styles.swapButton} onClick={() => this.handleSwap(original, changed)} />
                    </Tooltip>
                  </div>
                </div>)
          }
          <Input
            onChange={this.handleChange}
            original={this.props.original} changed={this.props.changed}
          />
          <Button type='primary' className={styles.compareButton} onClick={() => this.handleCompare(original, changed)}>Compare</Button>
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
