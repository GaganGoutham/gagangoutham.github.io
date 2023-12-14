// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const personalButton = document.getElementById('personal-button');

  personalButton.addEventListener('click', () => {
    // Redirect to the "personal" page
    window.location.href = 'personal.html';
  });
});
