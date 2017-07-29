import React from 'react';


const SubmitTodo = (props) => {
  console.log(props);
  return (
    <button type = "submit" onClick = {props.submitTodo}>
      Submit
    </button>
  );
};

export default SubmitTodo;
