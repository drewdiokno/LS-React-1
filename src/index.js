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
        this.markCompleted = this.markCompleted.bind(this);
    }

    handleTodo(event) {
      let newTodo = this.state.todo;
      newTodo = event.target.value;
      this.setState({todo: newTodo});
    }

    submitTodo() {
      const todoList = this.state.todoList;
      const newTodo = {name: this.state.todo, completed: false};
      todoList.push(newTodo);
      this.setState({todoList});
      console.log(this.state.todoList);
    }

    markCompleted(key) {
     const todoList = this.state.todoList;
     console.log(this.state.todoList);
     if (!todoList[key].completed) {
        todoList[key].completed = true;
     }
    }

    render() {
      return (
        <div>
          <AddTodo todo={this.state.todo} handleTodo={this.handleTodo}/><br />
          <SubmitTodo submitTodo={this.submitTodo}/><br />
          <DisplayList todoList={this.state.todoList} onClick={this.markCompleted(key)}/*markCompleted={this.markCompleted} *//>
        </div>
      );
    }
}


ReactDom.render(<App />, document.getElementById('root'));
