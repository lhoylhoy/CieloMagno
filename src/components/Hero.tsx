import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Calculator,
  Library,
  Sparkles,
} from 'lucide-react'
import { campaign, campaignRoles } from '../data/campaignData'
import { publications } from '../data/publicationsData'
import { speakingEngagements } from '../data/engagementsData'
import { useLanguage } from '../hooks/useLanguage'
import { CampaignTicker } from './CampaignTicker'
import { HeroDossier } from './HeroDossier'

interface HeroProps {
  onOpenCV: () => void
}

export function Hero({ onOpenCV }: HeroProps) {
  const { isFil } = useLanguage()
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-14 pt-32 sm:pt-36 lg:min-h-[100svh] lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-44 -top-44 h-[42rem] w-[42rem] rounded-full bg-crimson/15 blur-[130px] animate-float" />
        <div className="absolute -right-24 top-1/3 h-[34rem] w-[34rem] rounded-full bg-amber/10 blur-[120px] animate-float-delayed" />
        <div className="absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full bg-emerald/10 blur-[120px]" />
        <div className="absolute inset-0 grid-lines opacity-70" />
      </div>

      <div className="shell relative z-10">
        <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-6">
          <div className="min-w-0 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-line/25 bg-panel px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-crimson" />
                </span>
                <span className="label-mono text-ink">
                  {isFil ? 'Cielo Magno · Senador 2028' : 'Cielo Magno · Senator 2028'}
                </span>
              </span>
              <span className="label-mono hidden text-muted sm:inline">
                {isFil ? 'Ekonomista ng Bayan' : "The People's Economist"}
              </span>
            </div>

            <h1 className="mt-6 sm:mt-7" aria-label={campaign.heroLine}>
              <span className="display-tight block text-[clamp(2.3rem,7.1vw,5.4rem)] tracking-[-0.045em] text-ink">
                MAY BAGONG{' '}
              </span>
              <span className="serif-italic my-1.5 block pb-[0.12em] pr-[0.06em] text-gradient-warm text-[clamp(3.9rem,12.2vw,10rem)] leading-[0.86]">
                option{' '}
              </span>
              <span className="display-tight block text-[clamp(2.05rem,7.5vw,5.7rem)] tracking-[-0.045em] text-ink">
                NA KAYO<span className="text-crimson">.</span>
              </span>
            </h1>

            <p className="mt-7 max-w-2xl font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
              {isFil
                ? 'Ekonomista. Propesor. Dating Undersecretary.'
                : 'Economist. UP Professor. Former Finance Undersecretary.'}
              <span className="text-crimson">
                {isFil
                  ? ' May resibo. May prinsipyo. May plano.'
                  : ' May resibo. May prinsipyo. May plano.'}
              </span>
            </p>
            <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.75] text-muted sm:text-[1.125rem]">
              {isFil
                ? 'Habang pinag-aagawan ang confidential funds at singit sa budget, pamilyang Pilipino ang pumapasan sa mahal na bigas, bayarin sa ospital, at kaltas sa sahod. Sa 2028, magluklok tayo sa Senado ng bantay ng kaban ng bayan — binabasa nang malakas ang budget at ipinaglalaban ang bawat piso.'
                : 'While politicians treat the national budget like a private fund, ordinary families carry the cost in hospital bills, food prices, and taxes. 2028 is our chance to put a fearless budget watchdog in the Senate — one who reads every line out loud and fights for every peso.'}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <a href="#youth-join" className="btn btn-accent">
                {isFil ? 'Sumama sa Koalisyon' : 'Join the 2028 Coalition'}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#agenda" className="btn btn-ghost">
                {isFil ? 'Basahin ang 2028 Agenda' : 'Read the 2028 Agenda'}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#calculator" className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-2 text-sm font-bold text-ink underline decoration-amber/50 decoration-2 underline-offset-4 transition hover:text-amber hover:decoration-amber">
                <Calculator className="h-4 w-4 text-amber" aria-hidden="true" />
                {isFil ? 'Stake ng pamilya' : 'Your household stake'}
              </a>
            </div>

            <p className="mt-7 flex items-center gap-2.5 text-[0.75rem] font-semibold leading-relaxed text-muted">
              <span className="h-1 w-6 shrink-0 rounded-full bg-crimson" aria-hidden="true" />
              {campaignRoles.slice(1, 4).join(' · ')}
            </p>
          </div>

          <div className="min-w-0 lg:col-span-4">
            <HeroDossier onOpenCV={onOpenCV} />
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-line/25 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <a href="#why" className="group inline-flex min-h-[44px] items-center gap-3 text-muted transition hover:text-ink">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-line/25 transition group-hover:border-crimson group-hover:text-crimson">
              <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
            </span>
            <span className="label-mono">{isFil ? 'Bakit 2028' : 'Why 2028'}</span>
          </a>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={onOpenCV}
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-line/30 bg-panel px-3.5 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-muted transition hover:border-emerald/50 hover:text-ink"
            >
              <Library className="h-3.5 w-3.5 text-emerald" aria-hidden="true" />
              {isFil ? '19-pahina na CV' : '19-page CV'}
            </button>
            <span className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-line/30 bg-panel px-3.5 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-muted">
              <BadgeCheck className="h-3.5 w-3.5 text-emerald" aria-hidden="true" />
              25+ {isFil ? 'taon' : 'years'}
            </span>
            <span className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-line/30 bg-panel px-3.5 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-muted">
              <BadgeCheck className="h-3.5 w-3.5 text-emerald" aria-hidden="true" />
              {publications.length} {isFil ? 'papel' : 'papers'}
            </span>
            <span className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-line/30 bg-panel px-3.5 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-muted">
              <BadgeCheck className="h-3.5 w-3.5 text-emerald" aria-hidden="true" />
              {speakingEngagements.length} {isFil ? 'forum' : 'forums'}
            </span>
            <Sparkles className="hidden h-3.5 w-3.5 text-amber sm:block" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 border-y border-line/25 bg-panel py-3">
        <CampaignTicker />
      </div>

      <span className="sr-only">{campaign.battleCry}</span>
    </section>
  )
}
