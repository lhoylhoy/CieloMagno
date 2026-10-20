import { useState } from 'react'
import {
  BadgeCheck,
  Copy,
  Download,
  ImageDown,
  Info,
  Loader2,
  Sparkles,
  UserRound,
} from 'lucide-react'
import {
  buildSupporterCaption,
  supporterCardCopy,
  supporterSectors,
} from '../data/campaignTranslations'
import { getImageCredit } from '../data/imageCredits'
import { useCopy } from '../hooks/useCopy'
import { useLanguage } from '../hooks/useLanguage'
import { recordAction } from '../hooks/usePledgeCounter'
import { cn } from '../lib/cn'
import {
  buildSupporterSerial,
  buildSupporterSvg,
  downloadBlob,
  renderSupporterPng,
  type SupporterCardData,
} from '../lib/supporterCard'

const portrait = getImageCredit('cielo-portrait')
const DEFAULT_PORTRAIT = '/images/cielo-magno/cielo-magno-portrait.jpg'

const accentRing = {
  crimson: 'border-crimson bg-crimson text-on-crimson',
  amber: 'border-amber bg-amber text-on-amber',
  emerald: 'border-emerald bg-emerald text-on-emerald',
  blue: 'border-blue bg-blue text-on-blue',
} as const

const accentText = {
  crimson: 'text-crimson',
  amber: 'text-amber',
  emerald: 'text-emerald',
  blue: 'text-blue',
} as const

function slugify(value: string): string {
  return (
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'supporter'
  )
}

interface SupporterCardGeneratorProps {
  className?: string
}

