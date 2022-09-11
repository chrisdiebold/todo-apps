import type { Todo } from "./data";

export function createTodoForm(mountpoint: HTMLFormElement) {
    const checkbox = createCheckbox();
    const input = createTodoInput();
    mountpoint.appendChild(checkbox)
    mountpoint.appendChild(input)

    /*
    <form>
        checkbox
        input
    </form>
    */
}

export function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'custom-checkbox';
    checkbox.id ='checkbox'
    // TODO: does every checkbox need a unique id?
    return checkbox;

    // <input type='checkbox' class='custom-checkbox' />
}

export function createTodoInput() {
    const todoInput = document.createElement('input');
    todoInput.type = 'text';
    todoInput.className = 'todo-input';
    todoInput.id = 'todo-input'
    todoInput.placeholder = 'Create a new todo...'
    // TODO: should not allow user to overflow the form with text?

    
    return todoInput;
}

export function createTodoItem(todo: Todo){
    const item = document.createElement('div')
    item.id = todo.id
    item.className='todo-item';
    
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = todo.isComplete
    
    const p = document.createElement('p');
    p.className = 'todo-text'
    p.innerHTML = todo.text

    item.appendChild(checkbox)
    item.appendChild(p)

    return item
}