import React from 'react'
import styles from '../Home.module.css'
import Button from 'antd/es/button'

// window.onload = function () {
//   const original = document.getElementById('originalInput')
//   const button = document.getElementById('button')
//   const changed = document.getElementById('changedInput')
//   const display = document.getElementById('display')
//   const fragment = document.createDocumentFragment()
//   const resultHeader = document.createElement('div')
//   resultHeader.innerHTML = 'Result'
//   button.addEventListener('click', () => {
//     // clear before loading
//     document.getElementById('display').innerHTML = ''
//     const Diff = require('diff')

//     const one = original.value
//     const other = changed.value
//     let span = null

//     const diff = Diff.diffChars(one, other)
//     console.log(diff)

//     diff.forEach((part) => {
//       const color = part.added ? 'green' : part.removed ? 'red' : 'grey'
//       span = document.createElement('span')
//       span.style.color = color
//       span.appendChild(document.createTextNode(part.value))
//       fragment.appendChild(span)
//     })
//     display.appendChild(resultHeader)
//     display.appendChild(fragment)
//   })
// }

export class Home extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.changed = React.createRef()
    this.original = React.createRef()
    this.output = null
  }

  handleClick () {
    console.log('Click happened')
    const Diff = require('diff')
    const one = this.original.current.value
    const other = this.changed.current.value

    const diff = Diff.diffChars(one, other)
    // console.log(diff)
    diff.forEach((part) => {
      const color = part.added ? 'green' : part.removed ? 'red' : 'grey'
      this.setState({ output: this.output })
      console.log(part.value)
      console.log(color)
      // how to add a part to the
    })
  }

  render () {
    return (
      <div className={styles.main}>
        <div className={styles.header}>Text Compare</div>

        <div className={styles.diffInputs}>
          <div className={styles.diffInput}>
            <div className={styles.diffInputHeader}>Original Text</div>
            <textarea spellCheck='false' placeholder='Left' className={styles.diffInputText} ref={this.original} />
          </div>
          <div className={styles.diffInput}>
            <div className={styles.diffInputHeader}>Changed Text</div>
            <textarea spellCheck='false' placeholder='Right' className={styles.diffInputText} ref={this.changed} />
          </div>
        </div>
        <Button type='primary' className={styles.compareButton} onClick={this.handleClick}>Compare</Button>
        <div>
          {!this.output
            ? null
            : <div>
              <div>Result: </div>
              <div className={styles.output} type='reset'>{this.output}</div>
            </div>}
        </div>
      </div>
    )
  }
}

export default Home
