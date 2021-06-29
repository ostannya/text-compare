import React from 'react'
import styles from '../Home.module.css'
import { Button, Tooltip } from 'antd'
import { SwapOutlined } from '@ant-design/icons'
import Toolbar from './Toolbar'
import logo from '../assets/logo.png'
import GitHubButton from 'react-github-btn'
import Output from './Output'
// import * as Diff from 'diff'
import Input from './Input'
import { connect } from 'react-redux'
import store from '../redux/store.js'
import { identical, notIdentical, result, noResult, swapped, notSwapped, diffArray } from '../redux/actions.js'

function mapStateToProps (state) {
  return {
    identical: state.isIdentical.identical,
    result: state.hasResult.result,
    swapped: state.isSwapped.swapped,
    diffArray: state.isDiffArray.diffArray
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
      // diffArray: [],
      // keep both state and redux? other?
      original: '',
      changed: ''
    }
  }

  handleCompare () {
    // const original = this.state.original
    // const changed = this.state.changed
    // const diffArray = Diff.diffChars(original, changed)
    if (this.state.original === this.state.changed) {
      // how to dispatch multiple actions
      store.dispatch(identical())
      store.dispatch(noResult())
    } else {
      store.dispatch(notIdentical())
      store.dispatch(result())
      store.dispatch(diffArray())
      // this.state.diffArray undefined
      console.log('diffArray', this.state.diffArray)
      // this.setState({ diffArray: diffArray })
    }
  }

  handleChange (original, changed) {
    this.setState({ original, changed })
  }

  handleClear () {
    this.setState({ original: '', changed: '' })
    store.dispatch(notIdentical())
    store.dispatch(noResult())
  }

  handleMenuClick () {
    store.dispatch(notIdentical())
  }

  handleLowercase () {
    this.setState({
      original: this.state.original.toLocaleLowerCase(),
      changed: this.state.changed.toLocaleLowerCase()
    })
    store.dispatch(notIdentical())
  }

  handleBreaksToSpaces () {
    this.setState({
      original: replaceBreaks(this.state.original),
      changed: replaceBreaks(this.state.changed)
    })
    store.dispatch(notIdentical())
  }

  handleRemoveWhiteSpaces () {
    this.setState({
      original: removeWhiteSpaces(this.state.original),
      changed: removeWhiteSpaces(this.state.changed)
    })
    store.dispatch(notIdentical())
  }

  handleSwap () {
    if (this.state.swapped === false) {
      // hier is something happening
      [this.state.original, this.state.changed] = [this.state.changed, this.state.original]
      this.handleCompare()
      store.dispatch(notIdentical())
      store.dispatch(swapped())
    } else {
      [this.state.changed, this.state.original] = [this.state.original, this.state.changed]
      store.dispatch(notSwapped())
      store.dispatch(notIdentical())
      this.handleCompare()
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
                  /* diffArray is still in props? this.state.diffArray */
                  /* what does store.dispatch(diffArray() return */
                    diffArray={store.dispatch(diffArray())} onMenuClick={this.handleMenuClick} onLowercase={this.handleLowercase}
                    onBreaksToSpaces={this.handleBreaksToSpaces} onRemoveWhiteSpaces={this.handleRemoveWhiteSpaces}
                  />
                  <Output diffArray={() => store.dispatch(diffArray())} />
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
