const tasks = document.querySelector(".tasks-container"); //Selecting tasks container
const inputbox = document.getElementById("input-box"); //Selecting input box
const btn = document.getElementById("add"); //Selecting the add button

tasks.addEventListener("click", (e) => {
  const icon = e.target.closest(".icon");
  const del = e.target.closest(".del-icon");
  if (icon) {
    toggleTaskStatus(icon);
  } else if (del) {
    del.parentElement.remove();
  }
  saveData();
});

function toggleTaskStatus(icon) {
  if (icon.getAttribute("name") === "ellipse-outline") {
    icon.setAttribute("name", "checkmark-circle");
    icon.parentElement.classList.add("checked");
  } else {
    icon.setAttribute("name", "ellipse-outline");
    icon.parentElement.classList.remove("checked");
  }
}

btn.addEventListener("click", () => {
  if (!inputbox.value) {
    alert("Write something!");
  } else {
    addNewTask();
  }
});

inputbox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (!inputbox.value) {
      alert("Write something!");
    } else {
      addNewTask();
    }
  }
});

function addNewTask() {
  const newTask = `<div class="task">
      <ion-icon class="icon" name="ellipse-outline"></ion-icon>
      ${inputbox.value}
      <ion-icon class="del-icon" name="close"></ion-icon>
    </div>`;
  tasks.innerHTML += newTask;
  inputbox.value = "";
  saveData();
}

function saveData() {
  localStorage.setItem("data", tasks.innerHTML);
}

function getData() {
  tasks.innerHTML = localStorage.getItem("data");
}

getData();
