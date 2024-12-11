document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;

    // Process the data (e.g., send it to a server, log it, etc.)
    console.log('Application Submitted:', { name, email, skills });

    // Display a thank you message
    document.getElementById('responseMessage').innerText = 'Thank you for your application, ' + name + '!';
    
    // Optionally, clear the form
    document.getElementById('applicationForm').reset();
});
