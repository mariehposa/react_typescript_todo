export type Todo = {
    item: string,
    isCompleted: boolean
};

export type changeTodo = (selectedTodo: Todo) => void;