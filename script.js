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

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = 90; // var(--nav-height)
                const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: targetTop, behavior: 'smooth' });
            }
        });
    });
});
