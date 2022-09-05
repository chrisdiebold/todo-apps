let num = 0;

export const todoItem = (element: HTMLFormElement | HTMLDivElement) => {
  const parent = document.createElement("div");
  parent.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `checkbox-${num++}`

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Create a todo...";

  parent.appendChild(checkbox)
  parent.appendChild(input);

  element.appendChild(parent)
};

export const todoListItem = () => {
    
}
