const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const password = form.elements.password.value;

  if (password === 'password') {
    window.location.href = '/home.html';
  } else {
    alert('Invalid username or password');
  }
});
