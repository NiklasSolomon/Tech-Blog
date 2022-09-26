const comment_text = document.querySelector('textarea[name="comment-text"]');
const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

const commentHandler = async (event) => {
    event.preventDefault();

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();

        } else {
            alert(response.statusText);
            document.querySelector('#comment-form').style.display = "block";
        }
    }
};

document.querySelector('.comment').addEventListener('submit', commentHandler);