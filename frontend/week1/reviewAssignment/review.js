var taskInput = document.getElementById("taskInput");
var addTaskBtn = document.getElementById("addTaskBtn");
var taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click", function () {
    if (taskInput.value === "")
        return;
    var li = document.createElement("li");
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.margin = "10px";
    li.style.padding = "10px";
    li.style.backgroundColor = "#333";
    li.style.color = "white";
    var span = document.createElement("span");
    span.innerText = taskInput.value;
    var completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";
    completeBtn.style.marginRight = "10px";
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    var btnContainer = document.createElement("div");
    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(btnContainer);
    taskList.appendChild(li);
    taskInput.value = "";
    completeBtn.addEventListener("click", function () {
        span.style.textDecoration = "line-through";
        span.style.color = "gray";
    });
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
});
