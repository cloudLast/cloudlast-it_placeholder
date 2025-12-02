const roadmap = [
  {
    title: "Workspace multi-team",
    status: "In sviluppo",
    detail: "Isolamento per stream di lavoro, policy dedicate e billing condiviso trasparente.",
  },
  {
    title: "Controlli di compliance automatizzati",
    status: "Prototipo",
    detail: "Verifiche continue su CIS, GDPR e settori regolamentati con remediation guidata.",
  },
  {
    title: "Toolkit AI sicura",
    status: "Ricerca",
    detail: "Catalogo di prompt approvati, filtri DLP e audit trail per gli assistenti interni.",
  },
];

export default function Roadmap() {
  return (
    <div className="page">
      <article className="policy-card">
        <span className="badge">Roadmap</span>
        <h1>Prossime uscite</h1>
        <p className="muted">
          Linee di sviluppo prioritarie per aumentare sicurezza, velocità e controllo dei costi.
        </p>

        <div className="grid">
          {roadmap.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p className="highlight">{item.status}</p>
              <p className="muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </article>
    </div>
  );
}
