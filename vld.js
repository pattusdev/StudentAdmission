function validateAdmission() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var program = document.getElementById("program").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var transcript = document.getElementById("transcript").value;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (name === "" || email === "" || program === "" || phone === "" || age === "" || address === "" || city === "" || state === "" || country === "" || transcript === "") {
        alert("All admission fields are required.");
        return false;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age.");
        return false;
    }
    alert("Thank you! For your Requesting your Admission");
    window.location.href = "index.html";
    return false;
}
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Add your authentication logic here.
    // For this example, we'll assume a simple hardcoded check.
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid username or password.");
        return false;
    }
}
