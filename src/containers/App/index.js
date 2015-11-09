import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
import {
  pushState
} from 'redux-router'

import {
  Navbar,
  NavBrand,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

// Some components use react-tap-event-plugin to listen for touch events.
// This dependency is temporary and will go away once react v1.0 is released.
// Until then, be sure to inject this plugin at the start of your app.
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// action creator
// import { initCommon } from '../../reducers/common'

class App extends Component {
  render() {
    const sc = this.style.locals
    const { dispatch } = this.props

    console.log('app.props: ', this.props)

    const navItems = [
      { route: '/counter', text: 'Counter' },
      { route: '/about', text: 'About' }
    ]

    const _onNavItemSelect = (eventKey) => {
      // console.log(e, key, payload)
      dispatch(pushState(null, eventKey.route));
      // this.props.history.pushState(null, payload.route);
    }

    const _goHome = () => {
      dispatch(pushState(null, '/'))
    }


    let childrenElement = this.props.children
    // to transfer props to children
    // childrenElement = React.cloneElement(this.props.children, { someProp: this.someProp });

    let pathname = this.props.location.pathname

    return (
      <div>
        <Navbar inverse>
          <NavBrand><a onClick={_goHome}>React-Redux-Seed</a></NavBrand>
          <Nav>
            <NavItem eventKey={{route: '/counter'}} active={pathname === '/counter'} onSelect={_onNavItemSelect}>Counter</NavItem>
            <NavItem eventKey={{route: '/about' }} active={pathname === '/about'} onSelect={_onNavItemSelect}>About</NavItem>
          </Nav>
        </Navbar>
        {childrenElement}
      </div>
    )
  }

  componentWillMount() {
    const { dispatch } = this.props
    // load moule style
    this.style = require('./style.scss').ref()
    // dispatch(initCommon())
  }

  componentWillUnmount() {
    // unload moule style
    this.style.unref();
  }
}

function mapStateToProps(state) {
  return Object.assign({}, state)
}

// function mapDispatchToProps(dispatch) {
//   return {
//     someAction: bindActionCreators(actionCreator, dispatch)
//   };
// }

// to-do: use es7 decorators instead
export default connect(mapStateToProps)(App)
