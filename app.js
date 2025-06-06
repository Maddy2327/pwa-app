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

// (Optional) Toggle submenus in sidebar for desktop behavior
// Note: On mobile, submenus are hidden by default in CSS for the sliding menu
document.querySelectorAll('.menu > li').forEach(menuItem => {
  menuItem.addEventListener('click', (event) => {
    // Prevent the click on a parent item from immediately closing the sidebar on mobile if it opens an item
    // and also prevent it from triggering the sidebar close if clicking on a sub-item
    if (window.innerWidth <= 768 && menuItem.closest('.sidebar-wrapper.open')) {
        // If on mobile and sidebar is open, prevent default behavior if it's a direct menu item click
        // This stops the sidebar from immediately closing if a menu item should toggle a submenu.
        event.stopPropagation();
    }

    const sub = menuItem.querySelector('.sub');
    if (sub) {
      // Toggle display for desktop or when submenu needs to be shown in mobile sidebar
      sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    }
  });
});


// NEW: Hamburger menu toggle for mobile sidebar
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const mainContent = document.querySelector('.content'); // To potentially dim or move main content

// Ensure elements exist before adding event listeners
if (hamburgerMenu && sidebarWrapper && mainContent) {
    hamburgerMenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent this click from being caught by mainContent listener
        sidebarWrapper.classList.toggle('open');
        // Optional: Add a class to body to prevent scrolling when sidebar is open
        document.body.classList.toggle('no-scroll');
    });

    // Close sidebar when clicking outside (on the main content area)
    mainContent.addEventListener('click', () => {
        if (sidebarWrapper.classList.contains('open')) {
            sidebarWrapper.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    });

    // Prevent clicks inside the sidebar from closing it (important if mainContent click closes it)
    sidebarWrapper.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}
