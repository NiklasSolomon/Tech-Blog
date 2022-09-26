const titleEl = document.querySelector('input[name="title"]');
const contentEl = document.querySelector('textarea[name="post-content"]');

const newPost = async (event) => {
    event.preventDefault();

    const title = titleEl.value.trim();
    const content = contentEl.value.trim();

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
};

document.querySelector('#new-post').addEventListener('submit', newPost);