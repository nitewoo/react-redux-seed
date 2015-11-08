import React from 'react'

class CounterVal extends React.Component {
  render() {
    // console.log(this.props)

    return (
      <h1>it is: {this.props.count}</h1>
    )
  }
}

export default CounterVal