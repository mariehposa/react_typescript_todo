import React from 'react';

interface TodoItemProp {
    todo: {
        item: string,
        isCompleted: boolean
    };
}

export const TodoItem = () => {
    return (
        <div>
            <input type="text" />
            <button>Add</button>
        </div>
    );
}