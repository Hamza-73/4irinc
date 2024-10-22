document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    function openSidebar() {
        mobileMenu.classList.remove('-translate-x-full');
        body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        mobileMenu.classList.add('-translate-x-full');
        body.style.overflow = '';
    }

    // Toggle sidebar when menu button is clicked
    menuBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        if (mobileMenu.classList.contains('-translate-x-full')) {
            openSidebar();
        } else {
            closeSidebar();
        }
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            closeSidebar();
        }
    });

    // Prevent clicks inside sidebar from closing it
    mobileMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Close sidebar when clicking on a nav item (for mobile)
    const navItems = mobileMenu.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
        item.addEventListener('click', closeSidebar);
    });
});