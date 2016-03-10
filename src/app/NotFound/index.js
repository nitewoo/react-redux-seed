import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class NotFound extends Component {
  render() {

    const sc = this.style.locals

    return (
      <div className={sc.error404}>
        <div className="container" />
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