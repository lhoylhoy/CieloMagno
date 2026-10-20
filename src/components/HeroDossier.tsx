import { useState } from 'react'
import { ArrowUpRight, Calculator, CheckCircle2, Download, ExternalLink, MapPin } from 'lucide-react'
import { getImageCredit } from '../data/imageCredits'
import { profile } from '../data/profileData'
import { useLanguage } from '../hooks/useLanguage'
import { StampBadge } from './StampBadge'
import { cn } from '../lib/cn'

interface HeroDossierProps {
  onOpenCV: () => void
  className?: string
}

const voterPitch = {
  en: [
    {
      title: 'Supreme Court Petitioner',
      detail: 'Challenged the ₱89.9B PhilHealth transfer, OVP confidential funds, & ₱26B AKAP.',
    },
    {
      title: 'Resigned on Principle',
      detail: 'Stepped down as Finance Undersecretary in 2023 rather than stay silent on rice prices.',
    },
    {
      title: '25+ Years in Public Finance',
      detail: 'UP School of Economics Professor, Bantay Kita President, & OGP Global Co-Chair.',
    },
  ],
  fil: [
    {
      title: 'Nag-petisyon sa Supreme Court',
      detail: 'Kinuwestiyon ang ₱89.9B PhilHealth transfer, OVP secret funds, at ₱26B AKAP.',
    },
    {
      title: 'Nag-resign dahil sa Prinsipyo',
      detail: 'Bumaba bilang Finance Undersecretary noong 2023 kaysa manahimik sa isyu ng bigas.',
    },
    {
      title: '25+ Taon sa Public Finance',
      detail: 'Propesor sa UP School of Economics, Pangulo ng Bantay Kita, at OGP Global Co-Chair.',
    },
  ],
}

