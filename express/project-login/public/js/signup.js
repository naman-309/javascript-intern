// Signup form select kiya
const signupForm = document.querySelector("#signupForm");

// Message div select kiya
const messageBox = document.querySelector("#message");

// Form submit event
signupForm.addEventListener("submit", async (event) => {
    // Form ka default page reload stop karta hai
    event.preventDefault();

    // Input values receive kar rahe hain
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Basic frontend empty field check
    if (!name || !email || !password) {
        showMessage("Please fill all fields", "danger");
        return;
    }

    try {
        // Backend signup API ko request bhej rahe hain
        const response = await fetch("/api/users/signup", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            // JavaScript object ko JSON mein convert karte hain
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        });

        // Backend response ko JSON mein convert kiya
        const data = await response.json();

        // Response successful hai
        if (response.ok) {
            showMessage(data.message, "success");

            // Form empty kar diya
            signupForm.reset();

            // 1 second ke baad login page open hoga
            setTimeout(() => {
                window.location.href = "/login.html";
            }, 1000);
        } else {
            // Backend error message show hoga
            showMessage(data.message, "danger");
        }

    } catch (error) {
        console.log(error);

        showMessage("Server connection failed", "danger");
    }
});

// Bootstrap alert message show karne ka function
function showMessage(message, type) {
    messageBox.innerHTML = `
        <div class="alert alert-${type}">
            ${message}
        </div>
    `;
}