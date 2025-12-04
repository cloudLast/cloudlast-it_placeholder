export default function Licenza() {
  return (
    <div className="page">
      <article className="policy-card">
        <span className="badge">Licenza</span>
        <h1>Termini di licenza</h1>
        <p className="muted">Piattaforma in abbonamento con componenti open source rispettate.</p>

        <h2>Diritti</h2>
        <ul className="list">
          <li>Accesso alla piattaforma per il numero di utenti previsto dal contratto.</li>
          <li>Utilizzo degli asset di documentazione interni per creare materiale aziendale.</li>
          <li>Assistenza entro gli SLA concordati.</li>
        </ul>

        <h2>Limitazioni</h2>
        <ul className="list">
          <li>Divieto di rivendere o fornire il servizio a terzi senza consenso scritto.</li>
          <li>Non è consentito eludere i controlli di sicurezza o effettuare reverse engineering.</li>
          <li>Le librerie open source mantengono i rispettivi copyright e condizioni.</li>
        </ul>
      </article>
    </div>
  );
}
