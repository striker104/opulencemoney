const registerFormUserField = document.getElementById('registerFormUser')
const registerFormPassField = document.getElementById('registerFormPass')
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
function loginSubmit(event){
    event.preventDefault(); //prevent refresh upon submit button click
    var loginFormPass = loginFormPassField.value;

}