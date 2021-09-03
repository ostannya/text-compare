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
  compare,
  swap,
  clear
} from '../redux/actions.js'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.handleClear = this.handleClear.bind(this)
  }

  handleCompare () {
    store.dispatch(compare(this.props.original, this.props.changed))
  }

  handleClear () {
    store.dispatch(clear())
  }

  handleSwap () {
    store.dispatch(swap(this.props.changed, this.props.original))
  }

  render () {
    const { markAsIdentical, showResult, original, changed } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.header}>
            <img className={styles.logo} src={logo} alt='logo' />
            <div className={styles.headerText}>2Text Compare</div>
          </div>
          {markAsIdentical
            ? <div>The two texts are identical!</div>
            : null}
          {
            !showResult
              ? null
              : (
                <div>
                  <Toolbar />
                  <Output />
                  <div className={styles.outputButtons}>
                    <Button className={styles.clearButton} onClick={this.handleClear}>Clear</Button>
                    <Tooltip title='Swap'>
                      <SwapOutlined className={styles.swapButton} onClick={() => this.handleSwap(original, changed)} />
                    </Tooltip>
                  </div>
                </div>)
          }
          <Input />
          <Button
            type='primary' className={styles.compareButton}
            onClick={() => this.handleCompare(original, changed)}
          >Compare
          </Button>
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

export default connect(state => {
  return {
    markAsIdentical: state.markAsIdentical,
    showResult: state.showResult,
    original: state.original,
    changed: state.changed,
    diffArray: state.diffArray
  }
})(Home)
