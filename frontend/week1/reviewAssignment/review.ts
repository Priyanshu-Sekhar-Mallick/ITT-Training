const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addTaskBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLElement;


addTaskBtn.addEventListener("click", () => {

  if (taskInput.value === "") return;

  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.margin = "10px";
  li.style.padding = "10px";
  li.style.backgroundColor = "#333";
  li.style.color = "white";

  const span = document.createElement("span");
  span.innerText = taskInput.value;

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✔";
  completeBtn.style.marginRight = "10px";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";

  const btnContainer = document.createElement("div");
  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnContainer);

  taskList.appendChild(li);

  taskInput.value = "";

  completeBtn.addEventListener("click", () => {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";

  });

  deleteBtn.addEventListener("click", () => {
    li.remove();

  });

});