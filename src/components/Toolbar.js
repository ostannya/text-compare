import React from 'react'
import { Menu, Dropdown } from 'antd'
import styles from '../Toolbar.module.css'
import { connect } from 'react-redux'
import {
  lowercase,
  breaksToSpaces,
  removeWhiteSpaces
} from '../redux/actions.js'
import store from '../redux/store.js'

export class Toolbar extends React.Component {
  constructor (props) {
    super(props)
    this.handleLowercase = this.handleLowercase.bind(this)
    this.handleBreaksToSpaces = this.handleBreaksToSpaces.bind(this)
    this.handleRemoveWhiteSpaces = this.handleRemoveWhiteSpaces.bind(this)
  }

  handleLowercase () {
    store.dispatch(lowercase())
  }

  handleBreaksToSpaces () {
    store.dispatch(breaksToSpaces())
  }

  handleRemoveWhiteSpaces () {
    store.dispatch(removeWhiteSpaces())
  }

  render () {
    const statRemovals = this.props.diffArray.filter(object => object.removed === true).length
    const statAdditions = this.props.diffArray.filter(object => object.added === true).length
    const tools = (
      <Menu onClick={this.props.onMenuClick}>
        <Menu.Item key='1' onClick={this.handleLowercase}>To lowercase</Menu.Item>
        <Menu.Item key='2' onClick={this.handleBreaksToSpaces}>Replace line breaks with spaces</Menu.Item>
        <Menu.Item key='3' onClick={this.handleRemoveWhiteSpaces}>Remove excess whitespace</Menu.Item>
      </Menu>
    )
    return (
      <div className={styles.toolbar}>
        <Dropdown.Button className={styles.dropDownMenuTools} overlay={tools}>Tools</Dropdown.Button>
        <div className={styles.diffStats}>
          <div className={styles.minus}>–</div><div>{statRemovals} {statRemovals === 1 ? 'removal' : 'removals'}</div>
          <div className={styles.plus}>+</div><div>{statAdditions} {statAdditions === 1 ? 'addition' : 'additions'}</div>
        </div>
      </div>
    )
  }
}
export default connect(state => {
  return {
    original: state.original,
    changed: state.changed,
    diffArray: state.diffArray
  }
})(Toolbar)
