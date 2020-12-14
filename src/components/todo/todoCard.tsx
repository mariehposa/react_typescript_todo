import React from 'react';
import { ChangeTodo, Todo } from "../utils/types";

interface TodoItemProp {
    todo: Todo;
    changeTodo: ChangeTodo;
}

export const TodoCard: React.FC<TodoItemProp> = ({todo, changeTodo}) => {
    return (
        <div>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => changeTodo(todo)} />
            <p style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}>{todo.item}</p>
            <p>x</p>
        </div>
    );
}