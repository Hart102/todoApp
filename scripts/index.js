const selector = (element) => document.querySelector(element);
const createBtn = selector("#createBtn");
const title = selector("#title");
const description = selector("#description");
const todoForm = selector("#todo-form");
const addTodoBtn = selector("#addTodoBtn");

// Open Or hide todo form
const toggleTodoForm = () => {
  if (todoForm.classList.contains("hidden"))
    return todoForm.classList.remove("hidden");

  return todoForm.classList.add("hidden");
};

// Get user input
const getInput = (title, description) => {
  if (title.value.length > 0 && description.value.length > 0) {
    return {
      id: 0,
      title: title.value,
      description: description.value,
    };
  }
};

// Store todos to localStorage
const storeTodos = (todoObject) => {
  if (todoObject) {
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    const fetchedTodos = JSON.parse(localStorage.getItem("todos"));
    fetchedTodos.push(todoObject);
    localStorage.setItem("todos", JSON.stringify(fetchedTodos));
    clearInput();
  }
};

// Clear user input
const clearInput = () => {
  title.value = "";
  description.value = "";
};

// Open or close todo form
createBtn.addEventListener("click", () => toggleTodoForm());

// Add todo action button
addTodoBtn.addEventListener("click", () => {
  storeTodos(getInput(title, description));
  toggleTodoForm();
});
