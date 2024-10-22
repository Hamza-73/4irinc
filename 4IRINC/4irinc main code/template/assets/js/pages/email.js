
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Get the send button
    var sendButton = document.getElementById("send-email");

    // Change button text and disable it
    sendButton.textContent = "Sending...";
    sendButton.disabled = true;
    // Collect form data
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        message: document.getElementById('message').value
    };
    console.log("formdata is ", formData)

    // Send email using EmailJS
    emailjs.send("service_wbtwbed", "template_titopjh", formData)
        .then(function (response) {
            alert("Message sent successfully!");
            // Reset button text and re-enable it
            sendButton.textContent = "Send message";
            sendButton.disabled = false;
        }, function (error) {
            alert("Failed to send message. Please try again.");
            // Reset button text and re-enable it
            sendButton.textContent = "Send message";
            sendButton.disabled = false;
            console.log("Error in sending email", error)
        });
});
