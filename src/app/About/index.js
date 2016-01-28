import React, { Component } from 'react'
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux'

class About extends Component {

  render() {
    const sc = this.style.locals
    const joker = require('./joker.jpg')

    const { dispatch } = this.props

    return (
      <div className="container">
        <h1 className={sc.title}>why so serious ?</h1>
        <img src={joker} width="100%"/>
      </div>
    )
  }

  componentWillMount() {
    // load module style
    this.style = require('./style.scss').ref()
  }

  componentWillUnmount() {
    // unload module style
    this.style.unref()
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     someAction: bindActionCreators(actionCreator, dispatch)
//   }
// }

export default connect(mapStateToProps)(About)