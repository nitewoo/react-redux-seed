import React from 'react'

class CounterBtn extends React.Component {
  render() {
    const { increment } = this.props
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={increment}>Plus</button>
      </div>
    )
  }
}

export default CounterBtn