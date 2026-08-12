document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor Follower
    const cursor = document.querySelector('.cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        // Use requestAnimationFrame for smooth performance
        requestAnimationFrame(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    });

    // Make glow larger when hovering over interactive elements
    const interactables = document.querySelectorAll('a, button, .skill-tags span, .image-wrapper');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '500px';
            cursor.style.height = '500px';
            cursor.style.background = 'radial-gradient(circle, rgba(110, 231, 183, 0.6) 0%, transparent 60%)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '400px';
            cursor.style.height = '400px';
            cursor.style.background = 'radial-gradient(circle, rgba(110, 231, 183, 0.4) 0%, transparent 60%)';
        });
    });

    // 2. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // Trigger point offset

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    // Initial check
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    // 3. Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
