document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-links');
    console.log('nav-links', navLinks)
    var cardTitle = document.querySelector('.card-title');
    var cardText = document.querySelector('.card-text');
    var lastActiveTab = 'mission';

    const content = {
        mission: {
            text: "Empowering businesses and solopreneurs to think big and embrace the Fourth Industrial Revolution. We offer cutting-edge solutions and expert support for digital transformation. Our commitment is to help clients navigate technological changes and achieve sustainable growth."
        },
        vision: {
            text: "We aim to lead change by driving transformative tech and big thinking in businesses and solopreneurs. Our goal is to build a resilient, innovative community ready for the Fourth Industrial Revolution, revolutionizing digital transformation for long-term success in a changing world."
        },
        value: {
            text: "We value innovation, collaboration, and continuous learning in the face of rapid technological change. Integrity, excellence, and a client-centric approach are at the core of everything we do. We are passionate about empowering our clients to achieve their full potential in the digital age."
        }
    };

    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function (event) {
            event.preventDefault();
            var tabId = navLink.getAttribute('data-tab');

            // If clicking the same tab that's already active, do nothing
            if (tabId === lastActiveTab) {
                return;
            }

            // Remove active class from all nav-links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked nav-link
            navLink.classList.add('active');

            cardText.textContent = content[tabId].text;

            // Update the lastActiveTab
            lastActiveTab = tabId;
        });
    });
});