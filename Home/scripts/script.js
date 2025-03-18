document.addEventListener('DOMContentLoaded', () => {
  /* ===== Alternância de Tema ===== */
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const rootElement = document.documentElement;

  if (themeToggleBtn) {
    const toggleTheme = () => {
      const currentTheme = rootElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      rootElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    };

    const updateThemeIcon = (theme) => {
      const icon = themeToggleBtn.querySelector('i');
      if (icon) {
        icon.textContent = theme === 'dark' ? 'dark_mode' : 'light_mode';
      }
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    rootElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  /* ===== Menu Hambúrguer ===== */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav__link');

  if (hamburger && navLinks) {
    const toggleMenu = () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
      const isActive = navLinks.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isActive);
      navLinks.setAttribute('aria-hidden', !isActive);
    };

    const closeMenu = () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      navLinks.setAttribute('aria-hidden', 'true');
    };

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });

    navItems.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ===== Scroll Suave ===== */
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ===== Botão Voltar ao Topo ===== */
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===== Formulário de Contato ===== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      if (nomeInput.value.trim() === '') {
        nomeInput.nextElementSibling.textContent = 'Por favor, insira seu nome.';
        isValid = false;
      } else {
        nomeInput.nextElementSibling.textContent = '';
      }

      if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailInput.nextElementSibling.textContent = 'Por favor, insira um e-mail válido.';
        isValid = false;
      } else {
        emailInput.nextElementSibling.textContent = '';
      }

      if (mensagemInput.value.trim() === '') {
        mensagemInput.nextElementSibling.textContent = 'Por favor, insira sua mensagem.';
        isValid = false;
      } else {
        mensagemInput.nextElementSibling.textContent = '';
      }

      if (isValid) {
        contactForm.reset();
        alert('Formulário enviado com sucesso!');
      }
    });
  }

  /* ===== Botões "Saiba Mais" ===== */
  const toggleDetailsButtons = document.querySelectorAll('.toggle-details');
  toggleDetailsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const projectCard = button.closest('.project-card');
      projectCard.classList.toggle('active');
    });
  });

  /* ===== Animação de Digitação ===== */
  const terminalLines = document.querySelectorAll('.terminal-line');
  terminalLines.forEach((line, index) => {
    line.style.opacity = '0';
    setTimeout(() => {
      line.style.opacity = '1';
      line.style.transition = 'opacity 0.5s ease-in-out';
    }, index * 1500);
  });
});
