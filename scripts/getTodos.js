const getTodos = localStorage.getItem("todos");
const todos = JSON.parse(getTodos);

const todoTemplate = (todo) => {
  return `<article class="bg-yellow-100 rounded p-5 flex flex-col gap-5">  
            <div>
              <p class="font-bold uppercase">${todo.title}</p>
              <p class="font-light line-clamp-2 first-letter:uppercase">${todo.description}</p>
            </div>
            <div class="flex justify-between">
              <i class="fa fa-pencil p-2 rounded bg-blue-300"></i>
              <input type="checkbox" onClick="getMultipleTodoId(${todo.id})"/>              
            </div>
        </article>`;
};

if (todos && todos.length > 0) {
  todos.map((todo) => {
    selector("#todoContainer").innerHTML += todoTemplate(todo);
  });
}

const idContainer = [];
const getMultipleTodoId = (todoId) => {
  if (todoId) {
    idContainer.push(todoId);
    activateDeleteAllBtn();
    return idContainer;
  }
};

// Delete todos
const deleteTodos = () => {
  for (let i = 0; i < idContainer.length; ) {
    todos.splice(
      todos.findIndex((todo) => todo.id === idContainer[i]),
      1
    );
    i++;
  }
  localStorage.setItem("todos", JSON.stringify(todos));
};

const activateDeleteAllBtn = () => {
  if (idContainer.length) selector(".deleteAll").classList.remove("hidden");
};
