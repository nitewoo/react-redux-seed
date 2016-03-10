import { injectAsyncReducer } from 'store/configureStore'
import About from 'app/About'
import NotFound from 'app/NotFound'

export const createRoutes = function (store) {
  return [
    {
      path: 'counter',
      getComponents(location, callback) {
        // [webpack code-splitting](http://webpack.github.io/docs/code-splitting.html)
        require.ensure([
            'app/Counter',
            'app/Counter/reducer'
          ], function (require) {
          const reducer = require('app/Counter/reducer').default
          const component = require('app/Counter').default

          injectAsyncReducer(store, 'counter', reducer)
          callback(null, component)
        })
      }
    }, {
      path: 'about',
      component: About
    }, {
      path: '*',
      component: NotFound
    }
  ]
}