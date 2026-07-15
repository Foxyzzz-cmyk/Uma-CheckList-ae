let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
let add = document.getElementById("add");
let checklist = document.getElementById("addcheck");

function criarTarefa(texto, indice) {
  let item = document.createElement("div");
  item.className = "lista";

  let createcheck = document.createElement("input");
  createcheck.setAttribute("type", "checkbox");
  createcheck.setAttribute("name", "list");

  let label = document.createElement("label");
  label.textContent = texto;

  let botaoRemover = document.createElement("button");
  botaoRemover.textContent = "X";
  botaoRemover.className = "remover";
  botaoRemover.addEventListener("click", function () {
    tarefas.splice(indice, 1);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    item.remove();
  });

  item.appendChild(label);
  item.appendChild(createcheck);
  item.appendChild(botaoRemover);

  document.getElementById("checklist").appendChild(item);
}

add.addEventListener("click", function () {
  let taskText = checklist.value.trim();

  if (taskText === "") {
    return;
  }

  tarefas.push(taskText);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  criarTarefa(taskText, tarefas.length - 1);
  checklist.value = "";
});

checklist.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    add.click();
  }
});


tarefas.forEach(function (tarefa, indice) {
  criarTarefa(tarefa, indice);
});