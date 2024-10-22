document.addEventListener('DOMContentLoaded', function () {
    var servicesLink = document.getElementById('servicesLink');
    var servicesDropdown = document.getElementById('servicesDropdown');
    var dropdownMenu = servicesDropdown.nextElementSibling;
    var isXlScreen = window.innerWidth >= 1200; // Define XL breakpoint

    function toggleDropdown(event) {
        event.preventDefault();
        event.stopPropagation();
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    }

    servicesDropdown.addEventListener('click', toggleDropdown);

    // For mobile view, prevent the link from navigating when the dropdown is open
    servicesLink.addEventListener('click', function (event) {
        if (!isXlScreen && dropdownMenu.style.display === 'block') {
            event.preventDefault();
        }
    });

    // Update isXlScreen on window resize
    window.addEventListener('resize', function () {
        isXlScreen = window.innerWidth >= 1200;
        if (isXlScreen) {
            dropdownMenu.style.display = '';
        }
    });
});


