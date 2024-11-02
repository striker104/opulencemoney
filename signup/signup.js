const registerFormUserField = document.getElementById('registerFormUser')
const registerFormPassField = document.getElementById('registerFormPass')
const registerFormEmailField = document.getElementById('registerFormEmail')
const loginFormUserField = document.getElementById('loginFormUser')
const loginFormPassField = document.getElementById('loginFormPass')



document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('.register-form');
    const loginForm = document.querySelector('.login-form');
    const messageLinks = document.querySelectorAll('.message a');


    messageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            registerForm.classList.toggle('active');
            loginForm.classList.toggle('active');
        });
    });

    // Initially show the login form
    loginForm.classList.add('active');
});


//runs on submit button click
function registerFormSubmit(event){
    event.preventDefault(); //prevent refresh upon submit button click
    var registerFormPass = registerFormPassField.value;
    var registerFormEmail = registerFormEmailField.value;
    var registerFormUser = registerFormUserField.value;

    
    // Regex for validation
    var passwordRegex = /^(?=.*[A-Z]).{6,}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.com$/;

    // Debugging logs
    console.log("Password: ", registerFormPass);
    console.log("Email: ", registerFormEmail);

    // Password validation
    if (!passwordRegex.test(registerFormPass)) {
        alert("Password must be at least 6 characters long and include at least one uppercase letter.");
        return;
    }

    // Email validation
    if (!emailRegex.test(registerFormEmail)) {
        alert("Email must contain '@' and end with '.com'.");
        return;
    }

    // If validation passes
    alert("Form submitted successfully!");
    
    document.querySelector('.register-form').classList.remove('active');
    document.querySelector('.login-form').classList.add('active');
}

