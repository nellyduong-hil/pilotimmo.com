// Sélection des éléments
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Toggle du menu mobile au clic
mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Optionnel : fermer le menu quand on clique sur un lien
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('nav-active')) {
      navLinks.classList.remove('nav-active');
    }
  });
});

