let isDarkMode = false;

function toggleTheme() {
  const body = document.body;
  const ball = document.querySelector('.toggle-ball');

  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    body.style.backgroundColor = '#222';
    ball.style.transform = 'translate(100%, -50%)';
  } else {
    body.style.backgroundColor = '#f5f5f5';
    ball.style.transform = 'translate(0, -50%)';
  }
}
