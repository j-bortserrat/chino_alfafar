document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => navList.classList.toggle('open'));
    navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('open')));
  }

  function initReveals(root = document) {
    const reveals = root.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => observer.observe(el));
    setTimeout(() => reveals.forEach(el => el.classList.add('visible')), 2000);
  }
  initReveals();

  document.querySelectorAll('.galeria-grid .foto-card').forEach((el, i) => {
    el.style.transitionDelay = (i * 80) + 'ms';
  });

  // Parallax suave linternas y caracteres
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    document.querySelectorAll('.lantern').forEach((l, i) => {
      l.style.transform = `translateY(${y * (0.08 + i * 0.02)}px)`;
    });
    document.querySelectorAll('.floating-cn').forEach((el, i) => {
      el.style.transform = `translateY(${y * (0.04 + i * 0.02)}px)`;
    });
  }, { passive: true });

  // Resalta el enlace del nav según la página actual
  const page = document.body.dataset.page;
  document.querySelectorAll('#navList a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });

  // En la home, resalta "Inicio" según scroll
  const sections = document.querySelectorAll('section[id], header[id]');
  if (sections.length) {
    const navLinks = document.querySelectorAll('#navList a[href^="#"]');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        const top = s.offsetTop - 120;
        if (window.scrollY >= top) current = s.id;
      });
      navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + current);
      });
    }, { passive: true });
  }

  // Tabs simples (Carta Completa / Menú del Día)
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(tab.dataset.tab);
      panel.classList.add('active');
      initReveals(panel);
    });
  });

  // ============= CARTA: render dinámico filtrable + bilingüe =============
  const cartaApp = document.getElementById('carta-categorias');
  const filtrosWrap = document.getElementById('carta-filtros');
  if (cartaApp && typeof MENU_CATEGORIAS !== 'undefined') {
    let filtroActivo = 'todos';

    function renderFiltros(lang) {
      filtrosWrap.innerHTML = '';
      const btnTodos = document.createElement('button');
      btnTodos.className = 'filtro' + (filtroActivo === 'todos' ? ' active' : '');
      btnTodos.dataset.filtro = 'todos';
      btnTodos.textContent = I18N[lang].filtro_todos;
      filtrosWrap.appendChild(btnTodos);

      MENU_CATEGORIAS.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filtro' + (filtroActivo === cat.id ? ' active' : '');
        btn.dataset.filtro = cat.id;
        btn.textContent = cat[lang];
        filtrosWrap.appendChild(btn);
      });

      filtrosWrap.querySelectorAll('.filtro').forEach(btn => {
        btn.addEventListener('click', () => {
          filtroActivo = btn.dataset.filtro;
          filtrosWrap.querySelectorAll('.filtro').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          aplicarFiltro();
        });
      });
    }

    function aplicarFiltro() {
      cartaApp.querySelectorAll('.categoria').forEach(el => {
        const match = filtroActivo === 'todos' || el.dataset.cat === filtroActivo;
        el.classList.toggle('hidden', !match);
      });
    }

    function renderCategorias(lang, animate) {
      cartaApp.innerHTML = '';
      MENU_CATEGORIAS.forEach((cat, i) => {
        const catEl = document.createElement('div');
        catEl.className = 'categoria reveal' + (filtroActivo !== 'todos' && filtroActivo !== cat.id ? ' hidden' : '');
        catEl.dataset.cat = cat.id;
        if (animate) catEl.style.transitionDelay = (i * 60) + 'ms';

        let html = `<div class="categoria-header"><h3><span class="cn">${cat.cn}</span>${cat[lang]}</h3></div>`;
        html += '<div class="platos-list">';
        let lastGrupo = null;
        cat.items.forEach(item => {
          if (item.grupo && item.grupo[lang] !== lastGrupo) {
            lastGrupo = item.grupo[lang];
            html += `<div class="plato-grupo">${lastGrupo}</div>`;
          }
          html += `<div class="plato-item"><span class="nombre">${item[lang]}</span><span class="dots"></span><span class="precio">${item.precio}</span></div>`;
        });
        html += '</div>';
        if (cat.nota) {
          html += `<div class="categoria-nota">${cat.nota[lang]}</div>`;
        }
        catEl.innerHTML = html;
        cartaApp.appendChild(catEl);
      });
      if (animate) {
        initReveals(cartaApp);
      } else {
        cartaApp.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      }
    }

    function renderTodo(lang, animate) {
      renderFiltros(lang);
      renderCategorias(lang, animate);
    }

    renderTodo(getLang(), true);
    document.addEventListener('langchange', (e) => renderTodo(e.detail.lang, false));
  }

  // ============= MENÚ DEL DÍA: render bilingüe =============
  const menudiaApp = document.getElementById('menudia-app');
  if (menudiaApp && typeof MENU_DEL_DIA !== 'undefined') {
    function renderMenuDia(lang) {
      const d = MENU_DEL_DIA;
      const listHtml = (items) => '<ul>' + items.map(it => `<li>${it[lang]}</li>`).join('') + '</ul>';
      menudiaApp.innerHTML = `
        <div class="menu-precio">
          <span class="label" data-i18n="menudia_label">${I18N[lang].menudia_label}</span>
          <span class="num">${d.precio}<small>€</small></span>
          <span class="menu-disponible">${d.disponible[lang]}</span>
        </div>
        <div class="menu-bloque">
          <h4>${d.primero.label[lang]}</h4>
          ${listHtml(d.primero.items)}
        </div>
        <div class="menu-bloque">
          <h4>${d.segundo.label[lang]}</h4>
          ${listHtml(d.segundo.items)}
        </div>
        <div class="menu-bloque">
          <h4>${d.tercero.label[lang]}</h4>
          ${listHtml(d.tercero.items)}
        </div>
        <div class="menu-bebida">
          <span class="destacado">${I18N[lang].menudia_bebida_label}</span><br>
          ${d.bebida[lang]}<br><br>
          <span class="destacado">${I18N[lang].menudia_postre_label}</span><br>
          ${d.postre[lang]}
        </div>
        <div class="menu-nota">${d.nota[lang]}</div>
      `;
    }
    renderMenuDia(getLang());
    document.addEventListener('langchange', (e) => renderMenuDia(e.detail.lang));
  }
});
