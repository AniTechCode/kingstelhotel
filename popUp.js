// Facility Popup Handling
document.addEventListener('DOMContentLoaded', () => {
    const viewButtons = document.querySelectorAll('.btn-book');
    const popups = document.querySelectorAll('.facility-popup');
    const closeButtons = document.querySelectorAll('.close-popup');
    const cards = document.querySelectorAll('.dining-card');

    // Open Popup via Button
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const facility = button.getAttribute('data-facility');
            const popup = document.getElementById(`${facility}-popup`);
            if (popup) {
                popup.classList.add('active');
            }
        });
    });

    // Open Popup via Card Click
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-book')) {
                const facility = card.getAttribute('data-facility');
                const popup = document.getElementById(`${facility}-popup`);
                if (popup) {
                    popup.classList.add('active');
                }
            }
        });
    });

    // Close Popup
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const facility = button.getAttribute('data-facility');
            const popup = document.getElementById(`${facility}-popup`);
            if (popup) {
                popup.classList.remove('active');
            }
        });
    });

    // Close on Outside Click
    document.addEventListener('click', (e) => {
        popups.forEach(popup => {
            if (popup.classList.contains('active') && !popup.contains(e.target) && !e.target.closest('.dining-card')) {
                popup.classList.remove('active');
            }
        });
    });

    // Close on Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            popups.forEach(popup => popup.classList.remove('active'));
        }
    });
});