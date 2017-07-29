/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import AddTodo from './AddTodo';

require('!style-loader!css-loader!sass-loader!./index.scss');

class App extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            todoList: [],
        };
        this.handleTodo = this.handleTodo.bind(this);
    }

    handleTodo(event) {
         let newTodo = this.state.todo;  
         newTodo = event.target.value;
         this.setState({todo: newTodo});
    }

    render() {
        return (
                <div>
                    <AddTodo todo={this.state.todo} handleTodo= {this.handleTodo}/>
                </div>    
                );
            }
}


ReactDom.render(<App />, document.getElementById('root'));
