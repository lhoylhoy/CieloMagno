import { ArrowUpRight, BookOpen, Check, ExternalLink, Quote } from 'lucide-react'
import { publications } from '../data/publicationsData'
import type { Explainer } from '../data/types'
import { ModalShell, ModalTitle } from './ModalShell'
import { cn } from '../lib/cn'

interface ExplainerModalProps {
  explainer: Explainer | null
  onClose: () => void
  onOpenArchivePage: (page: number) => void
}

const accentText = {
  crimson: 'text-crimson',
  amber: 'text-amber',
  emerald: 'text-emerald',
  blue: 'text-blue',
} as const

const accentBorder = {
  crimson: 'border-crimson/30 bg-crimson/10',
  amber: 'border-amber/30 bg-amber/10',
  emerald: 'border-emerald/30 bg-emerald/10',
  blue: 'border-blue/30 bg-blue/10',
} as const

export function ExplainerModal({ explainer, onClose, onOpenArchivePage }: ExplainerModalProps) {
  const sources = explainer
    ? explainer.sourceIds
        .map((id) => publications.find((publication) => publication.id === id))
        .filter((publication): publication is NonNullable<typeof publication> => Boolean(publication))
    : []

  return (
    <ModalShell
      open={Boolean(explainer)}
      onClose={onClose}
      className="max-w-4xl"
    >
      {explainer ? (
        <article className="p-5 sm:p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3 pr-12">
            <span className={cn('label-mono', accentText[explainer.accent])}>
              Explainer {explainer.number}
            </span>
            <span className="h-px w-8 bg-line/40" aria-hidden="true" />
            <span className="label-mono text-muted">{explainer.readTime}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line/30 px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
              <BookOpen className="h-3 w-3" aria-hidden="true" />
              Plain-language
            </span>
          </div>

          <ModalTitle
            
            className="display-tight mt-4 text-[clamp(2rem,5vw,3.6rem)] leading-[0.98] text-ink"
          >
            {explainer.title}
          </ModalTitle>
          <p className="mt-2 text-[0.9375rem] font-semibold leading-[1.6] text-muted">{explainer.kicker}</p>

          <div className={cn('mt-6 rounded-2xl border p-5 sm:p-6', accentBorder[explainer.accent])}>
            <div className="flex items-center gap-2">
              <Quote className={cn('h-4 w-4', accentText[explainer.accent])} aria-hidden="true" />
              <span className="label-mono text-muted">Plain talk</span>
            </div>
            <p className="mt-3 font-serif text-xl italic leading-snug text-ink sm:text-2xl">
              {explainer.plainTalk}
            </p>
          </div>

          <div className="mt-7 space-y-4 text-[1rem] leading-[1.78] text-muted">
            {explainer.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-line/30 bg-panel p-5 shadow-card">
              <p className="label-mono text-crimson">The myth</p>
              <p className="mt-2 font-display text-[1.0625rem] font-bold leading-snug text-ink">
                {explainer.myth.myth}
              </p>
            </div>
            <div className="rounded-2xl border border-emerald/25 bg-emerald/5 p-5">
              <p className="label-mono text-emerald">The reality</p>
              <p className="mt-2 text-[0.9375rem] leading-[1.7] text-muted">{explainer.myth.reality}</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="label-mono text-muted">Why it matters</p>
            <ul className="mt-3 space-y-2.5">
              {explainer.whyItMatters.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] leading-[1.7] text-muted">
                  <Check
                    className={cn('mt-0.5 h-4 w-4 shrink-0', accentText[explainer.accent])}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-line/25 pt-6">
            <p className="label-mono text-muted">Words to keep</p>
            <dl className="mt-3 grid gap-3 sm:grid-cols-2">
              {explainer.terms.map((term) => (
                <div key={term.term} className="rounded-xl border border-line/25 bg-canvas/40 p-4">
                  <dt className="font-display text-[0.9375rem] font-bold text-ink">{term.term}</dt>
                  <dd className="mt-1 text-[0.8125rem] leading-[1.65] text-muted">{term.definition}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 rounded-2xl border border-line/30 bg-panel p-5 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="label-mono text-muted">Sources in the vault</p>
              <button
                type="button"
                onClick={() => onOpenArchivePage(explainer.archivePages[0])}
                className="inline-flex min-h-[44px] items-center gap-1.5 text-[0.8125rem] font-bold text-ink transition hover:text-crimson"
              >
                Get CV pages
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
            <ul className="mt-3 space-y-2">
              {sources.map((publication) => (
                <li key={publication.id} className="flex items-start gap-2 text-[0.8125rem] leading-[1.6]">
                  <span className="font-mono text-[0.75rem] text-amber">{publication.year}</span>
                  <span className="text-muted">
                    {publication.title}
                    <span className="text-muted/80"> — {publication.outlet}</span>
                  </span>
                </li>
              ))}
              {sources.length === 0 ? (
                <li className="text-[0.8125rem] text-muted">See the CV pages linked above.</li>
              ) : null}
            </ul>
            <p className="mt-4 flex items-start gap-2 border-t border-line/25 pt-3 text-[0.75rem] leading-[1.6] text-muted">
              <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              This explainer is prepared by the campaign youth desk, drawing on Dr.
              Magno&apos;s published research. It is not a direct quotation.
            </p>
          </div>

        </article>
      ) : null}
    </ModalShell>
  )
}
