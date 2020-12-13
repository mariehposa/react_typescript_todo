import React from 'react';
import { Todo } from "../utils/types";

interface TodoItemProp {
    todo: Todo
}

export const TodoItem: React.FC<TodoItemProp> = ({todo}) => {
    return (
        <div>
            <input type="checkbox" checked={todo.isCompleted} />
            <p>{todo.item}</p>
            <button>Add</button>
        </div>
    );
}