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
              <i class="fa fa-trash p-2 rounded bg-red-300"></i>
            </div>
        </article>`;
};

if (todos && todos.length > 0) {
  todos.map((todo) => {
    selector("#todoContainer").innerHTML += todoTemplate(todo);
  });
}
