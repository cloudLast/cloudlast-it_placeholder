# CloudLast placeholder

Sito promozionale e di policy basato su React (Vite) con alcune pagine statiche HTML per i documenti
istituzionali. Include contenuti in italiano/inglese e controlli di accessibilità di base.

## Requisiti

- Node.js >= 18 (consigliato l'uso di npm 10 per garantire build deterministiche)
- Ambiente con supporto ai moduli ES e a Vite

## Installazione e comandi

```bash
# installa le dipendenze
npm install

# sviluppo locale
npm run dev

# build di produzione
npm run build

# anteprima della build
npm run preview
```

## Struttura cartelle

- `src/` – applicazione React con routing, componenti pagina e stile principale (`src/assets/style.css`).
- `assets/` – risorse statiche usate dalle pagine HTML (stile, immagini, script di lingua/tema).
- `*.html` – pagine istituzionali statiche servite dal dominio principale.
- `vite.config.js` – configurazione principale Vite (plugin React + copia immagini statiche).
- `manifest.webmanifest`, `robots.txt` – asset per SEO/PWA e crawling.

## Note su build e deploy

- Il progetto utilizza Vite con React 18 e `vite-plugin-static-copy` per spostare le immagini nella
  cartella di output.
- Mantenere `data-current-lang` e gli attributi ARIA per la gestione bilingue delle pagine statiche.
- Evitare di rimuovere le pagine HTML statiche: sono referenziate direttamente dalle CTA del sito.
- Se necessario aggiornare le dipendenze, usare `npm install --package-lock-only` per generare il
  lockfile e mantenere build ripetibili.

## TODO

- Aggiungere una pipeline di test automatici per accessibilità e link checking.
- Integrare una sitemap statica generata in build per migliorare l'indicizzazione.
- Documentare le variabili di ambiente e l'hosting corrente non appena disponibili.
