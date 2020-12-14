import React, { useState } from 'react';

export const TodoForm = () => {
    const [ newTodo, setNewTodo ] = useState('');

    
    return (
        <div>
            <input type="text" />
            <button type="submit" >Add todo</button>
        </div>
    );
}