import React, { ChangeEvent, useState } from 'react';

export const TodoForm = () => {
    const [ newTodo, setNewTodo ] = useState('');

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }
    return (
        <div>
            <input type="text" value={newTodo} onChange={handleInput} />
            <button type="submit" >Add todo</button>
        </div>
    );
}