(function languageSwitcher() {
  const root = document.documentElement;
  const container = document.querySelector('.lang-switcher-inner');
  const indicator = document.querySelector('.lang-indicator');
  const buttons = Array.from(document.querySelectorAll('.lang-btn'));

  function positionIndicator(activeBtn) {
    if (!activeBtn || !indicator || !container) return;
    const left = activeBtn.offsetLeft;
    const width = activeBtn.offsetWidth;
    indicator.style.width = width + 'px';
    indicator.style.transform = 'translateX(' + left + 'px)';
  }

  function setLang(lang) {
    root.setAttribute('data-current-lang', lang);
    try { localStorage.setItem('cloudlast-lang', lang); } catch (_) {}

    buttons.forEach((b) => {
      const isActive = b.getAttribute('data-set-lang') === lang;
      b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      if (isActive) positionIndicator(b);
    });
  }

  const saved = (() => { try { return localStorage.getItem('cloudlast-lang'); } catch (_) { return null; } })() || 'it';
  requestAnimationFrame(() => setLang(saved));

  buttons.forEach((btn) => btn.addEventListener('click', () => setLang(btn.getAttribute('data-set-lang'))));
  window.addEventListener('resize', () => {
    const currentLang = root.getAttribute('data-current-lang') || saved;
    const active = buttons.find((b) => b.getAttribute('data-set-lang') === currentLang);
    positionIndicator(active);
  });
})();

(function themeSwitcher() {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  function setTheme(t) {
    root.setAttribute('data-theme', t);
    toggle.setAttribute('aria-checked', t === 'light' ? 'true' : 'false');
    try { localStorage.setItem('cloudlast-theme', t); } catch (_) {}
  }

  const saved = (() => { try { return localStorage.getItem('cloudlast-theme'); } catch (_) { return null; } })() || 'dark';
  setTheme(saved);

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
})();

