import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// it's an integration test, because there are other components in App
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
