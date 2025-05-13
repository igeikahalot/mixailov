// JavaScript for the hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Toggle menu when hamburger is clicked
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navContainer.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open'); // Prevent scrolling when menu is open
    });
    
    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navContainer.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
    
    // Handle dropdown toggles on mobile
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Only apply this behavior on mobile
            if (window.innerWidth <= 992) {
                // If clicking on the main nav item (not a child link)
                if (e.target.closest('.nav-link') && !e.target.closest('.dropdown')) {
                    e.preventDefault();
                    
                    // Close any open dropdowns
                    navItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current dropdown
                    item.classList.toggle('active');
                }
            }
        });
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            menuToggle.classList.remove('active');
            navContainer.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            // Reset any active states on nav items
            navItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});