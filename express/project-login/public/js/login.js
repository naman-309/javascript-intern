// Login form select kiya
const loginForm = document.querySelector("#loginForm");

// Message box select kiya
const messageBox = document.querySelector("#message");

// Login form submit event
loginForm.addEventListener("submit", async (event) => {
    // Page reload stop kiya
    event.preventDefault();

    // Input values receive ki
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Basic empty field check
    if (!email || !password) {
        showMessage("Please enter email and password", "danger");
        return;
    }

    try {
        // Backend login API ko request bhej rahe hain
        const response = await fetch("/api/users/login", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        // Backend response receive kiya
        const data = await response.json();

        // Login successful
        if (response.ok) {
            showMessage(data.message, "success");

            // User information browser ke localStorage mein save ki
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(data.user)
            );

            // Home page par redirect
            setTimeout(() => {
                window.location.href = "/home.html";
            }, 1000);

        } else {
            // Invalid login message
            showMessage(data.message, "danger");
        }

    } catch (error) {
        console.log(error);

        showMessage("Server connection failed", "danger");
    }
});

// Message show function
function showMessage(message, type) {
    messageBox.innerHTML = `
        <div class="alert alert-${type}">
            ${message}
        </div>
    `;
}