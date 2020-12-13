import React from 'react';

interface TodoItemProp {
    todo: {
        item: string,
        isCompleted: boolean
    };
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