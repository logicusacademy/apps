const toast = document.querySelector('.toast');
let toastTimer;
document.querySelectorAll('[data-toast]').forEach(btn => {
  btn.addEventListener('click', () => {
    toast.textContent = btn.dataset.toast;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  });
});

const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.desktop-nav');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav.style.display = open ? '' : 'flex';
  if (!open) {
    nav.style.position = 'absolute';
    nav.style.top = '68px';
    nav.style.left = '14px';
    nav.style.right = '14px';
    nav.style.padding = '18px';
    nav.style.background = '#fff';
    nav.style.border = '1px solid #e5e8f0';
    nav.style.borderRadius = '16px';
    nav.style.flexDirection = 'column';
    nav.style.gap = '14px';
  }
});
