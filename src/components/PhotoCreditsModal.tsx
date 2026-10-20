import { Camera, Download, ExternalLink, ShieldCheck } from 'lucide-react'
import { imageCreditGroups, imageCredits } from '../data/imageCredits'
import { linktreeUrl } from '../data/socialAccountsData'
import { cn } from '../lib/cn'
import { ModalShell, ModalTitle } from './ModalShell'

interface PhotoCreditsModalProps {
  open: boolean
  onClose: () => void
}

export function PhotoCreditsModal({ open, onClose }: PhotoCreditsModalProps) {
  return (
    <ModalShell
      open={open}
      onClose={onClose}
      className="max-w-4xl"
    >
      <article className="p-5 sm:p-8 md:p-10">
        <div className="flex flex-wrap items-center gap-3 pr-12">
          <span className="label-mono text-emerald">Visual receipts</span>
          <span className="h-px w-8 bg-line/40" aria-hidden="true" />
          <span className="label-mono text-muted">Licenses &amp; attribution</span>
        </div>

        <ModalTitle
          
          className="display-tight mt-4 text-[clamp(2rem,5vw,3.4rem)] leading-[0.98] text-ink"
        >
          Every photo has a <span className="serif-italic text-emerald">receipt.</span>
        </ModalTitle>
        <p className="mt-4 max-w-2xl text-[0.9375rem] leading-[1.7] text-muted">
          Every photograph on this site has a traceable source. Context photography is
          public domain or openly licensed; the candidate portrait is official campaign
          media. Each entry links to its source and, where applicable, its license.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {Array.from(new Set(imageCredits.map((credit) => credit.license))).map((license) => (
            <span
              key={license}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em]',
                license === 'Campaign media'
                  ? 'border-amber/30 bg-amber/5 text-amber'
                  : 'border-line/30 bg-panel text-muted',
              )}
            >
              {license === 'Campaign media' ? (
                <Camera className="h-3 w-3 text-amber" aria-hidden="true" />
              ) : (
                <ShieldCheck className="h-3 w-3 text-emerald" aria-hidden="true" />
              )}
              {license}
            </span>
          ))}
        </div>

        <p className="mt-5 flex items-start gap-2 rounded-xl border border-emerald/25 bg-emerald/5 p-3.5 text-[0.8125rem] leading-[1.65] text-muted">
          <Camera className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald" aria-hidden="true" />
          The candidate portrait is Dr. Magno’s official profile photo from her verified
          profile, published by the Cielo Magno for Senator 2028 campaign. It is official
          campaign media, while context photography remains under its respective open
          licenses.
        </p>

        {imageCreditGroups.map((group) => {
          const credits = imageCredits.filter((credit) => credit.category === group.id)

          return (
            <section key={group.id} className="mt-8">
              <div className="flex items-center gap-3">
                <span className="label-mono text-ink">{group.label}</span>
                <span className="h-px flex-1 bg-line/25" aria-hidden="true" />
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
                  {credits.length} {credits.length === 1 ? 'file' : 'files'}
                </span>
              </div>
              <p className="mt-2 text-[0.8125rem] leading-[1.6] text-muted">{group.description}</p>

              <ul className="mt-4 space-y-3">
                {credits.map((credit) => (
                  <li
                    key={credit.id}
                    className="rounded-2xl border border-line/25 bg-panel p-4 shadow-card"
                  >
                    <div className="flex gap-4">
                      <a
                        href={credit.path}
                        target="_blank"
                        rel="noreferrer"
                        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-line/30 bg-canvas"
                        aria-label={`View ${credit.title} at full size`}
                      >
                        <img
                          src={credit.thumbPath ?? credit.path}
                          alt={credit.alt}
                          width={80}
                          height={80}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </a>

                      <div className="min-w-0 flex-1">
                        <p className="text-[0.9375rem] font-bold leading-snug text-ink">{credit.title}</p>
                        <p className="mt-1 text-[0.8125rem] text-muted">{credit.photographer}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.1em]">
                          <a
                            href={credit.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-[44px] items-center gap-1 text-ink transition hover:text-crimson"
                          >
                            {credit.sourceName}
                            <ExternalLink className="h-3 w-3" aria-hidden="true" />
                          </a>
                          {credit.licenseUrl ? (
                            <a
                              href={credit.licenseUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex min-h-[44px] items-center gap-1 text-emerald transition hover:text-ink"
                            >
                              <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                              {credit.license}
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-amber">
                              <Camera className="h-3 w-3" aria-hidden="true" />
                              {credit.license}
                            </span>
                          )}
                        </div>
                        {credit.changes ? (
                          <p className="mt-2 text-[0.75rem] leading-[1.6] text-muted/80">
                            {credit.changes}
                          </p>
                        ) : null}
                        {credit.rightsNote ? (
                          <p className="mt-2 rounded-lg border border-amber/20 bg-amber/5 px-3 py-2.5 text-[0.75rem] leading-[1.6] text-muted">
                            {credit.rightsNote}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}

        <div className="mt-8 rounded-2xl border border-amber/25 bg-amber/5 p-5">
          <p className="label-mono text-amber">Rights, stated plainly</p>
          <p className="mt-2 text-[0.9375rem] leading-[1.7] text-muted">
            CC BY-SA 4.0 and CC BY-SA 3.0 context photos require attribution and
            share-alike. The official candidate portrait is campaign media and is not
            covered by those licenses. Metadata was stripped from the web files; the
            pixels were only resized or cropped as noted above.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="/images/cielo-magno/cielo-magno-full.jpg"
              download="cielo-magno-official-portrait-863x863.jpg"
              className="btn btn-ghost btn-sm"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Full-resolution official portrait
            </a>
            <a
              href={linktreeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-sm"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Official profile &amp; links
            </a>
            <a
              href="https://commons.wikimedia.org/wiki/Category:Cielo_Magno"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-sm"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Wikimedia context photos
            </a>
          </div>
        </div>
      </article>
    </ModalShell>
  )
}
