
const SITE = {
  name: 'Pacient v systému',
  email: 'info@pacientvsystemu.cz',
  nav: [
    {label:'Práva pacienta', href:'prava-pacienta.html'},
    {label:'Co dělat teď', href:'co-delat-ted.html'},
    {label:'Řešení konfliktů', href:'reseni-konfliktu.html'},
    {label:'FAQ', href:'faq.html'},
  ]
};

function injectHeader() {
  const h = document.createElement('div');
  h.className = 'header';
  h.innerHTML = `
    <div class="container header-inner">
      <div class="brand"><div class="brand-dot"></div><span>${SITE.name}</span></div>
      <nav class="nav">
        ${SITE.nav.map(n=>`<a href="${n.href}">${n.label}</a>`).join('')}
      </nav>
    </div>`;
  document.body.prepend(h);
}

function injectFooter() {
  const f = document.createElement('footer');
  f.className = 'footer';
  f.innerHTML = `
    <div class="container small">
      <div><strong>${SITE.name}</strong><br/>Neziskový portál podporující pacienty v ČR.</div>
      <div><strong>Kontakt</strong><br/>E-mail: ${SITE.email}</div>
    </div>`;
  document.body.append(f);
}

document.addEventListener('DOMContentLoaded', ()=>{ injectHeader(); injectFooter(); });
