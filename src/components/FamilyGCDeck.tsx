import { useState } from 'react'
import {
  CheckCircle2,
  ExternalLink,
  Info,
  MessagesSquare,
  Quote,
  ShieldCheck,
} from 'lucide-react'
import { familyGCCopy, familyObjections } from '../data/familyGCData'
import { useLanguage } from '../hooks/useLanguage'
import { recordAction } from '../hooks/usePledgeCounter'
import { cn } from '../lib/cn'
import { CopyButton } from './CopyButton'
import { ShareButton } from './ShareButton'

const accentText = {
  crimson: 'text-crimson',
  amber: 'text-amber',
  emerald: 'text-emerald',
  blue: 'text-blue',
} as const

const accentSoft = {
  crimson: 'border-crimson/25 bg-crimson/5',
  amber: 'border-amber/25 bg-amber/5',
  emerald: 'border-emerald/25 bg-emerald/5',
  blue: 'border-blue/25 bg-blue/5',
} as const

const accentBar = {
  crimson: 'bg-crimson text-on-crimson',
  amber: 'bg-amber text-on-amber',
  emerald: 'bg-emerald text-on-emerald',
  blue: 'bg-blue text-on-blue',
} as const

interface FamilyGCDeckProps {
  className?: string
}

export function FamilyGCDeck({ className }: FamilyGCDeckProps) {
  const { isFil } = useLanguage()
  const lang = isFil ? 'fil' : 'en'
  const copy = (key: keyof typeof familyGCCopy) => familyGCCopy[key][lang]
  const [activeId, setActiveId] = useState(familyObjections[0]?.id ?? '')
  const active = familyObjections.find((item) => item.id === activeId) ?? familyObjections[0]

  if (!active) return null

  return (
    <div
      id="family-gc"
      className={cn(
        'scroll-mt-24 rounded-[1.5rem] border border-line/30 bg-panel p-6 shadow-card sm:p-8',
        className,
      )}
      role="group"
      aria-labelledby="family-gc-title"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2">
            <MessagesSquare className="h-4 w-4 text-emerald" aria-hidden="true" />
            <span className="label-mono text-emerald">{copy('eyebrow')}</span>
          </div>
          <h3
            id="family-gc-title"
            className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl"
          >
            {copy('title')}
          </h3>
          <p className="mt-2 text-[0.9375rem] leading-[1.7] text-muted">{copy('description')}</p>
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-2 text-center">
          <div className="rounded-xl border border-line/30 bg-canvas/40 px-3 py-2">
            <p className="font-display text-lg font-extrabold text-ink">
              {familyObjections.length}
            </p>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
              {isFil ? 'objection' : 'objections'}
            </p>
          </div>
          <div className="rounded-xl border border-emerald/25 bg-emerald/5 px-3 py-2">
            <p className="font-display text-lg font-extrabold text-emerald">1</p>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
              {isFil ? 'tap na sagot' : 'tap reply'}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div
            role="tablist"
            aria-label={isFil ? 'Mga objection sa pamilya' : 'Family objections'}
            aria-orientation="vertical"
            className="space-y-2"
          >
            {familyObjections.map((objection, index) => {
              const selected = objection.id === active.id
              const focusTab = (nextIndex: number) => {
                const next =
                  familyObjections[
                    (nextIndex + familyObjections.length) % familyObjections.length
                  ]
                if (!next) return
                setActiveId(next.id)
                document.getElementById(`family-tab-${next.id}`)?.focus()
              }
              return (
                <button
                  key={objection.id}
                  type="button"
                  role="tab"
                  id={`family-tab-${objection.id}`}
                  aria-selected={selected}
                  aria-controls={`family-panel-${objection.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(objection.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                      event.preventDefault()
                      focusTab(index + 1)
                    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                      event.preventDefault()
                      focusTab(index - 1)
                    } else if (event.key === 'Home') {
                      event.preventDefault()
                      focusTab(0)
                    } else if (event.key === 'End') {
                      event.preventDefault()
                      focusTab(familyObjections.length - 1)
                    }
                  }}
                  className={cn(
                    'flex min-h-[56px] w-full items-start gap-3 rounded-xl border px-3.5 py-3 text-left transition duration-200',
                    selected
                      ? accentSoft[objection.accent]
                      : 'border-line/25 bg-canvas/40 hover:border-line/40 hover:bg-panel',
                  )}
                >
                  <span
                    className={cn(
                      'mt-0.5 font-mono text-[0.6875rem] font-bold',
                      accentText[objection.accent],
                    )}
                  >
                    {objection.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.8125rem] font-bold leading-snug text-ink">
                      {objection.question[lang]}
                    </span>
                    <span className="mt-1 block truncate font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">
                      {objection.receipts.length} {isFil ? 'resibo' : 'receipts'}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          <p className="mt-3 flex items-start gap-2 rounded-xl border border-amber/25 bg-amber/5 px-3.5 py-3 text-[0.75rem] leading-[1.6] text-muted">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber" aria-hidden="true" />
            {copy('etiquette')}
          </p>
        </div>

        <div className="lg:col-span-8">
          <div
            role="tabpanel"
            id={`family-panel-${active.id}`}
            aria-labelledby={`family-tab-${active.id}`}
            className={cn('rounded-2xl border p-4 sm:p-6', accentSoft[active.accent])}
          >
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  'grid h-10 w-10 shrink-0 place-items-center rounded-full font-mono text-[0.75rem] font-bold',
                  accentBar[active.accent],
                )}
                aria-hidden="true"
              >
                {active.number}
              </span>
              <div className="min-w-0">
                <span className="label-mono text-muted">{copy('questionLabel')}</span>
                <p className="mt-1 font-display text-[1.15rem] font-bold leading-[1.35] text-ink">
                  {active.question[lang]}
                </p>
              </div>
            </div>

            <div className="mt-4 border-t border-line/25 pt-3.5">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald" aria-hidden="true" />
                <span className="label-mono text-muted">{copy('answerLabel')}</span>
              </div>
              <p className="mt-1.5 text-[0.9375rem] leading-[1.7] text-ink/90">
                {active.shortAnswer[lang]}
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-line/30 bg-night/70 p-4">
              <div className="flex items-center gap-2">
                <Quote className="h-4 w-4 text-amber" aria-hidden="true" />
                <span className="label-mono text-amber">
                  {isFil ? 'I-paste sa GC' : 'Paste in the GC'}
                </span>
              </div>
              <p className="mt-2 whitespace-pre-line text-[0.8125rem] leading-[1.65] text-canvas/85">
                {active.gcMessage[lang]}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <CopyButton
                  text={active.gcMessage[lang]}
                  label={copy('copyCta')}
                  copiedLabel={copy('copiedCta')}
                  variant="amber"
                  compact
                  onCopied={() => recordAction('Copied a family GC reply')}
                />
                <ShareButton
                  text={active.gcMessage[lang]}
                  label={copy('shareCta')}
                  variant="ghost"
                  compact
                />
              </div>
              <p className="mt-3 flex items-start gap-1.5 text-[0.75rem] leading-[1.6] text-canvas/65">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {copy('localOnly')}
              </p>
            </div>

            <div className="mt-4">
              <span className="label-mono text-muted">{copy('receiptsLabel')}</span>
              <ul className="mt-2 space-y-1.5">
                {active.receipts.map((receipt) => (
                  <li
                    key={receipt.label.en}
                    className="rounded-lg border border-line/25 bg-panel px-3 py-2.5"
                  >
                    {receipt.url ? (
                      <a
                        href={receipt.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group inline-flex min-h-[44px] items-center gap-1.5 text-[0.8125rem] font-semibold leading-snug text-ink underline decoration-line/40 underline-offset-2 transition hover:text-crimson"
                      >
                        {receipt.label[lang]}
                        <ExternalLink
                          className="h-3.5 w-3.5 shrink-0 opacity-60"
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <span className="flex min-h-[44px] items-center text-[0.8125rem] font-semibold leading-snug text-ink">
                        {receipt.label[lang]}
                      </span>
                    )}
                    <span className="mt-0.5 block font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">
                      {receipt.source}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
