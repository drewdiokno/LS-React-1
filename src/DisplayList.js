import React from 'react';

const DisplayList = (prop) => {
  return (
    <ul>
      {prop.todoList.map((todo) => {
          return <li>{todo}</li>
      })}
    </ul>
  );
};



export default DisplayList;
