// ==================MODAL ===========
const featureBoxWrappers = document.querySelectorAll('.ai-feature-box-wrapper');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated-in');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
});

featureBoxWrappers.forEach(wrapper => {
    observer.observe(wrapper);
});

