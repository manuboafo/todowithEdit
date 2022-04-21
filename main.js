window.addEventListener("load", () => {
  const inputTodo = document.querySelector("#input-todo");
  const submitButton = document.querySelector("#todo-submit");
  const todoList = document.querySelector(".todo-list");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let inputTodovalue = inputTodo.value;
    if (!inputTodovalue) {
      alert("Kindly Input Fields");
    } else {
      const todoItem = document.createElement("div");
      todoItem.classList.add("todo-item");
      todoList.appendChild(todoItem);

      const todoText = document.createElement("input");
      todoText.type = "text";
      todoText.classList.add("todo-text");
      todoText.setAttribute("readonly", "readonly");
      todoText.value = inputTodovalue;
      todoItem.appendChild(todoText);

      const buttonTodoItem = document.createElement("div");
      buttonTodoItem.classList.add("button-todoitem");
      todoItem.appendChild(buttonTodoItem);

      const editButton = document.createElement("button");
      editButton.classList.add("edit");
      const editIcon = document.createElement("i");
      editIcon.classList.add("fa-solid");
      editIcon.classList.add("fa-pen-to-square");
      buttonTodoItem.appendChild(editButton);
      editButton.appendChild(editIcon);

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fa-solid");
      deleteIcon.classList.add("fa-trash-can");
      deleteButton.appendChild(deleteIcon);
      buttonTodoItem.appendChild(deleteButton);

      inputTodo.value = "";

      deleteButton.addEventListener("click", () => {
        todoList.removeChild(todoItem);
      });

      editButton.addEventListener("click", () => {
        const classAttribute = editIcon.getAttribute("class");
        if (classAttribute == "fa-solid fa-pen-to-square") {
          todoText.removeAttribute("readonly");
          editIcon.removeAttribute("class");
          editIcon.classList.add("fa-solid");
          editIcon.classList.add("fa-floppy-disk");
          todoText.focus();
          console.log(editIcon)
        } else {
          todoText.setAttribute("readonly", "readonly");
          editIcon.removeAttribute("class");
          editIcon.classList.add("fa-solid");
          editIcon.classList.add("fa-pen-to-square");
        }
      });
    }
  });
});
