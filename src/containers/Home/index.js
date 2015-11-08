import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {bindActionCreators} from 'redux';

// components

// action creator


class Home extends Component {

  render() {
    const sc = this.style.locals

    const {
      dispatch
    } = this.props

    return (
      <div>
        <div className="container">
          <h1 className={sc.title}>Hello, stranger</h1>
        </div>
        <div className={sc.joker}></div>
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
  // console.log(state);
  return Object.assign({}, state)
}

// function mapDispatchToProps(dispatch) {
//   return {
//     someAction: bindActionCreators(actionCreator, dispatch)
//   };
// }

export default connect(mapStateToProps)(Home)