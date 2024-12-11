document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;

    const url = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // Replace with your Google Apps Script URL

    // Prepare data to send
    const data = {
        name: name,
        email: email,
        skills: skills
    };

    // Send data to Google Apps Script
    fetch(url, {
        method: 'POST',
        mode: 'no-cors', // Use 'cors' if you want to handle response
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        // Display a thank you message
        document.getElementById('responseMessage').innerText = 'Thank you for your application, ' + name + '!';
        document.getElementById('applicationForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'There was an error submitting your application. Please try again.';
    });
});
