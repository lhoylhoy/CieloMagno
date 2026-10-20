import { useEffect, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Wrench,
} from 'lucide-react'
import { coalitionSectors, supporterSectors } from '../data/campaignTranslations'
import { explainers } from '../data/economicExplainerData'
import { familyObjections } from '../data/familyGCData'
import { ideaCards, toolkitResources } from '../data/youthResources'
import { youthActions } from '../data/youthMovementData'
import type { Explainer } from '../data/types'
import { useLanguage } from '../hooks/useLanguage'
import { ExplainerModal } from './ExplainerModal'
import { FamilyGCDeck } from './FamilyGCDeck'
import { TabPill } from './FilterPill'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SupporterCardGenerator } from './SupporterCardGenerator'
import { YouthJoinPanel } from './YouthJoinPanel'
import { cn } from '../lib/cn'

interface YouthHubProps {
  onOpenArchivePage: (page: number) => void
}

type TabId = 'explainers' | 'tools' | 'ideas' | 'join' | 'family' | 'pass'

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

const tabs: { id: TabId; labelEn: string; labelFil: string; count: number }[] = [
  { id: 'explainers', labelEn: 'Explain it', labelFil: 'Ipaliwanag', count: explainers.length },
  { id: 'tools', labelEn: 'Use it', labelFil: 'Gamitin', count: toolkitResources.length },
  { id: 'ideas', labelEn: 'Argue it', labelFil: 'Ipaglaban', count: ideaCards.length },
  { id: 'join', labelEn: 'Join it', labelFil: 'Sumali', count: youthActions.length },
  {
    id: 'family',
    labelEn: 'Family GC',
    labelFil: 'Pamilya GC',
    count: familyObjections.length,
  },
  {
    id: 'pass',
    labelEn: 'Supporter pass',
    labelFil: 'Supporter pass',
    count: supporterSectors.length,
  },
]

