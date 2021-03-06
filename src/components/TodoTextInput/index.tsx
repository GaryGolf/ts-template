import * as React from 'react'
import * as classNames from 'classnames'
const style = require('./style.css')

interface TodoTextInputProps {
  text?: string
  placeholder?: string
  newTodo?: boolean
  editing?: boolean
  onSave: (text: string) => any
};

interface TodoTextInputState {
  text: string
};

export default class TodoTextInput extends React.Component<TodoTextInputProps, TodoTextInputState> {

  constructor(props?: TodoTextInputProps, context?: any) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    }
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    const text = e.target.value.trim();
    if (!this.props.newTodo) {
      this.props.onSave(text);
    }
  }

  render() {
    // const classes = classNames({
    //   [style.edit]: this.props.editing,
    //   [style.new]: this.props.newTodo
    // }, style.normal);
    
    const classes = [
      this.props.editing ? style.edit : null,
      this.props.newTodo ? style.new : null,
    ].join(' ')

    return (
      <input className={classes}
        type="text"
        autoFocus
        placeholder={this.props.placeholder}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
}