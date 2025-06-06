// Change Email button action
document.querySelectorAll('.primary-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Redirecting to email change page...');
    // You can redirect like this: window.location.href = '/change-email.html';
  });
});

// Reset password links
document.querySelectorAll('.link-btn').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Reset password link sent to your email.');
  });
});

// (Optional) Toggle submenus in sidebar
document.querySelectorAll('.menu > li').forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    const sub = menuItem.querySelector('.sub');
    if (sub) {
      sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    }
  });
});
