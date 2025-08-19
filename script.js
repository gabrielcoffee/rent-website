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

// Função para alternar exibição dos passos
function toggleSteps(type) {
    const step1 = document.getElementById(`${type}-steps`);
    const step2 = document.getElementById(`${type}-steps-2`);
    const step3 = document.getElementById(`${type}-steps-3`);
    
    const isVisible = step1.classList.contains('show');
    
    if (isVisible) {
        // Esconder com animação
        [step1, step2, step3].forEach((step, index) => {
            setTimeout(() => {
                step.classList.remove('show');
                setTimeout(() => {
                    step.style.display = 'none';
                }, 400);
            }, index * 100);
        });
    } else {
        // Mostrar com animação
        [step1, step2, step3].forEach((step, index) => {
            setTimeout(() => {
                step.style.display = 'block';
                setTimeout(() => {
                    step.classList.add('show');
                }, 50);
            }, index * 150);
        });
    }
}

// Função para alternar FAQ
function toggleFAQ() {
    const hiddenFAQs = document.querySelectorAll('.faq-hidden');
    const toggleButton = document.getElementById('faq-toggle');
    
    const isHidden = hiddenFAQs[0].style.display === 'none' || hiddenFAQs[0].style.display === '';
    
    if (isHidden) {
        hiddenFAQs.forEach((faq, index) => {
            setTimeout(() => {
                faq.style.display = 'block';
                setTimeout(() => {
                    faq.classList.add('show');
                }, 50);
            }, index * 100);
        });
        toggleButton.innerHTML = 'Mostrar menos perguntas ↑';
    } else {
        hiddenFAQs.forEach((faq, index) => {
            setTimeout(() => {
                faq.classList.remove('show');
                setTimeout(() => {
                    faq.style.display = 'none';
                }, 400);
            }, index * 50);
        });
        toggleButton.innerHTML = 'Mostrar mais perguntas ↓';
    }
}
