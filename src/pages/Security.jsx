export default function Security() {
  return (
    <div className="page">
      <article className="policy-card">
        <span className="badge">Sicurezza</span>
        <h1>Sicurezza operativa</h1>
        <p className="muted">Controlli tecnici, monitoraggio costante e runbook di risposta già pronti.</p>

        <h2>Controlli principali</h2>
        <ul className="list">
          <li>Autenticazione forte, MFA e gestione delle identità con ruoli minimi.</li>
          <li>Crittografia in transito e a riposo, con rotazione periodica delle chiavi.</li>
          <li>Backup verificati e procedure di restore testate regolarmente.</li>
        </ul>

        <h2>Monitoring e incident response</h2>
        <ul className="list">
          <li>Alert sugli eventi critici, dashboard condivise e log conservati per audit.</li>
          <li>Runbook per incidenti di sicurezza con ruoli e tempi di risposta definiti.</li>
          <li>Report periodici sulle vulnerabilità e sui remediation plan.</li>
        </ul>
      </article>
    </div>
  );
}
