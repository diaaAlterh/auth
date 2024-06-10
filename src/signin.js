document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signin-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Perform form validation
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Fetch API to make the POST request to sign in
        fetch('https://your-api-endpoint.com/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
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
            // Handle successful sign in
            console.log('Sign in successful:', data);
            alert('Sign in successful!');
        })
        .catch(error => {
            // Handle errors
            console.error('Error signing in:', error.message);
            alert('Error signing in: ' + error.message);
        });
    });
});
