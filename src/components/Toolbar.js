import React from 'react'
import { Menu, Dropdown } from 'antd'
import styles from '../Toolbar.module.css'

export class Toolbar extends React.Component {
  render () {
    const statRemovals = this.props.diff.filter(object => object.removed === true).length
    const statAdditions = this.props.diff.filter(object => object.added === true).length
    const tools = (
      <Menu onClick={this.props.onMenuClick}>
        <Menu.Item key='1' onClick={this.props.onLowercase}>To lowercase</Menu.Item>
        <Menu.Item key='2' onClick={this.props.onBreakstoSpaces}>Replace line breaks with spaces</Menu.Item>
        <Menu.Item key='3' onClick={this.props.onRemoveWhitespaces}>Remove excess whitespace</Menu.Item>
      </Menu>
    )
    return (
      <div className={styles.toolbar}>
        <Dropdown.Button className={styles.dropDownMenuTools} overlay={tools}>Tools</Dropdown.Button>
        <div className={styles.diffStats}>
          <div className={styles.minus}>–</div><div>{statRemovals} removal(s)</div>
          <div className={styles.plus}>+</div><div>{statAdditions} addition(s)</div>
        </div>
      </div>)
  }
}

export default Toolbar
