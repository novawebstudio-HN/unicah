// Interacciones estilo Material UI (como la app original de UNICAH)

// ---- Efecto ripple en botones, listas y barra inferior ----
document.querySelectorAll('.btn, .menu-lista a, .navbar a, .appbar .material-icons, .drawer nav a').forEach(function (el) {
  el.classList.add('ripple');
  el.addEventListener('pointerdown', function (e) {
    var rect = el.getBoundingClientRect();
    var d = Math.max(rect.width, rect.height) * 2;
    var wave = document.createElement('span');
    wave.className = 'ripple-wave';
    wave.style.width = wave.style.height = d + 'px';
    wave.style.left = (e.clientX - rect.left - d / 2) + 'px';
    wave.style.top = (e.clientY - rect.top - d / 2) + 'px';
    el.appendChild(wave);
    setTimeout(function () { wave.remove(); }, 600);
  });
});

// ---- Menú lateral (drawer) ----
var drawer = document.querySelector('.drawer');
var overlay = document.querySelector('.overlay');
var btnMenu = document.getElementById('btn-menu');

function cerrarDrawer() {
  if (drawer) drawer.classList.remove('abierto');
  if (overlay) overlay.classList.remove('visible');
}

if (btnMenu && drawer) {
  btnMenu.addEventListener('click', function () {
    drawer.classList.add('abierto');
    overlay.classList.add('visible');
  });
  overlay.addEventListener('click', cerrarDrawer);
}

// ---- Menú del avatar ----
var avatar = document.querySelector('.avatar');
var menuAvatar = document.querySelector('.menu-avatar');

if (avatar && menuAvatar) {
  avatar.addEventListener('click', function (e) {
    e.stopPropagation();
    menuAvatar.classList.toggle('visible');
  });
  document.addEventListener('click', function () {
    menuAvatar.classList.remove('visible');
  });
}

// ---- Botón atrás ----
var btnAtras = document.getElementById('btn-atras');
if (btnAtras) {
  btnAtras.addEventListener('click', function (e) {
    if (history.length > 1) {
      e.preventDefault();
      history.back();
    }
  });
}
