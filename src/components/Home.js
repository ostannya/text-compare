import React from 'react'
import styles from '../Home.module.css'
import { Button, Menu, Dropdown } from 'antd'

export class Home extends React.Component {
  constructor (props) {
    super(props)
    this.handleCompare = this.handleCompare.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleLowercase = this.handleLowercase.bind(this)
    this.handleBreakstoSpaces = this.handleBreakstoSpaces.bind(this)
    this.changed = React.createRef()
    this.original = React.createRef()
    this.state = {
      diff: [],
      result: false,
      identical: false
    }
  }

  handleCompare () {
    const Diff = require('diff')
    const one = this.original.current.value
    const other = this.changed.current.value
    if (one === other) {
      this.setState({ identical: true })
    } else {
      this.setState({ diff: Diff.diffChars(one, other), result: true })
    }
    const paragraphCount = one.split('\n').length
    console.log('paragraphs: ', paragraphCount)
  }

  handleClear () {
    console.log(this.original.current.value)
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
  }

  render () {
    const { diff, result, identical } = this.state
    const partRemoved = diff.filter(object => !(object.added === true)).map((object, index) =>
      <span
        style={{ backgroundColor: object.removed ? '#FF5249' : 'transparent' }}
        key={index}
      >{object.value}
      </span>)
    const partAdded = diff.filter(object => !(object.removed === true)).map((object, index) =>
      <span
        style={{ backgroundColor: object.added ? '#29BE8C' : 'transparent' }}
        key={index}
      >{object.value}
      </span>)
    const statRemovals = diff.filter(object => object.removed === true).length
    const statAdditions = diff.filter(object => object.added === true).length
    const tools = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key='1' onClick={this.handleLowercase}>To lowercase</Menu.Item>
        <Menu.Item key='2'>Sort lines</Menu.Item>
        <Menu.Item key='3' onClick={this.handleBreakstoSpaces}>Replace line breaks with spaces</Menu.Item>
        <Menu.Item key='4'>Remove excess whitespace</Menu.Item>
      </Menu>
    )
    return (
      <div className={styles.main}>
        <div className={styles.header}>Text Compare</div>
        {identical
          ? <div>The two texts are identical!</div> : null}
        {!result ? null
          : (
            <div>
              <Dropdown.Button className={styles.dropDownMenuTools} overlay={tools}>Tools</Dropdown.Button>
              <div className={styles.diffStats}>
                <div className={styles.minus}>-</div><div>{statRemovals} Removals</div>
                <div className={styles.plus}>+</div><div>{statAdditions} Additions</div>
              </div>
              <div className={styles.diffOutputs}>
                <div className={`${styles.output} ${styles.outputLeft}`} backgroundcolor='#FF9994'>{partRemoved}</div>
                <div className={`${styles.output} ${styles.outputRight}`}>{partAdded}</div>
              </div>
              <Button className={styles.clearButton} onClick={this.handleClear}>Clear</Button>

            </div>
          )}
        <div className={styles.diffInputs}>
          <div className={styles.diffInput}>
            <div className={styles.diffInputHeader}>Original Text</div>
            <textarea spellCheck='false' placeholder='Left' className={`${styles.diffInputText} ${styles.left}`} ref={this.original} />
          </div>
          <div className={styles.diffInput}>
            <div className={styles.diffInputHeader}>Changed Text</div>
            <textarea spellCheck='false' placeholder='Right' className={`${styles.diffInputText} ${styles.right}`} ref={this.changed} />
          </div>
        </div>
        <Button type='primary' className={styles.compareButton} onClick={this.handleCompare}>Compare</Button>
      </div>
    )
  }
}

export default Home
