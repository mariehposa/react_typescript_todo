import React, { ChangeEvent, FormEvent, useState } from 'react';
import { AddTodo } from "../utils/types";

interface AddTodoProps {
    addTodo: AddTodo;
}

export const TodoForm: React.FC<AddTodoProps> = ({addTodo}) => {
    const [ newTodo, setNewTodo ] = useState('');

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addTodo(newTodo)
        setNewTodo('')
    }

    return (
        <div className="header">
            <div>
                <input type="text" value={newTodo} onChange={handleInput} />
                <button type="submit" onClick={handleSubmit}>Add todo</button>
            </div>
        </div>
    );
}