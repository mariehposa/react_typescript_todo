export type Todo = {
    item: string;
    isCompleted: boolean;
};

export type ChangeTodo = (selectedTodo: Todo) => void;

export type AddTodo = (selectedTodo: Todo) => void;