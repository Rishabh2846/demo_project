// validation.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
function showSuccessMessageAndNavigate() {
            // Show the success message
            var messageContainer = document.getElementById('message-container');
            messageContainer.style.display = 'block';
            
            // Wait for a short time before navigating
            setTimeout(function() {
                window.location.href = 'Page1.html'; // Navigate to the next page
            }, 2000); // Display message for 2 seconds before navigating
        }
    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Clear previous errors
        document.getElementById('usernameError').textContent = '';
        document.getElementById('passwordError').textContent = '';

        // Get values
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validate username
        if (username === '') {
            document.getElementById('usernameError').textContent = 'Username is required';
            isValid = false;
        } else  {
        document.getElementById('usernameError').textContent = 'Login successfully';
            isValid= false;
        }

        // Validate password
        if (password === '') {
            document.getElementById('passwordError').textContent = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
            isValid = false;
        } else {
        document.getElementById('passwordError').textContent = 'Password correct';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }

        
        
    
    });
});
