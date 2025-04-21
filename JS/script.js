// Efeito de digitação no título
const titulo = document.querySelector('.content-main h1');
const texto = titulo.textContent;
titulo.textContent = '';
let i = 0;

function digitar() {
    if (i < texto.length) {
        titulo.textContent += texto.charAt(i);
        i++;
        setTimeout(digitar, 60);
    }
}

window.addEventListener('load', digitar);

// Scroll suave nos links do menu
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Efeito de aparecer ao rolar
const animarAoScroll = document.querySelectorAll('.content-main, .image-main, .sobre-container, .img1');

function animarElementos() {
    animarAoScroll.forEach(el => {
        const topo = el.getBoundingClientRect().top;
        const altura = window.innerHeight;

        if (topo < altura - 100) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        } else {
            el.style.opacity = 0;
            el.style.transform = 'translateY(50px)';
        }
    });
}

window.addEventListener('scroll', animarElementos);
window.addEventListener('load', animarElementos);

// Ripple effect nos botões
document.querySelectorAll('.main-button, .contact-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        this.appendChild(ripple);

        const maxDim = Math.max(this.clientWidth, this.clientHeight);
        ripple.style.width = ripple.style.height = maxDim + 'px';

        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left - maxDim / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - maxDim / 2) + 'px';

        setTimeout(() => ripple.remove(), 600);
    });
});
