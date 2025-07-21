function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.innerText = taskText;

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", span.innerText);
    if (newText !== null && newText.trim() !== "") {
      span.innerText = newText.trim();
    }
  };

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => {
    li.remove();
  };

  const btnContainer = document.createElement("div");
  btnContainer.className = "btns";
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(removeBtn);

  li.appendChild(span);
  li.appendChild(btnContainer);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
