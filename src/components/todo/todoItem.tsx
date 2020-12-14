import React from 'react';
import { ChangeTodo, Todo } from "../utils/types";

interface TodoItemProp {
    todo: Todo;
    changeTodo: ChangeTodo;
}

export const TodoItem: React.FC<TodoItemProp> = ({todo, changeTodo}) => {
    return (
        <div>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => changeTodo(todo)} />
            <p style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}>{todo.item}</p>
            {/* <button>Add</button> */}
        </div>
    );
}