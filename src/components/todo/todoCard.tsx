import React from 'react';
import { ChangeTodo, RemoveTodo, Todo } from "../utils/types";
interface TodoItemProp {
    todo: Todo;
    changeTodo: ChangeTodo;
    removeTodo: RemoveTodo;
}

export const TodoCard: React.FC<TodoItemProp> = ({todo, changeTodo, removeTodo}) => {
    return (
        <div className="card">
            <div>
                <label className="checkbox">
                    <input type="checkbox" checked={todo.isCompleted} onChange={() => changeTodo(todo)} />
                    {/* <input type="checkbox" /> */}
                    <span></span>
                </label>
                <p style={{textDecoration: todo.isCompleted ? "line-through" : "none"}} onClick={() => changeTodo(todo)}>{todo.item}</p>
            </div>
            <p className="close" onClick={() => removeTodo(todo.item)}>x</p>
        </div>
    );
}