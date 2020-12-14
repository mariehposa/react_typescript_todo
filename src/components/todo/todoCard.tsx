import React from 'react';
import { ChangeTodo, RemoveTodo, Todo } from "../utils/types";

interface TodoItemProp {
    todo: Todo;
    changeTodo: ChangeTodo;
    removeTodo: RemoveTodo;
}

export const TodoCard: React.FC<TodoItemProp> = ({todo, changeTodo, removeTodo}) => {
    return (
        <div className="card">
            <div>
                <input type="checkbox" checked={todo.isCompleted} onChange={() => changeTodo(todo)} />
                <p style={{textDecoration: todo.isCompleted ? "line-through" : "none"}} onClick={() => changeTodo(todo)}>{todo.item}</p>
            </div>
            <p onClick={() => removeTodo(todo.item)}>x</p>
        </div>
    );
}