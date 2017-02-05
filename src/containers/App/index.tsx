import * as React from 'react'
import { bindActionCreators } from 'redux'
import { RootState } from '../../reducers'
import * as TodoActions from '../../actions/todos'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'

const {connect} = require('react-redux')
const style = require('./style.css')

interface AppProps {
  todos: TodoItemData[];
  actions: typeof TodoActions;
};

interface AppState {
  /* empty */
}
@connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions as any, dispatch)
  })
)
export default class App extends React.Component<AppProps, AppState>{
  render() {
    const { todos, actions, children } = this.props;
    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
        {children}
      </div>
    )
  }
}