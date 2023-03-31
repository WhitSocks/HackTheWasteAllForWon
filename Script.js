function login() {
const loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click', handleLogin);

function handleLogin(event) {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (email === 'user@example.com' && password === 'password') {
        window.location.href = '/dashboard';
    }
    else 
    {
        alert('Invalid email or password. Please try again.');
    }
}
}
