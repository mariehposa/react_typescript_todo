import React, {useState} from 'react';
import { TodoCard } from './todoCard';
import { Todo, ChangeTodo, AddTodo } from "../utils/types";
import { TodoForm } from './todoForm';

const data: Array<Todo> = [
    {item: 'Wash the dishes', isCompleted: true},
    {item: 'Watch typescript tutorial', isCompleted: false}
]

export const TodoList = () => {
    const [ todos, setTodos ] = useState(data)

    const changeTodo: ChangeTodo = selectedTodo => {
        const newTodo = todos.map(todo => {
        if (todo === selectedTodo) { 
            return {
                ...todo, 
                isCompleted: !todo.isCompleted
            }
        }
        return todo
        })
        setTodos(newTodo)
    }

    const addTodo: AddTodo = (newTodo) => {
        if (newTodo !== '') {
            setTodos([...todos, {item: newTodo, isCompleted: false}])
        }
    }

    return (
        <div>
            {
                todos.map(todo => { return <TodoCard  key={todo.item} todo={todo} changeTodo={changeTodo} /> })
            }
            <TodoForm addTodo={addTodo} />
        </div>
    );
}