import React, { useState } from 'react';
import { TodoItem } from './components/todo/todoItem';
import { ChangeTodo, Todo } from "./components/utils/types";

const data: Array<Todo> = [
  {item: 'Wash the dishes', isCompleted: true},
  {item: 'Watch typescript tutorial', isCompleted: false}
]

const App: React.FC = () => {
  const [ todo, setTodo ] = useState(data)

  const changeTodo: ChangeTodo = (selectedTodo) => {
    const newTodo = todo.map(todo => {
      if (todo === selectedTodo) { 
        console.log('toggle')
        return {
          ...todo, 
          isCompleted: !todo.isCompleted
        }
      }
      console.log('untoggle')
      return todo
    })
    setTodo(newTodo)
  }

  return (
    <>
      <TodoItem todo={data[0]} changeTodo={changeTodo} />
      <TodoItem todo={data[1]} changeTodo={changeTodo} />
    </>
  );
}

export default App;
