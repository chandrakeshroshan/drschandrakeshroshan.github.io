// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section, .hero');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'var(--bg-white)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                bar.style.width = bar.style.width;
            });
        }
    });
}, observerOptions);

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Fade-in animation for sections
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Apply fade-in animation to elements
document.querySelectorAll('.timeline-item, .research-card, .achievement-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Simulate form submission (in production, you would send this to a backend)
        try {
            // Display success message
            formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
            formStatus.className = 'success';
            
            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);

            // In a real implementation, you would send the data to a server:
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData)
            // });

        } catch (error) {
            formStatus.textContent = 'There was an error sending your message. Please try again or contact me directly via email.';
            formStatus.className = 'error';
            
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    });
}

// Add hover effect to cards
document.querySelectorAll('.research-card, .achievement-card, .publication-item, .contact-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    
    // Add smooth reveal to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(() => {
            hero.style.opacity = '1';
        }, 100);
    }
});

// Prevent default form submission for mailto fallback
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Let mailto links work normally
    });
});

// Handle external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.type === 'submit') {
            this.style.opacity = '0.7';
            this.textContent = 'Sending...';
        }
    });
});

// Keyboard navigation accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Add year to footer automatically
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-content p');
if (footerText && currentYear > 2024) {
    footerText.textContent = `© ${currentYear} Chandrakesh Roshan. All rights reserved.`;
}
