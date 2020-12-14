import React from 'react';
import { TodoList } from './components/todo/todoList';
import { TodoForm } from "./components/todo/todoForm";

const App: React.FC = () => {

  return (
    <>
      <TodoList />
      <TodoForm />
    </>
  );
}

export default App;
