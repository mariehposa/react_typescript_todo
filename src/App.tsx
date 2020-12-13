import React, { useState } from 'react';
import { TodoItem } from './components/todo/todoItem';
import { Todo } from "./components/utils/types";

const data: Array<Todo> = [
  {item: 'Wash the dishes', isCompleted: true},
  {item: 'Watch typescript tutorial', isCompleted: false}
]

const App: React.FC = () => {
  const [ todo, setTodo ] = useState(data)
  
  return (
    <>
      <TodoItem todo={data[0]}/>
      <TodoItem todo={data[1]}/>
    </>
  );
}

export default App;
