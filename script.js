document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const password = document.getElementById('password');
  const username = document.getElementById('username');
  const strength = document.getElementById('passwordStrength');
  const message = document.getElementById('message');
  const rememberMe = document.getElementById('rememberMe');

  const savedUser = localStorage.getItem('rememberedUser');
  if (savedUser) {
    username.value = savedUser;
    rememberMe.checked = true;
  }

  password.addEventListener('input', () => {
    const val = password.value;
    if (val.length < 6) {
      strength.textContent = 'Weak';
      strength.style.color = 'red';
    } else if (val.match(/[A-Z]/) && val.match(/\d/)) {
      strength.textContent = 'Strong';
      strength.style.color = 'green';
    } else {
      strength.textContent = 'Medium';
      strength.style.color = 'orange';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!username.value || !password.value) {
      message.textContent = 'Both fields are required.';
      message.style.color = 'red';
      return;
    }

    if (rememberMe.checked) {
      localStorage.setItem('rememberedUser', username.value);
    } else {
      localStorage.removeItem('rememberedUser');
    }

    message.textContent = 'Logged in!';
    message.style.color = 'green';
  });
});

