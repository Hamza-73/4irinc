// home section animation
function homeSection(el, start, end, duration) {
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const progress = currentTime - startTime;
        const currentNumber = Math.min(Math.floor(progress / duration * (end - start) + start), end);
        el.innerText = currentNumber + '+';
        if (currentNumber < end) {
            requestAnimationFrame(animation);
        }
    }
    requestAnimationFrame(animation);
}

// Trigger Counters when in view
function handleScroll() {
    const statElements = document.querySelectorAll('.counter');
    statElements.forEach(stat => {
        const rect = stat.getBoundingClientRect();
        if (rect.top < window.innerHeight && !stat.classList.contains('counted')) {
            stat.classList.add('counted');
            homeSection(stat, 0, parseInt(stat.dataset.end), 2000); // 2000ms for the count duration
        }
    });
}

window.addEventListener('scroll', handleScroll);

  