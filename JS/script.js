document.addEventListener('DOMContentLoaded', () => {
    // Inject animation CSS styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .pre-animate {
            opacity: 0;
            transform: translateY(20px);
        }
        .animate-fade-slide {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .custom-btn {
            color: #ffffff;
            font-size: 24px;
        }
        .custom-btn:hover {
            background-color: #574fd6;
            color: #ffffff;
        }
    `;
    document.head.appendChild(style);

    // Animate nav logo on page load
    const navLogo = document.querySelector('.nav-container img');
    if (navLogo) {
        navLogo.style.opacity = 0;
        navLogo.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            navLogo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            navLogo.style.opacity = 1;
            navLogo.style.transform = 'translateY(0)';
        }, 100);
    }

    // Button hover animation
    const buttons = document.querySelectorAll('.custom-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transition = 'transform 0.3s ease';
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Intersection Observer for fade/slide-in animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-slide');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    // Elements to animate on scroll
    const elementsToAnimate = document.querySelectorAll('main, .sobre-container .img1');
    elementsToAnimate.forEach(el => {
        el.classList.add('pre-animate');
        observer.observe(el);
    });
});
