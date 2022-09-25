const usernameEl = document.querySelector('#username-login');
const passwordEl = document.querySelector('#password-login');

const login = async (event) => {
    event.preventDefault();

    const username = usernameEl.value.trim();
    const password = passwordEl.value.trim();

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

document.querySelector('#login').addEventListener('submit', login);