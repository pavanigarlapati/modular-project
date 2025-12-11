import { displayTodos } from "./displayTodos.js";

// Check Login
if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Please login first!");
  window.location.href = "login.html";
}

async function fetchTodos() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=20");
  let data = await res.json();
  displayTodos(data);
}

fetchTodos();
