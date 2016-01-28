import React from 'react'

class PlusBtn extends React.Component {
  render() {
    const { increment } = this.props
    return (
      <button type="button" className="btn btn-primary" onClick={increment}>Plus</button>
    )
  }
}

export default PlusBtn