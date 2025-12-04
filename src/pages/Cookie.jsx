export default function Cookie() {
  return (
    <div className="page">
      <article className="policy-card">
        <span className="badge">Cookie</span>
        <h1>Uso limitato di cookie</h1>
        <p className="muted">Solo cookie tecnici e analytics anonimizzati per stabilità e miglioramento.</p>

        <h2>Tipologie</h2>
        <ul className="list">
          <li>Cookie di sessione per mantenere la navigazione e le preferenze di lingua.</li>
          <li>Cookie di sicurezza per proteggere le sessioni da accessi non autorizzati.</li>
          <li>Metriche aggregate senza identificare singoli utenti.</li>
        </ul>

        <h2>Scelte dell'utente</h2>
        <p className="muted">
          Puoi disattivare i cookie non essenziali dal browser. I cookie tecnici rimangono necessari
          per erogare il servizio.
        </p>
      </article>
    </div>
  );
}
