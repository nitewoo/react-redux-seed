import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components
import PlusBtn from './components/PlusBtn'
import MinusBtn from './components/MinusBtn'
import CounterVal from './components/CounterVal'
import BellIcon from 'components/BellIcon'

// action creator
import { counterActions } from './reducer'

class Counter extends Component {

  render() {
    const sc = this.style.locals

    return (
      <div className="container">
        <PlusBtn increment={this.props.increment.bind(this, 'plus')} />
        &nbsp;&nbsp;
        <MinusBtn decrement={this.props.decrement.bind(this, 'minus')} />
        <CounterVal count={this.props.count} />
        <h3 className={sc['sub-title']}>
          <BellIcon/>
          <span>&nbsp;&nbsp;right ?</span>
        </h3>
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
  return { ...state.counter }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...counterActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)