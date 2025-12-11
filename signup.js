document.getElementById("signupBtn").addEventListener("click", () => {
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  if (!user.email || !user.password || !user.name) {
    alert("All fields are required!");
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup Successful!");

  window.location.href = "login.html";
});
