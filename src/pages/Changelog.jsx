const releases = [
  {
    version: "0.3.0",
    date: "Feb 2025",
    notes: "Blueprint CI/CD estesi e runbook incidenti condivisi.",
  },
  {
    version: "0.2.0",
    date: "Gen 2025",
    notes: "Dashboard costi con raccomandazioni per ambienti inattivi.",
  },
  {
    version: "0.1.0",
    date: "Dic 2024",
    notes: "Lancio iniziale con policy di sicurezza e pacchetto onboarding cloud.",
  },
];

export default function Changelog() {
  return (
    <main className="page" id="main-content">
      <article className="policy-card">
        <span className="badge">Changelog</span>
        <h1>Aggiornamenti del prodotto</h1>
        <p className="muted">Evoluzione rapida, focalizzata su affidabilità e time-to-value.</p>

        <div className="timeline">
          {releases.map((release) => (
            <div key={release.version} className="timeline-item">
              <h3>Versione {release.version}</h3>
              <small>{release.date}</small>
              <p className="muted">{release.notes}</p>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}
