(function languageSwitcher() {
  const root = document.documentElement;
  const container = document.querySelector(".lang-switcher-inner");
  const indicator = document.querySelector(".lang-indicator");
  const buttons = Array.from(document.querySelectorAll(".lang-btn"));
  const supported = ["it", "en"];

  function positionIndicator(activeBtn) {
    if (!activeBtn || !indicator || !container) return;
    const left = activeBtn.offsetLeft;
    const width = activeBtn.offsetWidth;
    indicator.style.width = `${width}px`;
    indicator.style.transform = `translateX(${left}px)`;
  }

  function setLang(lang) {
    const safeLang = supported.includes(lang) ? lang : "it";
    root.setAttribute("data-current-lang", safeLang);
    try {
      localStorage.setItem("cloudlast-lang", safeLang);
    } catch (_) {}

    buttons.forEach((b) => {
      const isActive = b.getAttribute("data-set-lang") === safeLang;
      b.setAttribute("aria-pressed", isActive ? "true" : "false");
      if (isActive) positionIndicator(b);
    });
  }

  const saved = (() => {
    try {
      return localStorage.getItem("cloudlast-lang");
    } catch (_) {
      return null;
    }
  })();

  requestAnimationFrame(() => setLang(saved || "it"));

  buttons.forEach((btn) => btn.addEventListener("click", () => setLang(btn.getAttribute("data-set-lang"))));
  window.addEventListener("resize", () => {
    const currentLang = root.getAttribute("data-current-lang") || "it";
    const active = buttons.find((b) => b.getAttribute("data-set-lang") === currentLang);
    positionIndicator(active);
  });
})();

(function themeSwitcher() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  function setTheme(t) {
    const theme = t === "light" ? "light" : "dark";
    root.setAttribute("data-theme", theme);
    toggle.setAttribute("aria-checked", theme === "light" ? "true" : "false");
    try {
      localStorage.setItem("cloudlast-theme", theme);
    } catch (_) {}
  }

  const saved = (() => {
    try {
      return localStorage.getItem("cloudlast-theme");
    } catch (_) {
      return null;
    }
  })();

  setTheme(saved || "dark");

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
})();
