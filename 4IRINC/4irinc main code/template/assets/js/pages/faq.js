// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');
    const accordionButtons = document.querySelectorAll('.accordion-button');
    let activeCircle = document.querySelector('.circle-active');
    let activePanel = document.querySelector('.accordion-collapse.show');

    function closeActivePanel() {
        if (activePanel) {
            const collapseInstance = bootstrap.Collapse.getInstance(activePanel);
            if (collapseInstance) {
                collapseInstance.hide();
            }
            activePanel = null;
        }
        if (activeCircle) {
            activeCircle.classList.remove('circle-active');
            activeCircle = null;
        }
    }

    function openPanel(panel, circle) {
        closeActivePanel();
        const collapseInstance = new bootstrap.Collapse(panel, { toggle: false });
        collapseInstance.show();
        circle.classList.add('circle-active');
        activePanel = panel;
        activeCircle = circle;
    }

    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            const target = this.getAttribute('data-bs-target');
            const panel = document.querySelector(target);
            if (panel) {
                if (this === activeCircle) {
                    closeActivePanel();
                } else {
                    openPanel(panel, this);
                }
            }
        });
    });

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-bs-target');
            const panel = document.querySelector(target);
            const correspondingCircle = document.querySelector(`.circle[data-bs-target="${target}"]`);
            if (panel) {
                if (panel === activePanel) {
                    closeActivePanel();
                } else if (correspondingCircle) {
                    openPanel(panel, correspondingCircle);
                }
            }
        });
    });

    // Initialize the first item as active if none are active
    if (!activePanel && !activeCircle) {
        const firstCircle = circles[0];
        const firstPanelId = firstCircle.getAttribute('data-bs-target');
        const firstPanel = document.querySelector(firstPanelId);
        if (firstPanel) {
            openPanel(firstPanel, firstCircle);
        }
    }
});