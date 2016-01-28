import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { pushState } from 'redux-router'
import { staticUrl } from '../utility/url'

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'react-bootstrap'

// // Some components use react-tap-event-plugin to listen for touch events.
// // This dependency is temporary and will go away once react v1.0 is released.
// // Until then, be sure to inject this plugin at the start of your app.
// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin()

class App extends Component {
  render() {
    console.log('render app')
    const { i18n, dispatch } = this.props

    const navItems = [
      { route: '/counter', text: 'Counter' },
      { route: '/about', text: 'About' }
    ]

    const _onNavItemSelect = (eventKey) => {
      dispatch(pushState(null, eventKey.route));
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
          <NavbarBrand><a onClick={_goHome}>{i18n.title}</a></NavbarBrand>
          <Nav>
            <NavItem eventKey={{route: '/counter'}} active={pathname === '/counter'} onSelect={_onNavItemSelect}>Counter</NavItem>
            <NavItem eventKey={{route: '/about' }} active={pathname === '/about'} onSelect={_onNavItemSelect}>About</NavItem>
          </Nav>
        </Navbar>
        {childrenElement}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // **Don’t do this!**
  // return state
  // **Don’t do this!**
  // It kills any performance optimizations because App will rerender after every action.
  // It’s better to have more granular connect() on several components in your view hierarchy that each only listen to a relevant slice of the state.
  
  // **Don’t do this!**
  // return {
  //  context: { employeeName: '吴俊' }
  // }
  // **Don’t do this!**
  // The connected Component will rerender after every action.
  // Because it is NOT related any reducer,
  // cause that react-redux will treat it always has different after store was updated by any action was dispatched

  return {
    i18n: state.i18n.global
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     someAction: bindActionCreators(actionCreator, dispatch)
//   };
// }

// to-do: use es7 decorators instead
export default connect(mapStateToProps)(App)