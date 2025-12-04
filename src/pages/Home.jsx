const improvementAreas = [
  {
    title: "Avvio guidato",
    description: "Checklist leggere e assistenza dedicata per arrivare al go-live senza attriti.",
  },
  {
    title: "Affidabilità verificata",
    description: "Health check automatici, alert concordati e prove di carico pronte.",
  },
  {
    title: "Custodia dei dati",
    description: "Accessi tracciati, regole trasparenti e protezione dei dati fin dal design.",
  },
  {
    title: "Costi sorvegliati",
    description: "Limiti di spesa chiari, ambienti che si spengono da soli e report sintetici.",
  },
  {
    title: "Prontezza agli imprevisti",
    description: "Percorsi di intervento provati e owner espliciti per ridurre i tempi di fermo.",
  },
  {
    title: "Esperienza di team",
    description: "Linee guida uniche, ambienti di prova immediati e verifiche automatiche comuni.",
  },
  {
    title: "Cruscotti unificati",
    description: "Vista unica su affidabilità, sicurezza e uso risorse per decisioni rapide.",
  },
  {
    title: "Documentazione pronta",
    description: "Runbook, FAQ e micro-video per inserire persone e partner in poche ore.",
  },
];

const nextSteps = [
  {
    title: "Analisi rapida",
    description: "90 minuti per allineare obiettivi, vincoli di settore e dati indispensabili.",
  },
  {
    title: "Pilot assistito",
    description: "Un caso reale seguito insieme per testare il modello operativo in sicurezza.",
  },
  {
    title: "Supporto continuativo",
    description: "Formazione breve, verifiche periodiche e materiali pronti per governance e team.",
  },
];

const launchHighlights = [
  {
    title: "Piena operatività",
    description: "Da inizio settimana prossima la piattaforma è pronta con i primi moduli attivi.",
  },
  {
    title: "Prodotti al lancio",
    description: "Controllo costi, supervisione sicurezza e strumenti per dati e AI già disponibili.",
  },
  {
    title: "Accompagnamento dedicato",
    description: "Affiancamento dei team al lancio con risposte rapide e referenti chiari.",
  },
];

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-top">
          <span className="badge">CloudLast</span>
          <span className="status-pill">Piena operatività da inizio settimana prossima</span>
        </div>
        <h1>Esperienze cloud curate e veloci</h1>
        <p>Toolkit, controlli e supporto umano per lanciare servizi digitali con sicurezza e ritmo.</p>
        <div className="pill-row">
          <span className="pill">Lancio guidato</span>
          <span className="pill">Controlli trasparenti</span>
          <span className="pill">Dati tutelati</span>
          <span className="pill">UX curata</span>
        </div>
        <div className="cta-row">
          <a className="button" href="#contatti">
            Scrivici ora
          </a>
          <a className="button ghost" href="#novita">
            Scopri cosa arriva
          </a>
        </div>
      </header>

      <section className="section accent" id="novita">
        <div className="wide-card">
          <p className="badge">Lancio prodotti</p>
          <h2>Operativi da inizio settimana prossima</h2>
          <p className="muted">Moduli pronti, onboarding snello e supporto con orari dedicati.</p>
          <div className="grid highlights">
            {launchHighlights.map((item) => (
              <article key={item.title} className="card soft">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <p className="badge">Proposte di miglioramento</p>
        <h2>Riduci il rischio, accelera il rollout</h2>
        <p className="muted">Suggerimenti pronti all'uso per team di prodotto e ambienti enterprise.</p>
        <div className="grid">
          {improvementAreas.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="badge">Prossimi passi</p>
        <h2>Come lavoriamo insieme</h2>
        <p className="muted">Percorso essenziale: analisi, pilot, governance e supporto continuativo.</p>
        <div className="grid">
          {nextSteps.map((step) => (
            <article key={step.title} className="card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contatti">
        <p className="badge">Contatti rapidi</p>
        <h2>Scrivici con un modulo semplice</h2>
        <p className="muted">Due schede: per team di prodotto e per aziende con P.IVA.</p>
        <div className="contact-grid">
          <form className="form-card" onSubmit={(event) => event.preventDefault()}>
            <h3>Per team e prodotti</h3>
            <p className="muted">Risposta entro un giorno lavorativo.</p>
            <div className="form-group">
              <label htmlFor="nome">Nome e cognome</label>
              <input id="nome" name="nome" type="text" required placeholder="Inserisci il tuo nome" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="nome@azienda.it" />
            </div>
            <div className="form-group">
              <label htmlFor="obiettivo">Obiettivo principale</label>
              <input
                id="obiettivo"
                name="obiettivo"
                type="text"
                placeholder="Esempio: lanciare un nuovo servizio"
              />
            </div>
            <button type="submit" className="button full">
              Invia richiesta
            </button>
            <p className="helper">Nessun invio automatico: ti ricontattiamo noi.</p>
          </form>

          <form className="form-card" onSubmit={(event) => event.preventDefault()}>
            <h3>Per aziende</h3>
            <p className="muted">Modulo con i dati essenziali, inclusa la P.IVA.</p>
            <div className="form-group">
              <label htmlFor="ragione">Ragione sociale</label>
              <input id="ragione" name="ragione" type="text" required placeholder="Nome dell'azienda" />
            </div>
            <div className="form-group">
              <label htmlFor="email-azienda">Email di contatto</label>
              <input
                id="email-azienda"
                name="email-azienda"
                type="email"
                required
                placeholder="referente@azienda.it"
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Telefono (opzionale)</label>
              <input id="telefono" name="telefono" type="tel" placeholder="Preferito per un contatto rapido" />
            </div>
            <div className="form-group">
              <label htmlFor="piva">Partita IVA</label>
              <input id="piva" name="piva" type="text" required placeholder="Inserisci P.IVA" />
            </div>
            <div className="form-group">
              <label htmlFor="nota">Messaggio</label>
              <textarea
                id="nota"
                name="nota"
                rows="3"
                placeholder="Indicaci urgenze, prodotti da lanciare o vincoli di settore"
              ></textarea>
            </div>
            <button type="submit" className="button full">
              Invia i dati
            </button>
            <p className="helper">Riceverai un riepilogo entro poche ore lavorative.</p>
          </form>
        </div>
      </section>

      <footer className="footer">CloudLast • pensata per durare</footer>
    </div>
  );
}
