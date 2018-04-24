const appConfig = require('../../../config/main');
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, Middleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer, { RootState } from './reducers';
import { createLogger } from 'redux-logger';

export function configureStore(history, initialState?: RootState): Redux.Store<RootState> {

  const middlewares: Redux.Middleware[] = [
    routerMiddleware(history),
    thunk,
  ];

  /** Add Only Dev. Middlewares */
  if (appConfig.env !== 'production' && process.env.BROWSER) {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const composeEnhancers = (appConfig.env !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store: Redux.Store<IStore> = createStore<IStore>(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares),
  ));

  if (appConfig.env === 'development' && (module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      store.replaceReducer((require('./reducers')));
    });
  }

  return store;
}