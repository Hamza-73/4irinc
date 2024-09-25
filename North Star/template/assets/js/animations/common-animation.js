
document.addEventListener('DOMContentLoaded', function () {
  const sectionLeft = document.querySelector('.common-red-blue-sec .section-left');
  const sectionRight = document.querySelector('.common-red-blue-sec .section-right');

  const observerOptions = {
    threshold: 0.3, // Trigger when 30% of the section is visible
    root: null,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
    });
  }, observerOptions);

  observer.observe(sectionLeft);
  observer.observe(sectionRight);
});

// Function to increment the counter
function countUp(el, start, end) {
  let current = start;
  const stepTime = Math.abs(Math.floor(2000 / (end - start)));
  const timer = setInterval(function () {
    current += 1;
    el.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// IntersectionObserver to trigger animations on scroll
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      // Trigger count up for badge
      if (entry.target.querySelector('#counter')) {
        countUp(document.getElementById('counter'), 0, 25);
      }
    }
  });
}, { threshold: 0.3 });

// Observe sections for animation
document.querySelectorAll('.common-why-us-sec .section-content, .common-why-us-sec .section-image, .common-why-us-sec .badge').forEach((el) => {
  observer.observe(el);
});



// WHO WE ARE 
document.addEventListener("DOMContentLoaded", function () {
  // Options for the IntersectionObserver
  const options = {
    root: null, // Use the viewport as the container
    threshold: 0.5, // Trigger when 50% of the section is visible
  };

  // Function to handle when elements intersect
  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the "animate" class to trigger the animations
        entry.target.classList.add("animate");
        // Stop observing once the animation is triggered
        observer.unobserve(entry.target);
      }
    });
  };

  // Initialize IntersectionObserver
  const observer = new IntersectionObserver(handleIntersect, options);

  // Target elements to animate
  const elementsToAnimate = document.querySelectorAll(
    ".who-we-are-section .text-container, .who-we-are-section .image-container, .who-we-are-section .icon-text"
  );

  // Observe each target element
  elementsToAnimate.forEach((el) => observer.observe(el));
});



//   EXPERTISE SECTION

document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = {
    root: null,
    threshold: 0.3
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Normal sections (left-right animations)
  const textContainer = document.querySelector('.expertise-section .text-container');
  const imageContainer = document.querySelector('.expertise-section .img-animate');
  const textRightContainer = document.querySelector('.expertise-section .text-right-container');

  // Reverse sections (right-left animations)
  const reverseTextContainer = document.querySelector('.expertise-section.reverse-animation .reverse-text-container');
  const reverseImageContainer = document.querySelector('.expertise-section.reverse-animation .reverse-img-animate');

  // Observing each element
  if (textContainer && imageContainer && textRightContainer) {
    observer.observe(textContainer);
    observer.observe(imageContainer);
    observer.observe(textRightContainer);
  }

  if (reverseTextContainer && reverseImageContainer) {
    observer.observe(reverseTextContainer);
    observer.observe(reverseImageContainer);
  }
});



//   COMMON ACTION SECTION
document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = {
    root: null,
    threshold: 0.1
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Target the text wrapper for animation
  const textWrapper = document.querySelector('.common-action-sec .text-wrapper');

  // Start observing the section
  observer.observe(textWrapper);
});

//COMMON HOME SECTION

document.addEventListener("DOMContentLoaded", function () {
  const homeSection = document.querySelector('.common-home-section');

  // Trigger animation on page load
  setTimeout(() => {
    homeSection.classList.add('animate');
  }, 500); // Adjust delay as necessary

  // Function to check if the section is in the viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Trigger animation when section is scrolled into view
  window.addEventListener('scroll', function () {
    if (isInViewport(homeSection)) {
      homeSection.classList.add('animate');
    }
  });
});


//   ..SERVICE SECTION
document.addEventListener("DOMContentLoaded", function () {
  const serviceSection = document.querySelector('.service-section');

  // Function to check if at least 80% of the section is in the viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elTop = rect.top;
    const elBottom = rect.bottom;

    return (
      (elTop + (elBottom - elTop) * .2 <= windowHeight) && // 80% of the element is visible
      (elBottom >= 0) // Element's bottom is within the viewport
    );
  }

  // Trigger animation when section is scrolled into view
  function handleScroll() {
    if (isInViewport(serviceSection)) {
      serviceSection.classList.add('animate');
    } else {
      serviceSection.classList.remove('animate'); // Optional: Remove class if not in view
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on page load
});



//==========
document.addEventListener("DOMContentLoaded", function () {
  const animatedSections = document.querySelectorAll('.animated-section');

  animatedSections.forEach(section => {
    const animationType = section.getAttribute('data-animation'); // Get the animation type
    const leftPart = section.querySelector('.left-section');
    const rightPart = section.querySelector('.right-section');

    // Set initial transform positions based on animation type
    if (animationType === 'right-left') {
      leftPart.style.transform = 'translateX(600px)';  // Left part moves from the right
      rightPart.style.transform = 'translateX(-600px)'; // Right part moves from the left
    } else if (animationType === 'left-right') {
      leftPart.style.transform = 'translateX(-600px)'; // Left part moves from the left
      rightPart.style.transform = 'translateX(600px)';  // Right part moves from the right
    }

    // Function to check if the section is 80% in the viewport
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top + (rect.height * 0.2) <= window.innerHeight &&
        rect.bottom >= 0
      );
    }

    // Apply animations based on data attributes
    function applyAnimations() {
      if (isInViewport(section)) {
        leftPart.style.transform = 'translateX(0)';  // Move to default position
        rightPart.style.transform = 'translateX(0)'; // Move to default position
        leftPart.style.opacity = '1';
        rightPart.style.opacity = '1';
      }
    }

    window.addEventListener('scroll', applyAnimations);
    applyAnimations(); // Check on page load
  });
});


//RESOURCES CERTIFICATE
document.addEventListener("DOMContentLoaded", function () {
  const certificateSection = document.querySelector('.certificate');
  const elementsToAnimate = certificateSection.querySelectorAll('.animate-slide-left, .animate-slide-right, .animate-slide-up, .animate-slide-down');

  // Function to check if the section is in the viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elTop = rect.top;
    const elBottom = rect.bottom;

    return (
      (elTop + (elBottom - elTop) * 0.2 <= windowHeight) && // At least 80% is visible
      (elBottom >= 0) // Element's bottom is within the viewport
    );
  }

  // Function to handle scroll and trigger animations
  function handleScroll() {
    if (isInViewport(certificateSection)) {
      elementsToAnimate.forEach(el => {
        if (!el.classList.contains('animate')) {
          el.classList.add('animate');
        }
      });
    }
  }

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Check on page load in case the section is already in view
  handleScroll();
});
