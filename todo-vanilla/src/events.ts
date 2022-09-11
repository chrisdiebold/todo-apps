import { createTodoItem } from "./components";
import { createTodo, todos } from "./data";

export const form = document.getElementById("todo-form");

export const addSubmitEvent = (form: HTMLFormElement, list: HTMLUListElement, checkbox: HTMLInputElement, inputElement: HTMLInputElement) => {
 
  form.addEventListener('submit', (event) => {
    // prevents default behavior on submit action
    // which is a page refeash and a request to a 
    // server with FormData
    event.preventDefault()
  });
  
  form.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      
      const todo = createTodo(checkbox.checked, inputElement.value);
      todos.push(todo);
      list.innerHTML = '';

      for(let todo of todos) {
        const item = createTodoItem(todo);
        const li = document.createElement('li');
        li.className = 'list-item'
        li.appendChild(item);
        list.appendChild(li)
      }

      // append a new todo item
      // save data to something?
      // what does data represent?
      // clear the form
     
      clearForm(checkbox, inputElement)
      console.log("submitted the form!!", list);
    }
  });
};

function clearForm(checkbox: HTMLInputElement, inputElement: HTMLInputElement) {
  checkbox.checked = false
  inputElement.value = ""
}
