import React from 'react'
import propTypes from 'prop-types'

class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  static propTypes = {
    children: propTypes.node.isRequired
  }

  render() {
    const { isError } = this.state
    const { children } = this.props
    return isError ? <div>Noooooo!</div> : children
  }
}

export default DefaultErrorBoundary
