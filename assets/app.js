(function languageSwitcher() {
  const root = document.documentElement;
  const container = document.querySelector(".lang-switcher-inner");
  const indicator = document.querySelector(".lang-indicator");
  const buttons = Array.from(document.querySelectorAll(".lang-btn"));
  const supported = ["it", "en"];
  const defaultLang = "it";

  function safeStorageGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  }

  function safeStorageSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (_) {
      /* no-op */
    }
  }

  function positionIndicator(activeBtn) {
    if (!activeBtn || !indicator || !container) return;
    const left = activeBtn.offsetLeft;
    const width = activeBtn.offsetWidth;
    indicator.style.width = `${width}px`;
    indicator.style.transform = `translateX(${left}px)`;
  }

  function applyLangState(lang) {
    const safeLang = supported.includes(lang) ? lang : defaultLang;
    root.setAttribute("data-current-lang", safeLang);
    safeStorageSet("cloudlast-lang", safeLang);

    buttons.forEach((button) => {
      const isActive = button.getAttribute("data-set-lang") === safeLang;
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
      if (isActive) positionIndicator(button);
    });
  }

  const saved = safeStorageGet("cloudlast-lang");
  requestAnimationFrame(() => applyLangState(saved || defaultLang));

  buttons.forEach((btn) => btn.addEventListener("click", () => applyLangState(btn.getAttribute("data-set-lang"))));
  window.addEventListener("resize", () => {
    const currentLang = root.getAttribute("data-current-lang") || defaultLang;
    const active = buttons.find((button) => button.getAttribute("data-set-lang") === currentLang);
    positionIndicator(active);
  });
})();

(function themeSwitcher() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  function safeStorageSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (_) {
      /* no-op */
    }
  }

  function safeStorageGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  }

  function setTheme(theme) {
    const normalized = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", normalized);
    toggle.setAttribute("aria-checked", normalized === "light" ? "true" : "false");
    safeStorageSet("cloudlast-theme", normalized);
  }

  const saved = safeStorageGet("cloudlast-theme");
  setTheme(saved || "dark");

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
})();
