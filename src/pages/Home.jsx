const improvementAreas = [
  {
    title: "Avvio guidato",
    description:
      "Sequenza di pubblicazione chiara, checklist condivise e aiuto editoriale per rendere il primo rilascio lineare.",
  },
  {
    title: "Affidabilità verificata",
    description:
      "Controlli di salute automatici, avvisi concordati e prove di carico per evitare sorprese prima del lancio.",
  },
  {
    title: "Custodia dei dati",
    description:
      "Catalogo delle informazioni, tracciamento degli accessi e regole trasparenti sull'uso di modelli di AI e assistenti.",
  },
  {
    title: "Costi sorvegliati",
    description:
      "Limiti di spesa, spegnimento automatico degli ambienti e sintesi mensili per team e prodotto.",
  },
  {
    title: "Prontezza agli imprevisti",
    description:
      "Percorsi di intervento chiari, prove di continuità e responsabilità definite per ridurre i tempi di fermo.",
  },
  {
    title: "Esperienza di team",
    description:
      "Linee guida uniche, ambienti di prova immediati e verifiche automatiche per evitare differenze tra squadre.",
  },
  {
    title: "Cruscotti unificati",
    description:
      "Vista unica su affidabilità, sicurezza e uso delle risorse, pronta per chi decide e per chi opera.",
  },
  {
    title: "Documentazione pronta",
    description:
      "Modelli di runbook, FAQ interne e brevi video per ridurre l'inserimento di nuove persone e partner.",
  },
];

const nextSteps = [
  {
    title: "Analisi rapida",
    description: "Sessione di 90 minuti per chiarire obiettivi, vincoli di settore e dati indispensabili.",
  },
  {
    title: "Pilot assistito",
    description: "Un caso d'uso reale seguito da CloudLast per verificare il modello operativo in sicurezza.",
  },
  {
    title: "Supporto continuativo",
    description: "Formazione breve, verifiche periodiche e materiali pronti per governance e team tecnici.",
  },
];

const launchHighlights = [
  {
    title: "Piena operatività",
    description:
      "Da inizio settimana prossima la piattaforma entra a regime con i primi moduli pronti all'uso.",
  },
  {
    title: "Prodotti al lancio",
    description:
      "Controllo costi, supervisione della sicurezza e strumenti per dati e AI saranno disponibili fin dal giorno uno.",
  },
  {
    title: "Accompagnamento dedicato",
    description: "Affiancamento dei team per l'attivazione iniziale, con risposte rapide e referenti chiari.",
  },
];

export default function Home() {
  return (
    <main className="page" id="main-content">
      <header className="hero">
        <div className="hero-top">
          <span className="badge">CloudLast</span>
          <span className="status-pill">Piena operatività da inizio settimana prossima</span>
        </div>
        <h1>Soluzioni cloud pronte a durare</h1>
        <p>
          Base affidabile, controlli chiari e persone accompagnate. Il lancio dei nostri prodotti
          segna l'inizio della disponibilità completa del software e di un supporto vicino a chi
          costruisce servizi digitali.
        </p>
        <div className="pill-row">
          <span className="pill">Lancio rapido e guidato</span>
          <span className="pill">Controlli di sicurezza trasparenti</span>
          <span className="pill">Dati tutelati e auditabili</span>
          <span className="pill">Esperienza d'uso curata</span>
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
          <h2>Da inizio settimana prossima siamo pienamente operativi</h2>
          <p className="muted">
            I moduli sono pronti, i processi di onboarding rifiniti e le persone di supporto hanno
            turni dedicati. Vogliamo che chi parte con noi percepisca subito la solidità della
            piattaforma e la semplicità d'uso.
          </p>
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
        <h2>Riduci il rischio, aumenta la velocità</h2>
        <p className="muted">
          Idee operative che puoi adottare subito per portare valore e fiducia in produzione. Sono
          pensate per contesti enterprise ma restano leggere per i team di prodotto.
        </p>
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
        <p className="muted">
          Un percorso breve per arrivare a un rollout controllato: analisi, pilot, governance e
          supporto continuo, sempre con metriche misurabili.
        </p>
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
        <p className="muted">
          Due schede dedicate: una per chi vuole provare subito, una per le aziende che devono
          indicare la partita IVA per ricevere proposta e documenti.
        </p>
        <div className="contact-grid">
          <form className="form-card" aria-label="Richiesta per team" onSubmit={(event) => event.preventDefault()}>
            <h3>Per team e prodotti</h3>
            <p className="muted">Risposta entro un giorno lavorativo.</p>
            <div className="form-group">
              <label htmlFor="nome">Nome e cognome</label>
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="name"
                required
                placeholder="Inserisci il tuo nome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="nome@azienda.it"
              />
            </div>
            <div className="form-group">
              <label htmlFor="obiettivo">Obiettivo principale</label>
              <input
                id="obiettivo"
                name="obiettivo"
                type="text"
                autoComplete="on"
                placeholder="Esempio: lanciare un nuovo servizio"
              />
            </div>
            <button type="submit" className="button full">
              Invia richiesta
            </button>
            <p className="helper">Nessun invio automatico: ti ricontattiamo noi.</p>
          </form>

          <form className="form-card" aria-label="Richiesta per aziende" onSubmit={(event) => event.preventDefault()}>
            <h3>Per aziende</h3>
            <p className="muted">Modulo con i dati essenziali, inclusa la P.IVA.</p>
            <div className="form-group">
              <label htmlFor="ragione">Ragione sociale</label>
              <input
                id="ragione"
                name="ragione"
                type="text"
                autoComplete="organization"
                required
                placeholder="Nome dell'azienda"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-azienda">Email di contatto</label>
              <input
                id="email-azienda"
                name="email-azienda"
                type="email"
                autoComplete="email"
                required
                placeholder="referente@azienda.it"
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Telefono (opzionale)</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                autoComplete="tel"
                placeholder="Preferito per un contatto rapido"
              />
            </div>
            <div className="form-group">
              <label htmlFor="piva">Partita IVA</label>
              <input
                id="piva"
                name="piva"
                type="text"
                autoComplete="off"
                required
                placeholder="Inserisci P.IVA"
              />
            </div>
            <div className="form-group">
              <label htmlFor="nota">Messaggio</label>
              <textarea
                id="nota"
                name="nota"
                autoComplete="off"
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
    </main>
  );
}
