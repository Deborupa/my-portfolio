// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // Add click events to project titles to open modals
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', () => {
            const modalId = project.getAttribute('data-modal');
            if (modalId) {
                document.getElementById(modalId).style.display = 'block';
            }
        });
    });
});