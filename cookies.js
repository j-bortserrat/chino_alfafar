function getCookieConsent() {
  try {
    const raw = localStorage.getItem('rca_cookie_consent');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function saveCookieConsent(consent) {
  localStorage.setItem('rca_cookie_consent', JSON.stringify(consent));
  applyCookieConsent(consent);
}

function applyCookieConsent(consent) {
  const wrap = document.getElementById('mapaWrap');
  if (!wrap) return;
  if (consent && consent.maps) {
    if (!wrap.querySelector('iframe')) {
      wrap.innerHTML = '<iframe src="https://www.google.com/maps?q=Avinguda+de+la+Albufera+46,+46910+Alfafar,+Valencia&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ubicación Restaurante Chino Alfafar"></iframe>';
    }
  } else {
    const lang = getLang();
    wrap.innerHTML = `
      <div class="mapa-consent">
        <p>${I18N[lang].map_consent_prompt}</p>
        <button type="button" id="mapaAcceptBtn">${I18N[lang].map_consent_btn}</button>
      </div>
    `;
    const btn = document.getElementById('mapaAcceptBtn');
    if (btn) btn.addEventListener('click', () => {
      const c = getCookieConsent() || { necessary: true };
      c.necessary = true;
      c.maps = true;
      c.decided = true;
      saveCookieConsent(c);
    });
  }
}

function buildCookieBanner() {
  if (document.getElementById('cookieBanner')) return document.getElementById('cookieBanner');
  const lang = getLang();
  const banner = document.createElement('div');
  banner.id = 'cookieBanner';
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <p class="cookie-banner-text">${I18N[lang].cookie_banner_text}</p>
    <div class="cookie-options">
      <label class="cookie-option">
        <input type="checkbox" checked disabled>
        <span><strong>${I18N[lang].cookie_necessary_title}</strong> — ${I18N[lang].cookie_necessary_desc}</span>
      </label>
      <label class="cookie-option">
        <input type="checkbox" id="cookieMapsToggle">
        <span><strong>${I18N[lang].cookie_maps_title}</strong> — ${I18N[lang].cookie_maps_desc}</span>
      </label>
    </div>
    <div class="cookie-actions">
      <button type="button" class="cookie-btn cookie-btn-reject" id="cookieRejectBtn">${I18N[lang].cookie_reject}</button>
      <button type="button" class="cookie-btn cookie-btn-save" id="cookieSaveBtn">${I18N[lang].cookie_save}</button>
      <button type="button" class="cookie-btn cookie-btn-accept" id="cookieAcceptBtn">${I18N[lang].cookie_accept_all}</button>
    </div>
  `;
  document.body.appendChild(banner);

  document.getElementById('cookieAcceptBtn').addEventListener('click', () => {
    saveCookieConsent({ necessary: true, maps: true, decided: true });
    hideCookieBanner();
  });
  document.getElementById('cookieRejectBtn').addEventListener('click', () => {
    saveCookieConsent({ necessary: true, maps: false, decided: true });
    hideCookieBanner();
  });
  document.getElementById('cookieSaveBtn').addEventListener('click', () => {
    const maps = document.getElementById('cookieMapsToggle').checked;
    saveCookieConsent({ necessary: true, maps: maps, decided: true });
    hideCookieBanner();
  });
  return banner;
}

function showCookieBanner() {
  const banner = buildCookieBanner();
  const consent = getCookieConsent();
  const mapsToggle = document.getElementById('cookieMapsToggle');
  if (mapsToggle) mapsToggle.checked = !!(consent && consent.maps);
  banner.classList.add('visible');
}

function hideCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  if (banner) banner.classList.remove('visible');
}

document.addEventListener('DOMContentLoaded', () => {
  const consent = getCookieConsent();
  applyCookieConsent(consent);
  if (!consent || !consent.decided) {
    showCookieBanner();
  }
  document.querySelectorAll('.cookie-config-btn').forEach(btn => {
    btn.addEventListener('click', showCookieBanner);
  });
  document.addEventListener('langchange', () => {
    const existing = document.getElementById('cookieBanner');
    if (existing) existing.remove();
    if (!getCookieConsent() || !getCookieConsent().decided) {
      showCookieBanner();
    }
  });
});
