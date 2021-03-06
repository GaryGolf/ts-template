import { createStore, applyMiddleware, Store, Middleware } from 'redux'
import { logger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import rootReducer, { RootState } from './reducers'

export default function configureStore(history, initialState?: RootState): Store<RootState> {
  const create = window.devToolsExtension && !PRODUCTION
    ? window.devToolsExtension()(createStore)
    : createStore

  const middleware: Middleware[] =[ReduxThunk, routerMiddleware(history)] 
  if(!PRODUCTION) {
    // const logger = createLogger({collapsed: true})
    middleware.push(logger)
  } 
  const createStoreWithMiddleware = applyMiddleware(...middleware)(create)

  const store = createStoreWithMiddleware(rootReducer, initialState) as Store<RootState>

  if (!PRODUCTION && module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(require('./reducers'))
    })
  }

  return store 
}