export function SupporterCardGenerator({ className }: SupporterCardGeneratorProps) {
  const { isFil } = useLanguage()
  const lang = isFil ? 'fil' : 'en'
  const copy = (key: keyof typeof supporterCardCopy) => supporterCardCopy[key][lang]
  const [name, setName] = useState('')
  const [sectorId, setSectorId] = useState(supporterSectors[0]?.id ?? '')
  const [rendering, setRendering] = useState<'png' | 'svg' | null>(null)
  const [error, setError] = useState('')
  const { copied, copy: copyText } = useCopy()

  const sector = supporterSectors.find((item) => item.id === sectorId) ?? supporterSectors[0]
  const displayName = name.trim() || copy('anonymous')
  const serial = buildSupporterSerial(displayName, sector.code)
  const cardData: SupporterCardData = {
    name: displayName,
    sector: sector.label[lang],
    serial,
    tagline: copy('cardTagline'),
    portraitPath: portrait?.path ?? DEFAULT_PORTRAIT,
  }
  const origin = typeof window === 'undefined' ? '' : window.location.origin
  const svg = buildSupporterSvg(cardData, origin)
  const caption = buildSupporterCaption(displayName, sector.label[lang], serial, isFil)
  const filename = `cielo-2028-${sector.code}-${slugify(displayName)}`

  const handlePng = async () => {
    setRendering('png')
    setError('')
    try {
      const blob = await renderSupporterPng(cardData)
      downloadBlob(blob, `${filename}.png`)
      recordAction('Generated a supporter pass PNG')
    } catch {
      setError(copy('pngError'))
    } finally {
      setRendering(null)
    }
  }

  const handleSvg = () => {
    setRendering('svg')
    setError('')
    try {
      const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })
      downloadBlob(blob, `${filename}.svg`)
      recordAction('Downloaded a supporter pass SVG')
    } catch {
      setError(copy('pngError'))
    } finally {
      setRendering(null)
    }
  }

  const handleCopyCaption = async () => {
    const success = await copyText(caption)
    if (success) recordAction('Copied a supporter pass caption')
  }

  return (
    <div
      id="supporter-pass"
      className={cn(
        'scroll-mt-24 rounded-[1.5rem] border border-line/30 bg-panel p-6 sm:p-8',
        className,
      )}
      role="group"
      aria-labelledby="supporter-pass-title"
    >
      <div className="max-w-2xl">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-amber" aria-hidden="true" />
          <span className="label-mono text-amber">{copy('eyebrow')}</span>
        </div>
        <h3
          id="supporter-pass-title"
          className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl"
        >
          {copy('title')}
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-[1.7] text-muted">{copy('description')}</p>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-line/30 bg-panel p-5 shadow-card">
            <label
              htmlFor="supporter-name"
              className="flex items-center gap-2 text-[0.8125rem] font-bold text-ink"
            >
              <UserRound className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
              {copy('nameLabel')}
            </label>
            <input
              id="supporter-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value.slice(0, 32))}
              placeholder={copy('namePlaceholder')}
              maxLength={32}
              autoComplete="given-name"
              className="mt-2 min-h-[44px] w-full rounded-xl border border-line/25 bg-canvas px-3.5 py-2.5 text-[0.9375rem] font-semibold text-ink placeholder:font-normal placeholder:text-muted/80 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
            />
            <p className="mt-1 text-right font-mono text-[0.6875rem] text-muted/80">
              {name.length}/32
            </p>

            <fieldset className="mt-4">
              <legend className="label-mono text-muted">{copy('sectorLabel')}</legend>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {supporterSectors.map((item) => {
                  const active = item.id === sector.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSectorId(item.id)}
                      aria-pressed={active}
                      className={cn(
                        'min-h-[44px] rounded-full border px-3 text-[0.75rem] font-bold transition',
                        active
                          ? accentRing[item.accent]
                          : 'border-line/25 bg-canvas text-ink hover:border-line/50 hover:bg-panel',
                      )}
                    >
                      {item.label[lang]}
                    </button>
                  )
                })}
              </div>
              <p className="mt-2 text-[0.75rem] leading-[1.6] text-muted">
                {sector.blurb[lang]}
              </p>
            </fieldset>

            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-line/30 bg-panel p-3">
              <BadgeCheck
                className={cn('mt-0.5 h-4 w-4 shrink-0', accentText[sector.accent])}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <span className="label-mono text-muted">{copy('serialLabel')}</span>
                <p className="truncate font-mono text-xs font-bold text-ink">{serial}</p>
                <p className="mt-0.5 text-[0.75rem] text-muted">{copy('passLabel')}</p>
              </div>
            </div>

            <p className="mt-3 flex items-start gap-2 text-[0.75rem] leading-[1.6] text-muted/80">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {copy('privacyNote')}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="label-mono text-muted">{copy('previewLabel')}</span>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted/80">
              {supporterSectors.length} {isFil ? 'sektor' : 'sectors'} · 1080 × 1350
            </span>
          </div>

          <div className="mt-2 overflow-hidden rounded-2xl border border-line/25 bg-night p-2 shadow-lift">
            <div
              className="overflow-hidden rounded-xl [&>svg]:h-auto [&>svg]:w-full"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => void handlePng()}
              disabled={rendering !== null}
              className="btn btn-accent btn-sm w-full"
            >
              {rendering === 'png' ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
              ) : (
                <ImageDown className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{rendering === 'png' ? copy('generating') : copy('downloadPng')}</span>
            </button>
            <button
              type="button"
              onClick={handleSvg}
              disabled={rendering !== null}
              className="btn btn-ghost btn-sm w-full"
            >
              {rendering === 'svg' ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
              ) : (
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{rendering === 'svg' ? copy('generating') : copy('downloadSvg')}</span>
            </button>
            <button
              type="button"
              onClick={() => void handleCopyCaption()}
              className="btn btn-ghost btn-sm w-full sm:col-span-2"
              aria-live="polite"
            >
              {copied ? (
                <BadgeCheck className="h-3.5 w-3.5 text-emerald" aria-hidden="true" />
              ) : (
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{copied ? copy('copiedCaption') : copy('copyCaption')}</span>
            </button>
          </div>

          {error ? (
            <p
              role="alert"
              className="mt-2 rounded-xl border border-crimson/30 bg-crimson/5 px-3 py-2.5 text-[0.8125rem] leading-[1.55] text-crimson"
            >
              {error}
            </p>
          ) : null}

          <p className="mt-3 text-[0.75rem] leading-[1.6] text-muted/80">
            {isFil
              ? 'Ito ay fan-made na supporter pass, hindi opisyal na balota o campaign ID. I-screen shot o i-download para sa Stories at feed.'
              : 'This is a fan-made supporter pass, not an official ballot or campaign ID. Screenshot or download it for Stories and feed.'}
          </p>
        </div>

      </div>
    </div>
  )
}
