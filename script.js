/* ============================================================
   JUNTO A TI — INTERACCIONES
   Los textos viven en index.html; aquí solo está el comportamiento.
   ============================================================ */
document.documentElement.classList.add('js');
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* 1. MENÚ HAMBURGUESA */
const botonMenu = $('.hamburguesa'), menu = $('#menu');
botonMenu.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  botonMenu.setAttribute('aria-expanded', abierto);
});
$$('#menu a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('abierto');
  botonMenu.setAttribute('aria-expanded', 'false');
}));

/* 2. SOMBRA DEL MENÚ Y BOTÓN "VOLVER ARRIBA" */
const subir = $('.subir');
window.addEventListener('scroll', () => {
  $('.cabecera').classList.toggle('sombra', scrollY > 10);
  subir.classList.toggle('visible', scrollY > 600);
}, { passive: true });
subir.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

/* 3. ANIMACIÓN AL HACER SCROLL (elementos con class="aparece") */
const elementos = $$('.aparece');
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  }), { threshold: 0.12 });
  elementos.forEach(el => obs.observe(el));
} else elementos.forEach(el => el.classList.add('visible'));

/* 4. VENTANAS EMERGENTES: botones con data-abrir="id" abren <dialog id="id"> */
$$('[data-abrir]').forEach(b => b.addEventListener('click', () => {
  const d = document.getElementById(b.dataset.abrir);
  if (d && d.showModal) d.showModal();
}));
$$('dialog').forEach(d => {
  d.addEventListener('click', e => { if (e.target === d) d.close(); }); // clic fuera
  $$('[data-cerrar]', d).forEach(b => b.addEventListener('click', () => d.close()));
});

/* 5. EMOCIONES ILUSTRATIVAS (no se guarda nada) */
$$('.moods').forEach(grupo => {
  const msg = grupo.parentElement.querySelector('.mood-msg');
  $$('button', grupo).forEach(b => b.addEventListener('click', () => {
    $$('button', grupo).forEach(x => x.classList.remove('activo'));
    b.classList.add('activo');
    if (msg) msg.textContent = 'Ejemplo: te sientes «' + b.dataset.estado + '». No se guarda ningún dato.';
  }));
});

/* 6. CARRUSEL DE TESTIMONIOS */
const pista = $('.pista');
if (pista) {
  const total = pista.children.length, puntos = $('.puntos');
  let i = 0, timer;
  for (let n = 0; n < total; n++) {
    const p = document.createElement('button');
    p.setAttribute('aria-label', 'Ir al testimonio ' + (n + 1));
    p.addEventListener('click', () => ir(n));
    puntos.appendChild(p);
  }
  function ir(n) {
    i = (n + total) % total;
    pista.style.transform = 'translateX(' + (-100 * i) + '%)';
    $$('button', puntos).forEach((p, k) => p.classList.toggle('activo', k === i));
  }
  $('.flecha.ant').addEventListener('click', () => ir(i - 1));
  $('.flecha.sig').addEventListener('click', () => ir(i + 1));
  const auto = () => { clearInterval(timer); timer = setInterval(() => ir(i + 1), 7000); };
  $('.carrusel-wrap').addEventListener('mouseenter', () => clearInterval(timer));
  $('.carrusel-wrap').addEventListener('mouseleave', auto);
  ir(0); auto();
}

/* 7. SI FALTA UNA IMAGEN, SE MUESTRA UN FONDO DE COLOR */
$$('.foto img, .avatar img').forEach(img => {
  const marcar = () => { img.parentElement.classList.add('sin-imagen'); if (img.closest('.avatar')) img.remove(); };
  if (img.complete && img.naturalWidth === 0) marcar();
  img.addEventListener('error', marcar);
});

/* 8. AÑO AUTOMÁTICO DEL PIE */
$$('.anio').forEach(e => e.textContent = new Date().getFullYear());
