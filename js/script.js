const btnTopo = document.getElementById('btnTopo');
const menuButton = document.querySelector('[data-js="botao-menu-responsivo"]');
const menuMobile = document.querySelector('.menu-responsivo');

/* MOSTRAR / ESCONDER */
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTopo.classList.add('show');
  } else {
    btnTopo.classList.remove('show');
  }
});

/* SUBIR SUAVE */
btnTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener("DOMContentLoaded", () => {

  // ================= MENU MOBILE =================
  if (menuButton && menuMobile) {
    menuButton.addEventListener('click', () => {
      menuMobile.classList.toggle('abrir');
      menuButton.classList.toggle('ativo'); // 👈 aqui faz trocar o ícone
    });
  }

  // ================= BOTÃO TOPO =================
  if (btnTopo) {

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btnTopo.style.opacity = '1';
        btnTopo.style.visibility = 'visible';
        btnTopo.style.transform = 'translateY(0)';
      } else {
        btnTopo.style.opacity = '0';
        btnTopo.style.visibility = 'hidden';
        btnTopo.style.transform = 'translateY(20px)';
      }
    });

    btnTopo.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

  }

});