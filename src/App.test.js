import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { replaceBreaks } from './redux/actions.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('there are no breaks in the line', () => {
  expect(replaceBreaks('s fhhf\nds\ns\ns\ns')).toEqual('s fhhf ds s s s')
})