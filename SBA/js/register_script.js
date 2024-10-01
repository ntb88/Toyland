document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('register-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        console.log('Form submitted'); // Log form submission for debugging

        // Reset error messages
        emailError.textContent = '';
        passwordError.textContent = '';

        let valid = true; // Track if form is valid

        // Validate Email
        if (emailInput.value === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailError.textContent = 'Invalid email.';
            valid = false; // Mark form as invalid
        }

        // Validate Password
        if (passwordInput.value === '' || passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters.';
            valid = false; // Mark form as invalid
        }

        // Proceed if no errors
        if (valid) {
            alert('Registration Successful!');
            form.reset(); // Reset the form
        }

    });
});
