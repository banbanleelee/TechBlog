const delButtonHandler = async (event) => {
  event.target.classList.add('is-loading');
  const id = event.target.getAttribute('data-id');
  console.log(id);

  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to delete post');
  }
};

const destroy = document.querySelectorAll('.destroy');
destroy.forEach((el) => {
  el.addEventListener('click', delButtonHandler);
});
