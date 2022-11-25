const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const listEl = document.querySelector("ul");

function addGoal() {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = inputEl.value;
  listEl.appendChild(listItemEl);
  inputEl.value = "";
}

buttonEl.addEventListener("click", addGoal);
