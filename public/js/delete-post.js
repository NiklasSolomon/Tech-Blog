const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
];

const deletePost = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          post_id: id
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

document.querySelector('.delete-post').addEventListener('click', deletePost);