export function YouthHub({ onOpenArchivePage }: YouthHubProps) {
  const { isFil } = useLanguage()
  const [tab, setTab] = useState<TabId>('explainers')
  const [selectedSectorId, setSelectedSectorId] = useState<string>('all')
  const [activeExplainer, setActiveExplainer] = useState<Explainer | null>(null)

  useEffect(() => {
    const hashTabs: Record<string, TabId> = {
      '#youth-join': 'join',
      '#family-gc': 'family',
      '#supporter-pass': 'pass',
    }

    const activateHash = (hash: string) => {
      const next = hashTabs[hash]
      if (!next) return
      setTab(next)
      window.setTimeout(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    }

    const syncFromHash = () => activateHash(window.location.hash)

    syncFromHash()

    const onJoinClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const link = target?.closest(
        'a[href="#youth-join"], a[href="#family-gc"], a[href="#supporter-pass"]',
      ) as HTMLAnchorElement | null
      if (link) activateHash(link.getAttribute('href') ?? '')
    }

    window.addEventListener('hashchange', syncFromHash)
    document.addEventListener('click', onJoinClick)
    return () => {
      window.removeEventListener('hashchange', syncFromHash)
      document.removeEventListener('click', onJoinClick)
    }
  }, [])

  const openJoinWithSector = (sectorId: string) => {
    setSelectedSectorId(sectorId)
    setTab('join')
    document.getElementById('youth')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="youth" className="relative overflow-hidden border-b border-line/25 py-20 sm:py-28">
      <span id="youth-join" className="sr-only scroll-mt-24" aria-hidden="true" />
      <div className="shell relative">
        <Tabs.Root value={tab} onValueChange={(next) => setTab(next as TabId)}>
          <SectionHeading
            index="06"
            eyebrow={isFil ? 'Para sa Taumbayan at Kabataan' : 'Citizen & Youth Desk'}
            accent="amber"
            title={
              isFil ? (
                <>
                  Ekonomiks na walang
                  <br />
                  <span className="serif-italic text-amber">gatekeeping.</span>
                </>
              ) : (
                <>
                  Economics without
                  <br />
                  the <span className="serif-italic text-amber">gatekeeping.</span>
                </>
              )
            }
            description={
              isFil ? (
                <>
                  Apat na maiikling explainer, do-it-yourself budget toolkit, apat na ideyang dapat
                  pag-usapan, cheat sheet para sa family GC, downloadable supporter pass, at
                  koalisyong bukas sa lahat ng sektor — estudyante, manggagawa, health workers,
                  magsasaka, pamilya, at OFWs.
                  <span className="mt-2 block text-xs text-muted/80">
                    Inihanda ng campaign desk at nakabatay sa mga nailathalang pananaliksik ni Dr. Magno.
                  </span>
                </>
              ) : (
                <>
                  Four starter explainers, a do-it-yourself toolkit, four ideas worth arguing
                  with, a family GC cheat sheet, a downloadable supporter pass, and a nationwide
                  coalition open to students, workers, health advocates, families, and overseas
                  Filipinos.
                  <span className="mt-2 block text-xs text-muted/80">
                    Explainers are prepared by the campaign youth desk and anchored to Dr. Magno’s published research.
                  </span>
                </>
              )
            }
            actions={
              <Tabs.List aria-label="Youth desk sections" className="flex flex-wrap gap-2">
                {tabs.map((item) => (
                  <TabPill key={item.id} value={item.id} count={item.count}>
                    {isFil ? item.labelFil : item.labelEn}
                  </TabPill>
                ))}
              </Tabs.List>
            }
          />

          <div className="mt-10">
            <Tabs.Content value="explainers" className="outline-none">
              <div className="grid gap-5 lg:grid-cols-2">
                {explainers.map((explainer, index) => (
                  <Reveal key={explainer.id} delay={index * 80}>
                    <button
                      type="button"
                      onClick={() => setActiveExplainer(explainer)}
                      className={cn(
                        'group relative flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] border bg-panel p-6 text-left transition hover:-translate-y-1 hover:shadow-lift sm:p-8',
                        accentSoft[explainer.accent],
                      )}
                    >
                      <div className="relative flex items-center justify-between gap-3">
                        <span className={cn('label-mono', accentText[explainer.accent])}>
                          Explainer {explainer.number}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                          {explainer.readTime}
                        </span>
                      </div>
                      <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                        {explainer.kicker}
                      </p>
                      <h3 className="relative mt-2 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                        {explainer.title}
                      </h3>
                      <p className="relative mt-4 line-clamp-4 text-[0.9375rem] leading-[1.7] text-muted">
                        {explainer.plainTalk}
                      </p>
                      <span className="relative mt-6 inline-flex items-center gap-2 text-xs font-bold text-ink">
                        {isFil ? 'Buksan ang explainer' : 'Open the explainer'}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  </Reveal>
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content value="tools" className="outline-none">
              <div className="grid gap-4 md:grid-cols-2">
                {toolkitResources.map((resource, index) => (
                  <Reveal key={resource.id} delay={index * 60}>
                    <div
                      className={cn(
                        'flex h-full flex-col rounded-2xl border bg-panel p-5 sm:p-6',
                        accentSoft[resource.accent],
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={cn(
                            'inline-flex items-center gap-1.5 label-mono',
                            accentText[resource.accent],
                          )}
                        >
                          <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
                          Toolkit
                        </span>
                        <span className="font-mono text-[0.6875rem] text-muted">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold leading-tight text-ink">
                        {resource.title}
                      </h3>
                      <p className="mt-2 text-[0.9375rem] leading-[1.7] text-muted">
                        {resource.description}
                      </p>

                      {resource.steps ? (
                        <ol className="mt-4 space-y-2">
                          {resource.steps.map((step, stepIndex) => (
                            <li key={step} className="flex items-start gap-2.5 text-[0.8125rem] leading-[1.6] text-muted">
                              <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink/10 font-mono text-[0.6875rem] text-ink">
                                {stepIndex + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      ) : null}

                      {resource.links ? (
                        <ul className="mt-4 grid gap-1.5">
                          {resource.links.map((link) => (
                            <li key={link.href}>
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex min-h-[44px] items-center gap-1.5 text-[0.8125rem] font-semibold text-ink transition hover:text-crimson"
                              >
                                {link.label}
                                <ExternalLink
                                  className="h-3.5 w-3.5 text-muted transition group-hover:text-crimson"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </Reveal>
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content value="ideas" className="outline-none">
              <div className="grid gap-4 md:grid-cols-2">
                {ideaCards.map((idea, index) => (
                  <Reveal key={idea.id} delay={index * 60}>
                    <article
                      className={cn(
                        'flex h-full flex-col rounded-2xl border p-5 sm:p-6',
                        accentSoft[idea.accent],
                      )}
                    >
                      <div className="flex items-start justify-between">
                        <span
                          className={cn(
                            'font-display text-5xl font-extrabold leading-none',
                            accentText[idea.accent],
                          )}
                        >
                          0{index + 1}
                        </span>
                        <Lightbulb
                          className={cn('h-5 w-5', accentText[idea.accent])}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold leading-tight text-ink">
                        {idea.title}
                      </h3>
                      <p className="mt-3 text-[0.9375rem] leading-[1.7] text-muted">{idea.idea}</p>
                      <p className="mt-4 text-[0.75rem] leading-[1.6] text-muted/80">
                        {idea.context}
                      </p>
                      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line/25 pt-4">
                        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
                          {idea.sourceIds.length} sources · CV p.{idea.archivePages[0]}
                        </span>
                        <button
                          type="button"
                          onClick={() => onOpenArchivePage(idea.archivePages[0])}
                          className="inline-flex min-h-[44px] items-center gap-1 text-[0.75rem] font-bold text-ink transition hover:text-crimson"
                        >
                          {isFil ? 'Tingnan sa CV' : 'Get CV page'}
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content value="join" className="outline-none">
              <YouthJoinPanel key={selectedSectorId} initialSectorId={selectedSectorId} />
            </Tabs.Content>

            <Tabs.Content value="family" className="outline-none">
              <div className="mt-10">
                <FamilyGCDeck />
              </div>
            </Tabs.Content>

            <Tabs.Content value="pass" className="outline-none">
              <div className="mt-10">
                <SupporterCardGenerator />
              </div>
            </Tabs.Content>
          </div>
        </Tabs.Root>

        {tab !== 'join' ? (
          <Reveal className="mt-10">
            <div className="rounded-[1.5rem] border border-crimson/25 bg-crimson/5 p-6 sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2">
                    <HeartHandshake className="h-4 w-4 text-crimson" aria-hidden="true" />
                    <span className="label-mono text-crimson">
                      {isFil ? 'Sumali sa Koalisyon · 2028' : 'Join the 2028 Coalition'}
                    </span>
                  </div>
                  <p className="mt-2 font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
                    {isFil
                      ? 'Hindi lang para sa estudyante — laban ito ng bawat pamilya, manggagawa, at komunidad.'
                      : 'Not just for campuses — this movement is built for every family, worker, and community.'}
                  </p>
                  <p className="mt-1.5 text-[0.9375rem] leading-[1.7] text-muted">
                    {isFil
                      ? 'Piliin ang iyong sektor para makuha ang campaign kit, sticker pack, at mensaheng pwedeng i-share.'
                      : 'Select your sector below to open the volunteer kit, printable stickers, and shareable receipts.'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openJoinWithSector('all')}
                  className="btn btn-accent shrink-0 self-start lg:self-auto"
                >
                  {isFil ? 'Sumali sa Movement' : 'Join the Movement'}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-line/25 pt-4">
                {coalitionSectors.map((sector) => (
                  <button
                    key={sector.id}
                    type="button"
                    onClick={() => openJoinWithSector(sector.id)}
                    className="min-h-[44px] rounded-full border border-line/25 bg-canvas/80 px-3.5 text-[0.8125rem] font-semibold text-ink transition hover:border-crimson/50 hover:bg-crimson hover:text-on-crimson"
                  >
                    {isFil ? sector.label.fil : sector.label.en} →
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        ) : null}

        <Reveal className="mt-6">
          <div className="on-inverse relative overflow-hidden rounded-[1.5rem] border border-line/30 bg-ink p-6 text-canvas sm:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber/20 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-amber" aria-hidden="true" />
                  <span className="label-mono text-canvas/60">
                    {isFil ? 'Para sa mga klase, unyon at komunidad' : 'For classrooms, unions & communities'}
                  </span>
                </div>
                <p className="mt-3 font-display text-2xl font-bold leading-snug sm:text-3xl">
                  {isFil
                    ? 'Gusto mo bang ipaliwanag ito nang harapan?'
                    : 'Want this explained in person?'}
                </p>
                <p className="mt-2 text-[0.9375rem] leading-[1.7] text-canvas/75">
                  {isFil
                    ? 'Nakikipag-usap si Dr. Magno sa mga estudyante, health workers, civil society groups, at komunidad tungkol sa budget, pagmimina, at open government.'
                    : 'Dr. Magno speaks with students, civil society groups, and public-sector teams about budgets, mining money, and open government.'}
                </p>
              </div>
              <a href="#contact" className="btn btn-amber shrink-0">
                {isFil ? 'Imbitahan sa talakayan' : 'Invite her to speak'}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <ExplainerModal
        explainer={activeExplainer}
        onClose={() => setActiveExplainer(null)}
        onOpenArchivePage={onOpenArchivePage}
      />
    </section>
  )
}
