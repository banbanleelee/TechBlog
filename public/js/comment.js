const commentFormHandler = async (event) => {
  event.preventDefault();
  const content = document.querySelector('#comment-content').value;
  const post_id = document.querySelector('#post-id').value;
  console.log(content);
  if (content) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);
