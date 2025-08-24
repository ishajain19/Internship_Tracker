const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Switching between login and register
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

// Handling Registration (Demo only – no DB here)
const registerForm = document.querySelector(".sign-up-form");
registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = registerForm.querySelector("input[name='username']").value;
    const email = registerForm.querySelector("input[name='email']").value;
    const password = registerForm.querySelector("input[name='password']").value;

    alert("Registration successful! Now login with your credentials.");
    container.classList.remove("sign-up-mode");

    // Auto-fill login form
    document.querySelector(".sign-in-form input[name='username']").value = username;
    document.querySelector(".sign-in-form input[name='password']").value = password;
});

// Handling Login
const loginForm = document.querySelector(".sign-in-form");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = loginForm.querySelector("input[name='username']").value;
    const password = loginForm.querySelector("input[name='password']").value;

    // Hardcoded login (username: student, password: student)
    if (username === "student" && password === "student") {
        // Store session (clears automatically on browser close)
        sessionStorage.setItem("isLoggedIn", "true");

        alert("Login successful!");
        window.location.href = "home.html"; // redirect to home
    } else {
        alert("Invalid credentials. Try again!");
    }
});

// Auto-redirect if already logged in (session only, not local)
document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem("isLoggedIn")) {
        window.location.href = "home.html";
    }
});

// Logout function (to be called on home page)
function logout() {
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "login.html"; 
}
