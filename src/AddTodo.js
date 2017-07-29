import React from 'react';


const AddTodo = (props) => {
    return (
        <div>
            <input type='text' value={props.todo} onChange={props.handleTodo} />
        </div>
    );
}

export default AddTodo;