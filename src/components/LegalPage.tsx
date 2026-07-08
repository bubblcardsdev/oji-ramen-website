import type { LegalDoc } from "@/lib/legal-content";
import FadeIn from "@/components/FadeIn";

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
      <FadeIn>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ramen-red">
          {doc.complianceFramework}
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-wide text-ink sm:text-5xl">
          {doc.title}
        </h1>
        <p className="mt-3 text-sm text-ink/60">Effective Date: {doc.effectiveDate}</p>
      </FadeIn>

      <div className="mt-12 space-y-12">
        {doc.sections.map((section, i) => (
          <FadeIn key={section.heading} delay={Math.min(i * 0.05, 0.3)}>
            <section>
              <h2 className="font-display text-xl tracking-wide text-ink">
                {section.heading}
              </h2>

              {section.paragraphs?.map((p, pi) => (
                <p key={pi} className="mt-3 leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}

              {section.bullets && (
                <ul className="mt-4 space-y-3">
                  {section.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 leading-relaxed text-ink/75">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ramen-red" />
                      <span>
                        {b.label && <strong className="text-ink">{b.label}: </strong>}
                        {b.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="mt-5 overflow-x-auto rounded-lg border border-ink/10">
                  <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-cream-soft">
                        {section.table.headers.map((h) => (
                          <th
                            key={h}
                            className="border-b border-ink/10 px-4 py-3 font-display font-normal tracking-wide text-ink"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr key={ri} className="odd:bg-cream even:bg-cream-soft/40">
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className="border-b border-ink/5 px-4 py-3 align-top text-ink/75"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {section.note && (
                <p className="mt-4 text-sm italic text-ink/50">{section.note}</p>
              )}
            </section>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
