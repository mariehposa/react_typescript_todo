import React, { ChangeEvent, FormEvent, useState } from 'react';
import { AddTodo } from "../utils/types";

interface AddTodoProps {
    addTodo: AddTodo;
}

export const TodoForm: React.FC<AddTodoProps> = ({addTodo}) => {
    const [ newTodo, setNewTodo ] = useState('');

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        // e.preventDefault()
        addTodo(newTodo)
    }

    return (
        <div>
            <input type="text" value={newTodo} onChange={handleInput} />
            <button type="submit" onClick={handleSubmit}>Add todo</button>
        </div>
    );
}