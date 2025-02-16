// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Toggle Light Mode';
  } else {
    themeToggle.textContent = 'Toggle Dark Mode';
  }
});