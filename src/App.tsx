import React, { useState } from 'react';
import { TodoCard } from './components/todo/todoCard';
import { ChangeTodo, Todo } from "./components/utils/types";

const data: Array<Todo> = [
  {item: 'Wash the dishes', isCompleted: true},
  {item: 'Watch typescript tutorial', isCompleted: false}
]

const App: React.FC = () => {

  return (
    <>
      <TodoCard todo={data[0]} changeTodo={changeTodo} />
      <TodoCard todo={data[1]} changeTodo={changeTodo} />
    </>
  );
}

export default App;
