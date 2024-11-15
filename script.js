document.querySelector("form").addEventListener("submit", function(event) {
    const emailInput = document.getElementById("email");
    if (emailInput.value === "") {
        alert("Please enter an email!");
        event.preventDefault(); // Prevents form submission if input is empty
    } else {
        alert("Form submitted!");
    }
});
