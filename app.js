import {getItems} from "./firebase.js";
const todosContainer = document.querySelector("#todos-container");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
let todos = [];
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value;

  if (text != "") {
    console.log(todoInput.value);
    loadTodos();
  }
});

async function loadTodos() {
  todosContainer.innerHTML = "";
  todos = [];
  try{
    const response = await getItems(todoInput.value);
    todos = [...response];
    renderTodos();
  }catch(error){}
}
function renderTodos() {
    let html = "";
    todos.forEach((todo) => {
        html+=`
            <div class="imprimir">
              <table class="table">
                <thead>
                  <tr class="table-success">
                    <th scope="col">Tiempo Test 1</th>
                    <th scope="col">Tiempo Test 1.2</th>
                    <th scope="col">Tiempo Test 1.3</th>
                    <th scope="col">Score Test</th>
                    <th scope="col">Tiempo Juego caras</th>
                    <th scope="col">Score Juego de caras</th>
                    <th scope="col">Tiempo juego de pi 1</th>
                    <th scope="col">Tiempo juego de pi 1.2</th>
                    <th scope="col">Tiempo Juego de pi 1.3</th>
                    <th scope="col">Score juego de pi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-secondary">
                    <td>${todo.timeT1}</td>
                    <td>${todo.timeT2}</td>
                    <td>${todo.timeT3}</td>
                    <td>${todo.scoreT}</td>
                    <td>${todo.timeF}</td>
                    <td>${todo.scoreF}</td>
                    <td>${todo.timeD1}</td>
                    <td>${todo.timeD2}</td>
                    <td>${todo.timeD3}</td>
                    <td>${todo.scoreD}</td>
                  </tr>
                </tbody>
              </table>
            </div>
        `;
    });
    todosContainer.innerHTML=html;
}