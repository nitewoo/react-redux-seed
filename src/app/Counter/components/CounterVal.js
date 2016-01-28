import React from 'react'

class CounterVal extends React.Component {
  render() {
    return (
      <h1 style={{color: '#A61D3B'}}>it is: {this.props.count}</h1>
    )
  }
}

export default CounterVal