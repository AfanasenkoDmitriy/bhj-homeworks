const input = document.getElementById("task__input");
const btnAdd = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list");
const remove = document.querySelector("task__remove");

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value != "") {
    const elem = document.createElement("div");
    elem.classList.add("task");

    elem.innerHTML = `
                <div class="task__title">
                       ${input.value}
                       </div>
                       <a href="#" class="task__remove">&times;</a>
            `;
    taskList.append(elem);
  }
  input.value = "";
});

if (remove) {
    remove.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target;
        target.remove();
    });
}

