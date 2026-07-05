const I18N = {
  es: {
    nav_inicio: "Inicio",
    nav_carta: "Carta",
    nav_galeria: "Galería",
    nav_contacto: "Contacto",

    hero_mini: "Auténtica Cocina China · Alfafar",
    hero_p: "Cocina china tradicional en el corazón de Alfafar. Sabores auténticos, recetas de siempre y un menú del día para los que saben disfrutar.",
    hero_btn_reserve: "Reservar Mesa",
    hero_btn_menu: "Ver Carta",

    inicio_small: "Visítanos",
    inicio_h2_a: "Ven a",
    inicio_h2_b: "Visitarnos",

    ubicacion_h4: "Ubicación",
    btn_mapa: "Cómo llegar",

    horario_h4: "Horario",
    horario_dia: "Todos los días",
    horario_sub: "De lunes a domingo, comida y cena",
    horario_nota: "La cocina cierra media hora antes del horario de cierre",

    reservas_h4: "Reservas",
    reservas_p: "Llámanos para reservar tu mesa",
    reservas_nota: "Pedidos y reservas con 24h de antelación",

    footer_reservas_label: "Reservas:",
    footer_alergenos: "Carta de alérgenos disponible en el restaurante.",
    footer_copyright: "Todos los derechos reservados",

    carta_small: "Nuestros Platos",
    carta_h2_a: "Nuestra",
    carta_h2_b: "Carta",
    aviso_alergenos: "Consulta nuestra carta de alérgenos, disponible en el restaurante.",
    tab_completa: "Carta Completa",
    tab_menudia: "Menú del Día",
    filtro_todos: "Todos",
    filtro_contacto: "Contacto",

    menudia_label: "Menú del Día — por sólo",
    menudia_bebida_label: "Bebida",
    menudia_postre_label: "Postre",

    galeria_small: "Fotografías",
    galeria_h2_a: "Nuestra",
    galeria_h2_b: "Galería",

    gal_1: "Arroz Tres Delicias",
    gal_2: "Tallarines Fritos",
    gal_3: "Pollo al Limón",
    gal_4: "Ternera con Bambú y Setas",
    gal_5: "Arroz con Gambas",
    gal_6: "Tallarines Fritos",
    gal_7: "Especialidades",
    gal_8: "Postres",
  },
  en: {
    nav_inicio: "Home",
    nav_carta: "Menu",
    nav_galeria: "Gallery",
    nav_contacto: "Contact",

    hero_mini: "Authentic Chinese Cuisine · Alfafar",
    hero_p: "Traditional Chinese cooking in the heart of Alfafar. Authentic flavours, time-honoured recipes and a daily set menu for those who know how to enjoy a good meal.",
    hero_btn_reserve: "Book a Table",
    hero_btn_menu: "View Menu",

    inicio_small: "Visit Us",
    inicio_h2_a: "Come and",
    inicio_h2_b: "Visit Us",

    ubicacion_h4: "Location",
    btn_mapa: "Get Directions",

    horario_h4: "Opening Hours",
    horario_dia: "Every day",
    horario_sub: "Monday to Sunday, lunch & dinner",
    horario_nota: "The kitchen closes half an hour before closing time",

    reservas_h4: "Reservations",
    reservas_p: "Call us to book your table",
    reservas_nota: "Orders & reservations require 24h notice",

    footer_reservas_label: "Reservations:",
    footer_alergenos: "Allergen menu available at the restaurant.",
    footer_copyright: "All rights reserved",

    carta_small: "Our Dishes",
    carta_h2_a: "Our",
    carta_h2_b: "Menu",
    aviso_alergenos: "Ask us for our allergen menu, available at the restaurant.",
    tab_completa: "Full Menu",
    tab_menudia: "Menu of the Day",
    filtro_todos: "All",
    filtro_contacto: "Contact",

    menudia_label: "Menu of the Day — for only",
    menudia_bebida_label: "Drink",
    menudia_postre_label: "Dessert",

    galeria_small: "Photos",
    galeria_h2_a: "Our",
    galeria_h2_b: "Gallery",

    gal_1: "Three Delicacies Rice",
    gal_2: "Fried Noodles",
    gal_3: "Lemon Chicken",
    gal_4: "Beef with Bamboo and Mushrooms",
    gal_5: "Rice with Prawns",
    gal_6: "Fried Noodles",
    gal_7: "Specialities",
    gal_8: "Desserts",
  }
};

const PAGE_META = {
  index: {
    es: { title: "Restaurante Chino Alfafar — Cocina china auténtica", desc: "Restaurante Chino Alfafar. Carta tradicional, menú del día y reservas por teléfono. Avinguda de la Albufera, 46, Alfafar." },
    en: { title: "Restaurante Chino Alfafar — Authentic Chinese Cuisine", desc: "Restaurante Chino Alfafar. Traditional menu, daily set menu and phone reservations. Avinguda de la Albufera, 46, Alfafar." }
  },
  carta: {
    es: { title: "Carta — Restaurante Chino Alfafar", desc: "Descubre nuestra carta completa y el menú del día. Cocina china tradicional en Alfafar." },
    en: { title: "Menu — Restaurante Chino Alfafar", desc: "Discover our full menu and daily set menu. Traditional Chinese cuisine in Alfafar." }
  },
  galeria: {
    es: { title: "Galería — Restaurante Chino Alfafar", desc: "Galería de fotos de nuestros platos. Restaurante Chino Alfafar." },
    en: { title: "Gallery — Restaurante Chino Alfafar", desc: "Photo gallery of our dishes. Restaurante Chino Alfafar." }
  }
};

function getLang() {
  return localStorage.getItem('rca_lang') || 'es';
}

function applyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
  });

  document.querySelectorAll('.lang-switch button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  const page = document.body.dataset.page;
  const meta = PAGE_META[page];
  if (meta && meta[lang]) {
    document.title = meta[lang].title;
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', meta[lang].desc);
  }

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function setLang(lang) {
  localStorage.setItem('rca_lang', lang);
  applyLang(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-switch button').forEach(b => {
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });
  applyLang(getLang());
});
