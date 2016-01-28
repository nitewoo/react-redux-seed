import React from 'react'

class MinusBtn extends React.Component {
  render() {
    const { decrement } = this.props
    return (
      <button type="button" className="btn btn-warning" onClick={decrement}>Minus</button>
    )
  }
}

export default MinusBtn