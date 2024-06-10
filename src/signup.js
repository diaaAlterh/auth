document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    const termsChecked = document.getElementById('terms').checked;

    if (!username || !email || !password || !confirm_password || !termsChecked) {
        alert('Please fill in all fields and agree to the terms.');
        return;
    }

    if (password !== confirm_password) {
        alert('Passwords do not match.');
        return;
    }

    // Fetch API to make the POST request to sign up
    fetch('https://your-api-endpoint.com/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response JSON
    })
    .then(data => {
        // Handle successful sign up
        console.log('Sign up successful:', data);
        alert('Sign up successful!');
    })
    .catch(error => {
        // Handle errors
        console.error('Error signing up:', error.message);
        alert('Error signing up: ' + error.message);
    });
});
