export default function AiPolicy() {
  return (
    <div className="page">
      <article className="policy-card">
        <span className="badge">AI Policy</span>
        <h1>Uso responsabile dell'AI</h1>
        <p className="muted">Favoriamo modelli generativi sicuri per dati, persone e risultati di business.</p>

        <h2>Principi</h2>
        <ul className="list">
          <li>Minimizzazione dei dati inviati ai modelli e anonimizzazione ove possibile.</li>
          <li>Tracciabilità delle richieste AI per audit e indagini su eventuali abusi.</li>
          <li>Valutazioni di bias e aderenza alle policy di settore prima della messa in produzione.</li>
        </ul>

      <h2>Governance</h2>
        <p className="muted">Ogni integrazione ha owner, modello di rischio, controlli e fallback documentati.</p>
      </article>
    </div>
  );
}
