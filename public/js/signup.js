const usernameEl = document.querySelector( '#username' );
const passwordEl = document.querySelector( '#signUpPassword' );

const signup = async (event) => {
    event.preventDefault();

    const username = usernameEl.value.trim();
    const password = passwordEl.value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');


            document.location.replace('/dashboard');

        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#signup').addEventListener('submit', signup);