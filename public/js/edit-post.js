const titleEl = document.querySelector('input[name="title"]');
const contentEl = document.querySelector('textarea[name="post-content"]');
const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

const editPost = async (event) => {
    event.preventDefault();

    const title = titleEl.value.trim();
    const content = contentEl.value.trim();

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
};

document.querySelector('#edit-post').addEventListener('submit', editPost);