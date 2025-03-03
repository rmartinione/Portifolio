document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão hambúrguer e os links de navegação
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Verifica se os elementos existem
  if (hamburger && navLinks) {
    // Abre/fecha o menu ao clicar no botão hambúrguer
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation(); // Impede que o clique no hambúrguer feche o menu imediatamente
      navLinks.classList.toggle("active");
      const isActive = navLinks.classList.contains("active");
      // Atualiza o atributo "aria-expanded" conforme o estado do menu
      hamburger.setAttribute("aria-expanded", isActive);
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener("click", (e) => {
      // Verifica se o clique não foi dentro do menu ou do hambúrguer
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });

    // Fecha o menu ao pressionar "Esc"
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        navLinks.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Botões de chamada para ação com animação suave ao clicar
  const ctaButtons = document.querySelectorAll(".btn-container .cta-btn");
  ctaButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(button.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});