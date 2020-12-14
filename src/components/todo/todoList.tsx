import React, {useState} from 'react';
import { TodoCard } from './todoCard';
import { ChangeTodo, AddTodo, RemoveTodo } from "../utils/types";
import { TodoForm } from './todoForm';
import { Data } from "../utils/data";
import './todo.scss'

export const TodoList = () => {
    const [ todos, setTodos ] = useState(Data)

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

    const removeTodo: RemoveTodo = (item) => {
        const newList = todos.filter(currentTodo => currentTodo.item !== item )
        setTodos(newList)
    }

    return (
        <div className="overall">
            <TodoForm addTodo={addTodo} />
            <div>
                {
                    todos.map(todo => { return <TodoCard  key={todo.item} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} /> })
                }
            </div>
        </div>
    );
}