const improvementAreas = [
  {
    title: "Onboarding guidato",
    description:
      "Template di landing, checklist e segmentazione lead per rendere la prima pubblicazione cloud più rapida e coerente.",
  },
  {
    title: "Affidabilità by design",
    description:
      "SLO chiari, alert preconfigurati e simulatori di fault per verificare la resilienza prima del go-live.",
  },
  {
    title: "Governance dati e AI",
    description:
      "Guardrail per l'uso di LLM, tagging dei dati sensibili e log centralizzati per audit e revisori.",
  },
  {
    title: "Efficienza dei costi",
    description:
      "Stime TCO automatiche, policy di spegnimento ambienti e report sui costi non allocati per team e prodotto.",
  },
  {
    title: "Incident readiness",
    description:
      "Runbook interattivi, dashboard di salute e canali di escalation predefiniti per ridurre il MTTR.",
  },
  {
    title: "Esperienza sviluppatore",
    description:
      "Blueprint CI/CD, ambienti preview e linting condiviso per eliminare differenze tra team.",
  },
];

const nextSteps = [
  {
    title: "Discovery di prodotto",
    description: "Workshop di 90 minuti per mappare esigenze, vincoli di settore e metriche di successo.",
  },
  {
    title: "Pilot assistito",
    description: "Attiviamo un caso d'uso reale con supervisione CloudLast per validare il modello operativo.",
  },
  {
    title: "Enablement",
    description: "Formazione breve su sicurezza, compliance e pratiche cloud-native mirate ai tuoi team.",
  },
];

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <span className="badge">CloudLast</span>
        <h1>Think Cloud. Build Last.</h1>
        <p>
          Una base cloud affidabile per team che vogliono lanciare in fretta, mantenere il
          controllo e crescere in sicurezza. Proponiamo miglioramenti concreti per diminuire
          l'attrito operativo e proteggere i dati.
        </p>
        <div className="pill-row">
          <span className="pill">Cloud-native accelerato</span>
          <span className="pill">Secure &amp; compliant</span>
          <span className="pill">Osservabilità pronta</span>
          <span className="pill">AI responsabile</span>
        </div>
      </header>

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

      <footer className="footer">CloudLast • pensata per durare</footer>
    </div>
  );
}
