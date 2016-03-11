import React, { Component } from 'react'
import { connect } from 'react-redux'
// import {bindActionCreators} from 'redux'

// components

// action creator
import { homeActions } from './reducer'

class Home extends Component {

  render() {
    const sc = this.style.locals

    const {
      dispatch
    } = this.props

    return (
      <div className={sc.joker}>
        <div className="container">
          <h1 className={sc.title}>Hello, stranger</h1>
        </div>
      </div>
    )
  }

  componentWillMount() {
    // load module style
    this.style = require('./style.scss').ref()
    this.props.dispatch(homeActions.fetchApiServerInfo())
    this.props.dispatch(homeActions.tellInfo('beihai'))
    this.props.dispatch(homeActions.greet('wujun'))
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
//   }
// }

export default connect(mapStateToProps)(Home)