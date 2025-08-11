// Animação de fade-in das imagens quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.featured-items img');
    const form = document.getElementById('contact-form');
    const toTop = document.getElementById('to-top');
    const revealEls = document.querySelectorAll('.reveal');
    const heroHint = document.getElementById('hero-hint');
    const logoHome = document.getElementById('logo-home');
    const menuToggle = document.getElementById('menu-toggle');
    const navMobile = document.getElementById('nav-mobile');
    
    // Adiciona um pequeno delay para cada imagem
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('fade-in');
        }, 500 + (index * 150)); // 500ms inicial + 150ms para cada imagem
    });

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            const assunto = encodeURIComponent(`Contato pelo site - ${nome}`);
            const corpo = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\n${mensagem}`);
            window.location.href = `mailto:contato@rent.com?subject=${assunto}&body=${corpo}`;
        });
    }

    // Botão voltar ao topo e hint do hero
    if (toTop) {
        toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        window.addEventListener('scroll', () => {
            const show = window.scrollY > 300;
            toTop.style.display = show ? 'block' : 'none';
            if (heroHint) heroHint.style.display = show ? 'none' : 'inline-flex';
        });
    }

    // Reveal on scroll
    const onScroll = () => {
        const trigger = window.innerHeight * 0.9;
        revealEls.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < trigger) el.classList.add('visible');
        });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();



    // Logo home com rotação
    if (logoHome) {
        logoHome.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Menu burger toggle
    if (menuToggle && navMobile) {
        menuToggle.addEventListener('click', () => {
            navMobile.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        navMobile.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMobile.classList.remove('active');
            });
        });
    }
});
