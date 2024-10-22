// Get all circles and accordion buttons
const circles = document.querySelectorAll('.circle');
const accordionButtons = document.querySelectorAll('.accordion-button');
let activeCircle = document.querySelector('.circle-active'); // Track the currently active circle
let activePanel = document.querySelector('.accordion-collapse.show'); // Track the currently open panel

// Function to close the currently open accordion panel and remove the active circle
function closeActivePanel() {
    if (activePanel) {
        const collapseInstance = bootstrap.Collapse.getInstance(activePanel) || new bootstrap.Collapse(activePanel, { toggle: false });
        collapseInstance.hide();
        activePanel = null;
    }
    if (activeCircle) {
        activeCircle.classList.remove('circle-active');
        activeCircle = null;
    }
}

// Function to open a panel and assign the active class to the relevant circle
function openPanel(panel, circle) {
    const collapseInstance = bootstrap.Collapse.getInstance(panel) || new bootstrap.Collapse(panel, { toggle: false });
    collapseInstance.show();
    circle.classList.add('circle-active');
    activePanel = panel;
    activeCircle = circle;
}

// Add click event listeners to the circles
circles.forEach(circle => {
    circle.addEventListener('click', function () {
        const target = circle.getAttribute('data-bs-target');
        const panel = document.querySelector(target);

        // If the clicked circle is already active, close it and remove the active class
        if (circle === activeCircle) {
            closeActivePanel();
        } else {
            // Close the active panel, then open the new one
            closeActivePanel();
            openPanel(panel, circle);
        }
    });
});

// Add click event listeners to the accordion buttons
accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
        const target = button.getAttribute('data-bs-target');
        const panel = document.querySelector(target);

        // If the clicked accordion is already active, close it and remove the active class
        if (panel === activePanel) {
            closeActivePanel();
        } else {
            // Close the active panel, then open the new one
            closeActivePanel();

            // Find the corresponding circle and activate it
            const correspondingCircle = document.querySelector(`.circle[data-bs-target="${target}"]`);
            if (correspondingCircle) {
                openPanel(panel, correspondingCircle);
            }
        }
    });
});
