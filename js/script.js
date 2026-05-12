// Gerenciamento da Navbar no Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Menu Mobile
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
}

// Fechar menu mobile ao clicar em links
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

// Animação de Surgimento (Reveal)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Função Copiar PIX
const copyBtn = document.getElementById('copyPix');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const pixKey = '47387932000170';
        navigator.clipboard.writeText(pixKey).then(() => {
            copyBtn.textContent = '✅ Chave Copiada!';
            copyBtn.style.background = '#52b788';
            setTimeout(() => {
                copyBtn.textContent = 'Copiar chave PIX →';
                copyBtn.style.background = '';
            }, 2500);
        });
    });
}