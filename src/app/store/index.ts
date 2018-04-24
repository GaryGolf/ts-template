const appConfig = require('../../../config/main');
import { createStore, applyMiddleware, compose, Store, Middleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer, { AppState } from './reducers';
import { createLogger } from 'redux-logger';

export function configureStore(history, initialState?: AppState): Store<AppState> {

  const middlewares: Middleware[] = [
    routerMiddleware(history),
    thunk,
  ];

  /** Add Only Dev. Middlewares */
  if (appConfig.env !== 'production' && process.env.BROWSER) {
    const logger = createLogger({collapsed: true});
    middlewares.push(logger);
  }

  const composeEnhancers = (appConfig.env !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store: Store<AppState> = createStore<AppState>(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares),
  ));

  if (appConfig.env === 'development' && (module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      store.replaceReducer((require('./reducers')));
    });
  }

  return store;
}