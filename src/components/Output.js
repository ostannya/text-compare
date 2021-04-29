import React from 'react'
import styles from '../Output.module.css'

const lineBreakedDiff = (partsDiff) => {
  const lines = []
  let line = []
  for (let i = 0; i < partsDiff.length; i++) {
    if (partsDiff[i].value.match('\n')) {
      const valueArray = partsDiff[i].value.split('\n')
      for (let j = 0; j < valueArray.length - 1; j++) {
        line.push({
          ...partsDiff[i],
          value: valueArray[j]
        })
        lines.push(line)
        line = []
      }
      line.push({
        ...partsDiff[i],
        value: valueArray[valueArray.length - 1]
      })
    } else {
      line.push(partsDiff[i])
    }
  }
  if (line.length) {
    lines.push(line)
  }
  return lines
}

function ColoredRemovedOrAdded ({ line, index, color, removedOrAdded, numbered }) {
  return (
    <div className={numbered} key={index}>
      {line.map(function (object, index, parts) {
        const nextObject = parts[index + 1]
        if (nextObject && nextObject[removedOrAdded] && nextObject.value === '\n') {
          return <span style={{ backgroundColor: color }} key={index}>{object.value}</span>
        } else {
          return <span style={{ backgroundColor: object[removedOrAdded] ? color : 'transparent' }} key={index}>{object.value}</span>
        }
      })}
    </div>
  )
}

export class Output extends React.Component {
  render () {
    const partsRemoved = lineBreakedDiff(this.props.diffArray.filter(object => !(object.added === true)))
      .map((line, index) => <ColoredRemovedOrAdded key={index} line={line} color='#ffc4c1' numbered={styles.numberedOriginal} removedOrAdded='removed' />)
    const partsAdded = lineBreakedDiff(this.props.diffArray.filter(object => !(object.removed === true)))
      .map((line, index) => <ColoredRemovedOrAdded key={index} line={line} color='#b5efdb' numbered={styles.numberedChanged} removedOrAdded='added' />)
    return (
      <div className={styles.outputs}>
        <div spellCheck='false' className={`${styles.output} ${styles.outputOriginal}`}>{partsRemoved}</div>
        <div spellCheck='false' className={`${styles.output} ${styles.outputChanged}`}>{partsAdded}</div>
      </div>
    )
  }
}
export default Output
