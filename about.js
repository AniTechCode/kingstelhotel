// Animate stats when in viewport
const stats = document.querySelectorAll('.stat-number');
const animationDuration = 2000;

function animateStats() {
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / (animationDuration / 16);
        let current = 0;

        const updateCount = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.round(current);
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target;
            }
        };

        updateCount();
    });
}

// Intersection Observer for stats animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-grid');
if (statsSection) {
    observer.observe(statsSection);
}