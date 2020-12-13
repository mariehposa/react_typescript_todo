import React from 'react';
import { Todo } from "../utils/types";

interface TodoItemProp {
    todo: Todo,
    changeTodo: (selectedTodo: Todo) => void;
}

export const TodoItem: React.FC<TodoItemProp> = ({todo}) => {
    return (
        <div>
            <input type="checkbox" checked={todo.isCompleted} />
            <p style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}>{todo.item}</p>
            <button>Add</button>
        </div>
    );
}