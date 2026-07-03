function CertificateCard({ certificate }) {
  return (
    <article className="card certificate-card">
      <h3>{certificate.title}</h3>
      <p>{certificate.issuer}</p>
      <span className="certificate-date">{certificate.date}</span>
    </article>
  );
}

export default CertificateCard;
