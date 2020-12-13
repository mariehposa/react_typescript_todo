import React from 'react';
import { TodoItem } from './components/todo/todoItem';
import { Todo } from "./components/utils/types";

const data: Array<Todo> = [
  {item: 'Wash the dishes', isCompleted: true},
  {item: 'Watch typescript tutorial', isCompleted: false}
]

const App: React.FC = () => {
  return (
    <>
      <TodoItem todo={data}/>
    </>
  );
}

export default App;
