import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hola World!</h1>
      </div>
    )
  }
}

export default hot(module)(App)
