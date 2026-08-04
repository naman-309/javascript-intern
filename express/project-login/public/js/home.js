// localStorage se saved user receive kiya
const savedUser = localStorage.getItem("loggedInUser");

// Agar user localStorage mein nahi hai
if (!savedUser) {
    // Login page par redirect kar do
    window.location.href = "/login.html";
} else {
    // JSON string ko JavaScript object mein convert kiya
    const user = JSON.parse(savedUser);

    // User data page par show kar rahe hain
    document.querySelector("#welcomeMessage").textContent =
        `Welcome, ${user.name}`;

    document.querySelector("#userId").textContent = user.id;
    document.querySelector("#userName").textContent = user.name;
    document.querySelector("#userEmail").textContent = user.email;
}

// Logout button select kiya
const logoutButton = document.querySelector("#logoutButton");

// Logout button click event
logoutButton.addEventListener("click", () => {
    // User ko localStorage se remove kiya
    localStorage.removeItem("loggedInUser");

    // Login page par redirect kiya
    window.location.href = "/login.html";
});