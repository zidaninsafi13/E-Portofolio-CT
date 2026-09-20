import type { Institution } from "../../types/portfolio";
import { Icon } from "../ui/Icon";

type InstitutionCardProps = {
  institution: Institution;
};

export function InstitutionCard({ institution }: InstitutionCardProps) {
  const typeLabel = institution.kind === "lptk" ? "LPTK" : "Tempat PPL";
  const accent = institution.kind === "lptk" ? "primary" : "accent";
  const actionLabel = institution.url ? "Lihat di Maps" : "Lihat Detail";

  return (
    <article className={`institution-card institution-card-${institution.kind}`}>
      <div className="institution-copy">
        <p className="institution-label"><span><Icon name="building" size={18} /></span>{typeLabel}</p>
        <h3>{institution.name}</h3>
        <p>{institution.description}</p>
        <p className="institution-address"><span><Icon name="location" size={17} /></span>{institution.address}</p>
        {institution.url ? (
          <a className={`institution-action institution-action-${accent}`} href={institution.url} target="_blank" rel="noreferrer">
            {actionLabel} <Icon name="arrow-right" size={18} />
          </a>
        ) : (
          <button className="institution-action institution-action-disabled" type="button" disabled>
            Detail akan ditambahkan
          </button>
        )}
      </div>
      <div className="institution-media" aria-label={`Area foto ${typeLabel}`}>
        {institution.image ? (
          <img
            src={institution.image}
            alt={institution.kind === "lptk" ? `Foto lingkungan ${typeLabel}: ${institution.name}` : `Visual sementara lingkungan ${typeLabel}`}
          />
        ) : (
          <>
            <span aria-hidden="true">[Foto]</span>
            <small>Foto akan ditambahkan</small>
          </>
        )}
      </div>
    </article>
  );
}
