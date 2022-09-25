const username = document.querySelector('#username-login');
const password = document.querySelector('#password-login');

const login = async (event) => {
    event.preventDefault();
    
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);