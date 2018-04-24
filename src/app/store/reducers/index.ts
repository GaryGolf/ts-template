import { routerReducer as routing, RouteActions } from 'react-router-redux';
import { combineReducers, Reducer } from 'redux';
import todos from './todos';

export interface AppState {
  routing: RouteActions;
  todos: TodoStoreState;
}

export default combineReducers<AppState>({
  routing,
  todos
});