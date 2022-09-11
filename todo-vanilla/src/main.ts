import './style.css'
import { createTodoForm } from './components'
import {addSubmitEvent} from './events'



// Elements
const form = document.getElementById('todo-form') as HTMLFormElement
const todoList = document.getElementById('todo-list') as HTMLUListElement;

if(form) {
    createTodoForm(form)

    const todoFormCheckbox = document.getElementById('checkbox') as HTMLInputElement
    const todoFormInput = document.getElementById('todo-input') as HTMLInputElement
    if(todoList && todoFormCheckbox && todoFormInput) {
        addSubmitEvent(form, todoList, todoFormCheckbox, todoFormInput);
    } else {
      
        throw new Error('Elements not defined on page.')
    }
}

