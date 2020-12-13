import React from 'react';
import { ChangeTodo, Todo } from "../utils/types";

interface TodoItemProp {
    todo: Todo,
    changeTodo: ChangeTodo
}

export const TodoItem: React.FC<TodoItemProp> = ({todo, changeTodo}) => {
    return (
        <div style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => changeTodo(todo)} />
            {todo.item}
            {/* <button>Add</button> */}
        </div>
    );
}