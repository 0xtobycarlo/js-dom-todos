const liParent = document.querySelector("#todo-list");
const input = document.querySelector("Form");

function addTodo(todo) {
  const liEl = document.createElement("li");
  liEl.innerText = todo.title;
  liParent.append(liEl);
}
