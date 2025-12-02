export default function Privacy() {
  return (
    <div className="page">
      <article className="policy-card">
        <span className="badge">Privacy</span>
        <h1>Proteggiamo i tuoi dati</h1>
        <p className="muted">
          CloudLast tratta solo i dati strettamente necessari all'erogazione del servizio e
          applica misure tecniche e organizzative per mantenerli sicuri.
        </p>

        <h2>Dati trattati</h2>
        <ul className="list">
          <li>Dati di contatto (nome, email, ruolo) per comunicazioni operative.</li>
          <li>Log di accesso e diagnostica per garantire sicurezza e affidabilità.</li>
          <li>Dati tecnici sugli ambienti cloud forniti dal cliente per fornire supporto.</li>
        </ul>

        <h2>Come li utilizziamo</h2>
        <ul className="list">
          <li>Gestione dell'account, provisioning e supporto.</li>
          <li>Monitoraggio della sicurezza e prevenzione di abusi.</li>
          <li>Analisi aggregate e anonime per migliorare la piattaforma.</li>
        </ul>

        <h2>Conservazione e diritti</h2>
        <p className="muted">
          Conserviamo i dati per il tempo necessario a fornire i servizi o per obblighi di legge.
          Puoi richiedere accesso, rettifica o cancellazione scrivendoci all'indirizzo dedicato alla
          privacy.
        </p>
      </article>
    </div>
  );
}
