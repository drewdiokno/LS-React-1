/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import AddTodo from './AddTodo';
import SubmitTodo from './SubmitTodo';
import DisplayList from './DisplayList';

require('!style-loader!css-loader!sass-loader!./index.scss');

class App extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            todoList: [],
        };
        this.handleTodo = this.handleTodo.bind(this);
        this.submitTodo = this.submitTodo.bind(this);
    }

    handleTodo(event) {
      let newTodo = this.state.todo;
      newTodo = event.target.value;
      this.setState({todo: newTodo});
    }

    submitTodo() {
      const todoList = this.state.todoList;
      todoList.push(this.state.todo);
      this.setState({todoList});
    }

    render() {
      return (
        <div>
          <AddTodo todo={this.state.todo} handleTodo={this.handleTodo}/><br />
          <SubmitTodo submitTodo={this.submitTodo}/><br />
          <DisplayList todoList={this.state.todoList}/>
        </div>
      );
    }
}


ReactDom.render(<App />, document.getElementById('root'));
