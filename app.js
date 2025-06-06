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

// (Optional) Toggle submenus in sidebar (This still works for desktop)
document.querySelectorAll('.menu > li').forEach(menuItem => {
  menuItem.addEventListener('click', () => {
    const sub = menuItem.querySelector('.sub');
    if (sub) {
      sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    }
  });
});


// NEW: Hamburger menu toggle for mobile sidebar
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const mainContent = document.querySelector('.content'); // To potentially dim or move main content

if (hamburgerMenu && sidebarWrapper) {
    hamburgerMenu.addEventListener('click', () => {
        sidebarWrapper.classList.toggle('open');
        // Optional: Add a class to body or content to prevent scroll or dim
        // document.body.classList.toggle('no-scroll');
        // mainContent.classList.toggle('dim-overlay');
    });

    // Optional: Close sidebar when clicking outside (e.g., on the content area)
    mainContent.addEventListener('click', () => {
        if (sidebarWrapper.classList.contains('open')) {
            sidebarWrapper.classList.remove('open');
            // document.body.classList.remove('no-scroll');
            // mainContent.classList.remove('dim-overlay');
        }
    });

    // Prevent clicks inside sidebar from closing it (if content click closes it)
    sidebarWrapper.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}