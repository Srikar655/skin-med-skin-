document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileLinks = mobileNavOverlay.querySelectorAll('a');

    const toggleMenu = () => {
        mobileNavOverlay.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileNavOverlay.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNavOverlay.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Form Submit to WhatsApp
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('formName').value;
            const phone = document.getElementById('formPhone').value;
            const service = document.getElementById('formService').value;
            const message = document.getElementById('formMessage').value;

            const waText = `*New Consultation Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}\n*Message:* ${message}`;
            window.open(`https://wa.me/919391082255?text=${encodeURIComponent(waText)}`, '_blank');
            contactForm.reset();
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = 90;
                const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: targetTop, behavior: 'smooth' });
            }
        });
    });

    // TESTIMONIAL SLIDER LOGIC
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('sliderDots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cards = track.querySelectorAll('.testimonial-card');

    // Create Dots
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            const cardWidth = cards[0].offsetWidth + 24;
            track.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
        });
        dotsContainer.appendChild(dot);
    });

    // Update Dots on Scroll
    track.addEventListener('scroll', () => {
        const cardWidth = cards[0].offsetWidth + 24;
        const index = Math.round(track.scrollLeft / cardWidth);
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    });

    // Arrow Navigation
    nextBtn.addEventListener('click', () => {
        const cardWidth = cards[0].offsetWidth + 24;
        track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        const cardWidth = cards[0].offsetWidth + 24;
        track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
});