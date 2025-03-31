function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@grocery.com" && password === "admin123") {
        alert("Login Successful!");
        sessionStorage.setItem("loggedIn", "true"); // Store login status
        window.location.href = "hello.html"; // Redirect to inventory page
    } else {
        alert("Invalid Credentials");
    }
}

// Prevent access to inventory.html if not logged in
function checkAuth() {
    if (sessionStorage.getItem("loggedIn") !== "true") {
        alert("You must log in first!");
        window.location.href = "login.html"; // Redirect back to login
    }
}
