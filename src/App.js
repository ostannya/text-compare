import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home.js'
import { Provider } from 'react-redux'
import store from './redux/store.js'

export class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
