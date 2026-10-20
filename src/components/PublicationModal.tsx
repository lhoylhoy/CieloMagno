import { ArrowUpRight, CalendarDays, ExternalLink, Library, Tag } from 'lucide-react'
import { apaCitation, formatAuthors } from '../lib/citations'
import type { Publication } from '../data/types'
import { CopyButton } from './CopyButton'
import { ModalShell, ModalTitle } from './ModalShell'

interface PublicationModalProps {
  publication: Publication | null
  onClose: () => void
  onOpenArchivePage: (page: number) => void
}

export function PublicationModal({
  publication,
  onClose,
  onOpenArchivePage,
}: PublicationModalProps) {
  const href = publication?.doi
    ? `https://doi.org/${publication.doi.replace(/^https?:\/\/doi\.org\//, '')}`
    : publication?.url

  return (
    <ModalShell
      open={Boolean(publication)}
      onClose={onClose}
      className="max-w-3xl"
    >
      {publication ? (
        <article className="p-5 sm:p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-2 pr-12">
            <span className="rounded-full border border-amber/30 bg-amber/10 px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-amber">
              {publication.type}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line/30 px-2.5 py-1 font-mono text-[0.6875rem] text-muted">
              <CalendarDays className="h-3 w-3" aria-hidden="true" />
              {publication.year}
            </span>
            {publication.featured ? (
              <span className="rounded-full border border-crimson/30 bg-crimson/10 px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-crimson">
                Featured
              </span>
            ) : null}
          </div>

          <ModalTitle
            
            className="display-tight mt-4 text-[clamp(1.8rem,4.2vw,3rem)] leading-[1.02] text-ink"
          >
            {publication.title}
          </ModalTitle>

          <p className="mt-4 text-[0.9375rem] font-semibold text-ink">
            {formatAuthors(publication.authors, 'display')}
          </p>
          <p className="mt-1 text-[0.875rem] italic leading-[1.65] text-muted">
            {publication.outlet}
            {publication.volume ? `, ${publication.volume}` : ''}
            {publication.issue ? `(${publication.issue})` : ''}
            {publication.pages ? `, ${publication.pages}` : ''}
          </p>
          {publication.publisher ? (
            <p className="mt-1 text-[0.75rem] text-muted">{publication.publisher}</p>
          ) : null}

          <div className="mt-6 border-t border-line/25 pt-5">
            <p className="label-mono text-muted">What it asks</p>
            <p className="mt-2 text-[0.9375rem] leading-[1.75] text-muted">
              {publication.summary}
            </p>
            <p className="mt-2 text-[0.75rem] italic leading-[1.6] text-muted/80">
              Editorial summary prepared for the Resibo Vault; not the paper&apos;s abstract.
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2">
              <Tag className="h-3.5 w-3.5 text-emerald" aria-hidden="true" />
              <p className="label-mono text-muted">Topics</p>
            </div>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {publication.topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full border border-line/30 bg-canvas px-3 py-1.5 text-[0.75rem] font-semibold text-muted"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-line/30 bg-canvas/50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="label-mono text-muted">Citation · APA 7</p>
              <CopyButton text={apaCitation(publication)} label="Copy citation" compact />
            </div>
            <p className="mt-3 break-words font-mono text-[0.75rem] leading-[1.7] text-muted">
              {apaCitation(publication)}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line/25 pt-5">
            {href ? (
              <a href={href} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                Open the source
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : (
              <span className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-line/30 px-3.5 text-[0.8125rem] text-muted">
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                No public link on the CV
              </span>
            )}
            <button
              type="button"
              onClick={() => publication && onOpenArchivePage(publication.archivePage)}
              className="btn btn-ghost btn-sm"
            >
              <Library className="h-3.5 w-3.5" aria-hidden="true" />
              Verify in CV Archive (p. {publication.archivePage})
            </button>
          </div>
        </article>
      ) : null}
    </ModalShell>
  )
}
