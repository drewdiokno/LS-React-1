import React from 'react';

const DisplayList = (props) => {


  return (
    <ul>
      {props.todoList.map((todo, key) => {
          return <li key = {key}></li>
      })}
    </ul>
  );

 
};


export default DisplayList;
