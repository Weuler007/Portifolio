// Scroll suave ao clicar no menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Interatividade nas habilidades
document.querySelectorAll('#habilidades li').forEach(item => {
  item.addEventListener('click', () => {
    alert(`Você clicou em: ${item.textContent}`);
  });
});
