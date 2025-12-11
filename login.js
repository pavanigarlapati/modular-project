document.getElementById("loginBtn").addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("No user found! Please signup first.");
    return;
  }

  if (user.email === email && user.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login Successful!");
    window.location.href = "todos.html";
  } else {
    alert("Invalid Credentials!");
  }
});
