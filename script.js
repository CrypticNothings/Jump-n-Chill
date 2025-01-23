document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission for demo purposes
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for your message, " + name + "!");
        // You could send the form data to a server here using AJAX
    } else {
        alert("Please fill in all fields.");
    }
});
