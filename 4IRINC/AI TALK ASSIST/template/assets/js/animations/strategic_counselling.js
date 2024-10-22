document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Add "show" class to trigger animation
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the section is visible
    });

    const animateText = document.querySelector(".home-content"); // Target the home-content div
    if (animateText) {
        observer.observe(animateText); // Observe when it enters the viewport
    }
});


// ---------- SERVICE ---------
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Add "show" class to trigger animation
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, {
        threshold: 0.2 // Adjust threshold to trigger when a portion of the element is visible
    });

    const title = document.querySelector(".service-info .animate-title");
    const paragraph = document.querySelector(".service-info .animate-paragraph");

    if (title) {
        observer.observe(title); // Observe when the title enters the viewport
    }

    if (paragraph) {
        observer.observe(paragraph); // Observe when the paragraph enters the viewport
    }
});

// ------------------ OFFER BOX -----------
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Add the show class to trigger the animation
                observer.unobserve(entry.target); // Stop observing once it's animated
            }
        });
    }, {
        threshold: 0.5 // Adjust the threshold for when the animation should trigger
    });

    // Select all offer boxes
    const offerBoxes = document.querySelectorAll(".offer_box");

    // Observe each offer box
    offerBoxes.forEach(offerBox => {
        observer.observe(offerBox);
    });
});
