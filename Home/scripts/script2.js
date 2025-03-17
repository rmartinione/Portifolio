document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão hambúrguer e os links de navegação
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    navLinks.classList.toggle("active");
    const isActive = navLinks.classList.contains("active");
    hamburger.setAttribute("aria-expanded", isActive);
  };

  // Função para fechar o menu
  const closeMenu = () => {
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  };

  // Verifica se os elementos existem
  if (hamburger && navLinks) {
    // Abre/fecha o menu ao clicar no botão hambúrguer
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation(); // Impede que o clique no hambúrguer feche o menu imediatamente
      toggleMenu();
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
      }
    });

    // Fecha o menu ao pressionar "Esc"
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    });
  }

  // Botões de chamada para ação com animação suave ao clicar
  const ctaButtons = document.querySelectorAll(".btn-container .cta-btn");
  ctaButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(button.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Alternar exibição dos detalhes dos projetos
  const toggleDetailsButtons = document.querySelectorAll(".toggle-details");
  toggleDetailsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const projectCard = button.closest(".project-card");
      projectCard.classList.toggle("active");
    });
  });

  // Validação do formulário de contato
  const form = document.getElementById("contact-form");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const nomeError = document.getElementById("nomeError");
  const emailError = document.getElementById("emailError");
  const charCount = document.getElementById("charCount");

  const showPopupMessage = (message) => {
    const popup = document.createElement("div");
    popup.className = "success-message";
    popup.textContent = message;

    // Adiciona o popup após o formulário
    form.parentElement.appendChild(popup);

    // Remove o popup automaticamente após 5 segundos
    setTimeout(() => {
      popup.remove();
    }, 5000);
  };

  if (form) {
    nome.addEventListener("input", () => {
      const nomeValue = nome.value.trim();
      if (/[^a-zA-Z\s]/.test(nomeValue)) {
        nomeError.textContent = "Nome inválido. Use apenas letras e espaços.";
        nomeError.style.display = "block";
      } else {
        nomeError.style.display = "none";
      }
    });

    email.addEventListener("input", () => {
      const emailValue = email.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailError.textContent = "E-mail inválido. Verifique o formato.";
        emailError.style.display = "block";
      } else {
        emailError.style.display = "none";
      }
    });

    mensagem.addEventListener("input", () => {
      const mensagemValue = mensagem.value.trim();
      charCount.textContent = `${mensagemValue.length}/1000 caracteres`;
      if (mensagemValue.length > 1000) {
        mensagem.setCustomValidity("A mensagem não pode exceder 1000 caracteres.");
      } else {
        mensagem.setCustomValidity("");
      }
    });

    // Envio do formulário para abrir o gerenciador de e-mails
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (nome.value.trim() === "" || email.value.trim() === "" || mensagem.value.trim() === "") {
        alert("Por favor, preencha todos os campos.");
      } else if (nomeError.style.display === "block" || emailError.style.display === "block") {
        alert("Por favor, corrija os erros antes de enviar.");
      } else {
        // Cria o link mailto
        const mailtoLink = `mailto:rm_corporate@hotmail.com?subject=Contato de ${encodeURIComponent(
          nome.value
        )}&body=Nome: ${encodeURIComponent(nome.value)}%0AEmail: ${encodeURIComponent(
          email.value
        )}%0AMensagem: ${encodeURIComponent(mensagem.value)}`;

        // Abre o gerenciador de e-mails do usuário
        window.location.href = mailtoLink;

        // Exibe mensagem de confirmação com popup
        showPopupMessage(
          "Formulário enviado com sucesso! Por gentileza, finalize o envio no Gerenciador de e-mails."
        );

        // Reseta o formulário e contador de caracteres
        form.reset();
        charCount.textContent = "0/1000 caracteres";
      }
    });
  }

  const portfolio = document.getElementById("portfolio");

  if (portfolio) {
    // Adiciona um atraso para garantir que a transição seja visível
    setTimeout(() => {
      portfolio.classList.add("hidden");
    }, 3000);

    // Remove o elemento do DOM após a transição
    setTimeout(() => {
      portfolio.style.display = "none";
    }, 6000); // Aumentei o tempo para garantir que a transição termine antes de remover o elemento
  }

  // Função para alternar o banner com base no tamanho da tela
  function ajustarBanner() {
    const headerIndex = document.querySelector('.header-index');
    if (headerIndex) {
      headerIndex.style.backgroundImage = "url('Home/assets/Banner_Index.png')";
    }
  }

  // Chama a função ao carregar a página e ao redimensionar a janela
  ajustarBanner();
  window.addEventListener('resize', ajustarBanner);

  // Função para alternar o tema claro e escuro
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  });

  // Verifica o tema salvo no localStorage
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  if (savedDarkMode) {
    document.body.classList.add('dark-mode');
  }
});