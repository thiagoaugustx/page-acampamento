function toggleMenu() {
  const nav = document.getElementById('navMobile');

  if (!nav.classList.contains('active')) {
    nav.classList.add('active');
    nav.style.position = 'fixed';
    nav.style.top = '0';
    nav.style.left = '0';
    nav.style.width = '100vw';
    nav.style.height = '100vh';
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.justifyContent = 'center';
    nav.style.alignItems = 'center';
    nav.style.zIndex = '999';
    nav.style.color = '#000';

    // Adiciona o evento para cada link
    const links = nav.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

  } else {
    closeMenu();
  }
}

const navLinks = document.querySelectorAll('.nav-link');
const navMenu = document.querySelector('.navbar-menu');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show'); // ou toggle invertido
  });
});


function closeMenu() {
  const nav = document.getElementById('navMobile');
  nav.classList.remove('active');
  nav.style.display = 'none';
}


  // Define a data-alvo: 9 de junho de 2025, 18h
  const targetDate = new Date("2025-06-09T18:00:00");

  // Referências aos elementos
  const countdownEl = document.getElementById("countdown");
  const bannerSection = document.getElementById("banner");
  const inscriptionBtn = document.getElementById("inscription-btn");

  const interval = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      // Tempo esgotado: limpa intervalo, esconde tudo, mostra botão
      clearInterval(interval);

      // Remove todos os filhos da div .contagem (menos o botão)
      const contagemDiv = document.querySelector(".contagem");
      [...contagemDiv.children].forEach(child => {
        if (child.id !== "inscription-btn") {
          child.style.display = "none";
        }
      });

      // Exibe o botão
      inscriptionBtn.style.display = "inline-block";
      return;
    }

    // Cálculo do tempo restante
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Formatação com dois dígitos
    const d = String(days).padStart(2, '0');
    const h = String(hours).padStart(2, '0');
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');

    countdownEl.textContent = `${d} dias ${h}h ${m}m ${s}s`;
  }, 1000);
  
  