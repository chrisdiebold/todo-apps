export type Todo = {
    id: string,
    isComplete: boolean,
    text: string,
    createdAt: Date,
    completedAt?: Date,
}

export const todos: Todo[]  = [];

export const createTodo = (isComplete: boolean, text: string) => {
    return {
        id: crypto.randomUUID(), 
        isComplete,
        text,
        createdAt: new Date(),
    } as Todo
}