export function HeroDossier({ onOpenCV, className }: HeroDossierProps) {
  const { isFil } = useLanguage()
  const currentRoles = profile.currentRoles.slice(0, 4)
  const portrait = getImageCredit('cielo-portrait')
  const [portraitFailed, setPortraitFailed] = useState(false)
  const [view, setView] = useState<'pitch' | 'roles'>('pitch')

  const pitchItems = isFil ? voterPitch.fil : voterPitch.en

  return (
    <aside className={cn('relative mx-auto w-full max-w-md lg:mx-0', className)}>
      <div className="card grain-card relative rounded-[1.75rem] bg-surface p-5 sm:p-6">
        <div className="flex items-center justify-between border-b border-line/25 pb-4">
          <span className="label-mono text-muted">
            {isFil ? 'Dossier ng Kandidato' : 'Candidate dossier'}
          </span>
          <span className="label-mono text-amber">2026 · SENATOR 2028</span>
        </div>

        <figure className="relative -mx-5 mt-5 overflow-hidden border-y border-line/30 sm:-mx-6">
          {portrait && !portraitFailed ? (
            <img
              src={portrait.path}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
              decoding="async"
              onError={() => setPortraitFailed(true)}
            />
          ) : (
            <div className="grid aspect-[4/3] w-full place-items-center bg-ink text-canvas">
              <span className="font-display text-5xl font-extrabold tracking-tighter">CM</span>
            </div>
          )}
          <span
            className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-white/15"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night via-night/45 to-transparent"
            aria-hidden="true"
          />
          <figcaption className="pointer-events-none absolute inset-x-4 bottom-3.5 z-20 sm:inset-x-5">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-[#F6F3ED]/80">
              {isFil ? 'Opisyal na larawan · 2026' : 'Official portrait · 2026'}
            </p>
            <p className="mt-1 font-display text-xl font-bold leading-tight text-[#F6F3ED] drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
              Cielo Magno, PhD
            </p>
            <p className="mt-1 text-[0.75rem] leading-snug text-[#F6F3ED]/85">
              {isFil
                ? 'Ekonomista at Propesor · Unibersidad ng Pilipinas'
                : 'Economist & professor · University of the Philippines'}
            </p>
          </figcaption>
        </figure>

        <div className="mt-5 border-t border-line/25 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="label-mono text-crimson">
              {view === 'pitch'
                ? isFil
                  ? 'Bakit Siya Tumatakbo'
                  : 'Why She’s Running'
                : isFil
                  ? 'Kasalukuyang Tungkulin'
                  : 'Currently'}
            </p>
            <div
              className="inline-flex rounded-full border border-line/30 bg-canvas/60 p-1 shadow-[inset_0_1px_2px_rgb(var(--shadow-color)/0.18)]"
              role="group"
              aria-label="Dossier details switcher"
            >
              <button
                type="button"
                onClick={() => setView('pitch')}
                aria-pressed={view === 'pitch'}
                className={cn(
                  'min-h-[44px] rounded-full px-3.5 font-mono text-[0.75rem] uppercase tracking-[0.06em] transition duration-200',
                  view === 'pitch'
                    ? 'bg-crimson font-bold text-on-crimson shadow-[0_4px_12px_-4px_rgb(var(--crimson)/0.9)]'
                    : 'text-muted hover:bg-line/10 hover:text-ink',
                )}
              >
                {isFil ? 'Resibo' : 'Track Record'}
              </button>
              <button
                type="button"
                onClick={() => setView('roles')}
                aria-pressed={view === 'roles'}
                className={cn(
                  'min-h-[44px] rounded-full px-3.5 font-mono text-[0.75rem] uppercase tracking-[0.06em] transition duration-200',
                  view === 'roles'
                    ? 'bg-amber font-bold text-on-amber shadow-[0_4px_12px_-4px_rgb(var(--amber)/0.9)]'
                    : 'text-muted hover:bg-line/10 hover:text-ink',
                )}
              >
                {isFil ? 'Tungkulin' : 'Roles'}
              </button>
            </div>
          </div>

          {view === 'pitch' ? (
            <ul className="mt-3.5 space-y-3">
              {pitchItems.map((item) => (
                <li key={item.title} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-[0.8125rem] font-semibold leading-snug text-ink">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[0.75rem] leading-snug text-muted">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-3.5 space-y-3">
              {currentRoles.map((role) => (
                <li key={`${role.role}-${role.org}`} className="flex items-start gap-2.5">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  <div className="min-w-0">
                    <p className="text-[0.8125rem] font-semibold leading-snug text-ink">
                      {role.role}
                    </p>
                    <p className="mt-0.5 text-[0.75rem] leading-snug text-muted">{role.org}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line/25 pt-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[0.75rem] text-muted">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-emerald" aria-hidden="true" />
              <span>{profile.location}</span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0">
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center gap-1 text-[0.75rem] font-semibold text-ink transition hover:text-crimson"
              >
                {isFil ? 'Opisyal na Social Channels' : 'Official Social Channels'}
                <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
              </a>
              <span className="text-line/40" aria-hidden="true">
                ·
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-[44px] items-center gap-1 truncate text-[0.75rem] text-muted transition hover:text-ink"
              >
                {profile.email}
              </a>
            </div>
          </div>
          <StampBadge className="hidden h-16 w-16 shrink-0 rotate-[-6deg] border-2 sm:grid" />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <a href="#youth-join" className="btn btn-accent w-full">
            {isFil ? 'Sumali sa Movement' : 'Join the Movement'}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={onOpenCV}
            className="btn btn-ghost w-full"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {isFil ? '19-Pahina na CV' : 'Download the CV'}
          </button>
          <a href="#calculator" className="btn btn-ghost w-full sm:col-span-2">
            <Calculator className="h-4 w-4 text-amber" aria-hidden="true" />
            {isFil ? 'Tingnan ang stake ng pamilya' : 'See your household stake'}
          </a>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-4 rotate-[-4deg] rounded-full border border-amber/40 bg-amber px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-on-amber shadow-stamp">
        {isFil ? '19 pahina ng resibo' : '19 pages of receipts'}
      </div>
    </aside>
  )
}
