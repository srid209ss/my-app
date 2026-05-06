const loginContainer = document.querySelector('.login-container');
const dashboard = document.getElementById('dashboard');

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("message").innerText = "Login Successful!";
    // Show dashboard and hide login container
    loginContainer.classList.add('hidden');
    dashboard.classList.remove('hidden');
  } else {
    document.getElementById("message").innerText = "Invalid Credentials";
  }
});

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', function() {
    // Clear the inputs
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById("message").innerText = '';
    
    // Swap views back
    dashboard.classList.add('hidden');
    loginContainer.classList.remove('hidden');
});