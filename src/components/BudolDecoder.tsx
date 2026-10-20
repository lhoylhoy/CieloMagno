import { useEffect, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Coins,
  Minus,
  Plus,
  RotateCcw,
  Scale,
} from 'lucide-react'
import {
  budgetPriorities,
  budgetQuizNote,
  budgetScenarios,
} from '../data/budgetData'
import { campaign } from '../data/campaignData'
import {
  budgetPriorityFilTranslations,
  budgetScenarioFilTranslations,
} from '../data/campaignTranslations'
import type { BudgetAnswer } from '../data/types'
import { useLanguage } from '../hooks/useLanguage'
import { CopyButton } from './CopyButton'
import { HouseholdCalculator } from './HouseholdCalculator'
import { TabPill } from './FilterPill'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { ShareButton } from './ShareButton'
import { cn } from '../lib/cn'

type BudolTab = 'quiz' | 'allocator' | 'stakes'

const accentText = {
  crimson: 'text-crimson',
  amber: 'text-amber',
  emerald: 'text-emerald',
  blue: 'text-blue',
} as const

const accentBar = {
  crimson: 'bg-crimson',
  amber: 'bg-amber',
  emerald: 'bg-emerald',
  blue: 'bg-blue',
} as const

const initialAllocations = Object.fromEntries(
  budgetPriorities.map((priority) => [priority.id, 0]),
) as Record<string, number>

export function BudolDecoder() {
  const { isFil } = useLanguage()
  const [tab, setTab] = useState<BudolTab>('quiz')
  const [answers, setAnswers] = useState<Record<string, BudgetAnswer | undefined>>({})
  const [allocations, setAllocations] = useState<Record<string, number>>(initialAllocations)

  // Let nav and campaign links deep-link straight into the household calculator tab.
  useEffect(() => {
    const syncTabFromHash = () => {
      if (window.location.hash !== '#calculator') return
      setTab('stakes')
      window.setTimeout(() => {
        document
          .getElementById('calculator')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    }
    syncTabFromHash()
    window.addEventListener('hashchange', syncTabFromHash)
    return () => window.removeEventListener('hashchange', syncTabFromHash)
  }, [])

  const answeredCount = budgetScenarios.filter((scenario) => answers[scenario.id]).length
  const correctCount = budgetScenarios.filter(
    (scenario) => answers[scenario.id] === scenario.answer,
  ).length
  const totalAllocated = budgetPriorities.reduce(
    (sum, priority) => sum + (allocations[priority.id] ?? 0),
    0,
  )
  const remaining = Math.max(0, 100 - totalAllocated)

  const adjust = (id: string, delta: number) => {
    setAllocations((previous) => {
      const current = previous[id] ?? 0
      const currentTotal = budgetPriorities.reduce(
        (sum, priority) => sum + (previous[priority.id] ?? 0),
        0,
      )
      if (delta > 0 && currentTotal >= 100) return previous
      const maxForPillar = current + Math.max(0, 100 - currentTotal)
      const next = Math.max(0, Math.min(maxForPillar, current + delta))
      return { ...previous, [id]: next }
    })
  }

  const reset = () => {
    setAnswers({})
    setAllocations(initialAllocations)
  }

  const prioritySummary = [
    'My 2028 budget priorities:',
    ...budgetPriorities.map(
      (priority) => `- ${priority.label}: ${allocations[priority.id] ?? 0}/100`,
    ),
    '',
    'Built with the Cielo 2028 budget decoder.',
  ].join('\n')

  const quizSummary = [
    `I scored ${correctCount}/${answeredCount} on the Cielo 2028 Resibo Quiz. ${campaign.battleCry}`,
    'Bawal ang budol sa budget. Try the Cielo 2028 resibo quiz.',
  ].join('\n')

  return (
    <section id="budol" className="relative overflow-hidden border-b border-line/25 py-20 sm:py-28">
      <div className="shell relative">
        <Tabs.Root value={tab} onValueChange={(next) => setTab(next as BudolTab)}>
          <SectionHeading
            index="05"
            eyebrow="Bawal ang budol"
            accent="emerald"
            title={
              isFil ? (
                <>
                  Ang budget ay kwenta,
                  <br />
                  hindi <span className="serif-italic text-emerald">vibe.</span>
                </>
              ) : (
                <>
                  The budget is not
                  <br />
                  a <span className="serif-italic text-emerald">vibe.</span>
                </>
              )
            }
            description={
              isFil
                ? 'Ang resibo ay hindi tsismis. Basahin ang linya, tingnan ang pinagmulan, at itanong ang nilaktawan ng balita. Pagkatapos, subukan mong ikaw mismo ang maglaan ng budget — o tingnan ang stake ng pamilya mo.'
                : 'A receipt is not a rumor. Read the line, check the source, and ask the question the headline skipped. Then try allocating the budget yourself — or see what it costs your household.'
            }
            actions={
              <Tabs.List aria-label="Budol decoder tools" className="flex flex-wrap gap-2">
                <TabPill value="quiz" count={budgetScenarios.length}>
                  Resibo quiz
                </TabPill>
                <TabPill value="allocator" count={100}>
                  Ikaw ang budget chief
                </TabPill>
                <TabPill value="stakes">
                  {isFil ? 'Bantay ng bulsa mo' : 'Your household stake'}
                </TabPill>
              </Tabs.List>
            }
          />

          <Tabs.Content value="quiz" className="outline-none">
            <div className="mt-10">
              <div className="flex flex-col gap-3 rounded-2xl border border-line/30 bg-panel p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-canvas">
                    <Scale className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink">
                      {isFil ? 'Suriin ang bawat kaso.' : 'Spot the question.'}
                    </p>
                    <p className="text-[0.8125rem] leading-[1.55] text-muted" aria-live="polite">
                      {answeredCount === 0
                        ? isFil
                          ? 'Piliin kung Red flag o With receipt ang bawat kaso.'
                          : 'Choose red flag or with receipt for each case.'
                        : isFil
                          ? `${correctCount} sa ${answeredCount} ang tama. Tuloy ang pagbusisi sa resibo.`
                          : `${correctCount} of ${answeredCount} correct. Keep reading the receipts.`}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                  {answeredCount > 0 ? (
                    <>
                      <ShareButton
                        text={quizSummary}
                        label={isFil ? 'I-share ang score' : 'Share my score'}
                        variant="accent"
                        compact
                      />
                      <a href="#youth-join" className="btn btn-ghost btn-sm">
                        Sumali
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </>
                  ) : null}
                  <button type="button" onClick={reset} className="btn btn-ghost btn-sm">
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    Reset
                  </button>
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {budgetScenarios.map((scenario, index) => {
                  const selected = answers[scenario.id]
                  const isCorrect = selected === scenario.answer
                  const filScenario = budgetScenarioFilTranslations[scenario.id]

                  return (
                    <Reveal key={scenario.id} delay={Math.min(index * 50, 200)}>
                      <article className="flex h-full flex-col rounded-2xl border border-line/30 bg-panel p-5 shadow-card sm:p-6">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                          <div className="min-w-0">
                            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                              Case {String(index + 1).padStart(2, '0')} · {scenario.period}
                            </p>
                            <h3 className="mt-2 font-display text-[1.15rem] font-bold leading-[1.3] text-ink">
                              {isFil && filScenario ? filScenario.label : scenario.label}
                            </h3>
                          </div>
                          <p className={cn('shrink-0 font-display text-2xl font-extrabold leading-none', accentText[scenario.accent])}>
                            {scenario.amount}
                          </p>
                        </div>

                        <p className="mt-3 text-[0.9375rem] leading-[1.7] text-muted">
                          {isFil && filScenario ? filScenario.context : scenario.context}
                        </p>

                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setAnswers((previous) => ({ ...previous, [scenario.id]: 'red-flag' }))}
                            aria-pressed={selected === 'red-flag'}
                            className={cn(
                              'min-h-[44px] rounded-full border px-3 text-[0.75rem] font-bold transition active:scale-[0.98]',
                              selected === 'red-flag'
                                ? 'border-crimson bg-crimson text-on-crimson shadow-[0_8px_20px_-10px_rgb(var(--crimson)/0.8)]'
                                : 'border-line/30 text-muted hover:border-crimson/50 hover:bg-crimson/5 hover:text-ink',
                            )}
                          >
                            Red flag
                          </button>
                          <button
                            type="button"
                            onClick={() => setAnswers((previous) => ({ ...previous, [scenario.id]: 'with-receipt' }))}
                            aria-pressed={selected === 'with-receipt'}
                            className={cn(
                              'min-h-[44px] rounded-full border px-3 text-[0.75rem] font-bold transition active:scale-[0.98]',
                              selected === 'with-receipt'
                                ? 'border-emerald bg-emerald text-on-emerald shadow-[0_8px_20px_-10px_rgb(var(--emerald)/0.8)]'
                                : 'border-line/30 text-muted hover:border-emerald/50 hover:bg-emerald/5 hover:text-ink',
                            )}
                          >
                            With receipt
                          </button>
                        </div>

                        {selected ? (
                          <div
                            className={cn(
                              'mt-3 rounded-xl border p-3.5',
                              isCorrect ? 'border-emerald/30 bg-emerald/5' : 'border-amber/30 bg-amber/5',
                            )}
                            aria-live="polite"
                          >
                            <p className="flex items-center gap-1.5 text-[0.8125rem] font-bold text-ink">
                              {isCorrect ? (
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald" aria-hidden="true" />
                              ) : (
                                <AlertTriangle className="h-3.5 w-3.5 text-amber" aria-hidden="true" />
                              )}
                              {isCorrect
                                ? isFil
                                  ? 'Nakita mo ang mahalagang tanong.'
                                  : 'You spotted the question.'
                                : isFil
                                  ? 'Tingnan nang mas malapitan ang resibo.'
                                  : 'Look closer at the receipt.'}
                            </p>
                            <p className="mt-1.5 text-[0.8125rem] leading-[1.65] text-muted">
                              {isFil && filScenario ? filScenario.verdict : scenario.verdict}
                            </p>
                            <a
                              href={scenario.sourceUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-1 inline-flex min-h-[44px] items-center gap-1 text-[0.75rem] font-bold text-ink transition hover:text-crimson"
                            >
                              {scenario.sourceLabel}
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                          </div>
                        ) : null}
                      </article>
                    </Reveal>
                  )
                })}
              </div>

              <p className="mt-5 max-w-3xl text-[0.75rem] leading-[1.65] text-muted/80">
                {isFil
                  ? 'Ito ay pagsasanay sa pagbabantay ng budget, hindi hatol ng hukuman. Ang mga kaso sa itaas ay mula sa pampublikong petisyon at dokumento. Basahin ang mga source.'
                  : budgetQuizNote}
              </p>
            </div>
          </Tabs.Content>

          <Tabs.Content value="allocator" className="outline-none">
            <div className="mt-10">
              <div className="on-inverse relative overflow-hidden rounded-[1.5rem] border border-line/30 bg-ink p-6 text-canvas sm:p-8">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald/20 blur-3xl" />
                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <Coins className="h-4 w-4 text-amber" aria-hidden="true" />
                      <span className="label-mono text-canvas/60">Ikaw ang budget chief</span>
                    </div>
                    <p className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">
                      {isFil
                        ? '100 chips. Limang laban. Desisyon mo.'
                        : '100 chips. Five fights. Your call.'}
                    </p>
                    <p className="mt-2 max-w-xl text-[0.9375rem] leading-[1.7] text-canvas/70">
                      {isFil
                        ? 'Bawat chip ay prayoridad. Ang layunin ay gawing malinaw ang trade-off sa pambansang budget — at maipaliwanag ito nang tapat sa publiko.'
                        : 'Every chip is a priority, not a peso amount. The point is to make the trade-off visible — and to explain it out loud.'}
                    </p>
                  </div>
                  <div className="flex items-end gap-4">
                    <div>
                      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-canvas/65">
                        {isFil ? 'Natitira' : 'Remaining'}
                      </p>
                      <p className="display-tight text-4xl text-amber" aria-live="polite">{remaining}</p>
                    </div>
                    <button type="button" onClick={reset} className="min-h-[44px] rounded-full border border-canvas/25 px-3.5 text-[0.75rem] font-bold text-canvas transition hover:bg-canvas/10">
                      <RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {budgetPriorities.map((priority) => {
                  const value = allocations[priority.id] ?? 0
                  const filPriority = budgetPriorityFilTranslations[priority.id]
                  return (
                    <div key={priority.id} className="rounded-2xl border border-line/30 bg-panel p-4 shadow-card sm:p-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="min-w-0">
                          <p className="font-display text-[0.9375rem] font-bold leading-snug text-ink">
                            {isFil && filPriority ? filPriority.label : priority.label}
                          </p>
                          <p className="mt-0.5 text-[0.75rem] leading-[1.6] text-muted">
                            {isFil && filPriority ? filPriority.description : priority.description}
                          </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => adjust(priority.id, -10)}
                            disabled={value === 0}
                            aria-label={`Remove 10 chips from ${priority.label}`}
                            className="grid h-11 w-11 place-items-center rounded-full border border-line/30 bg-panel text-ink transition hover:border-crimson/40 hover:text-crimson active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            <Minus className="h-4 w-4" aria-hidden="true" />
                          </button>
                          <span className="w-10 text-center font-mono text-base font-bold text-ink">{value}</span>
                          <button
                            type="button"
                            onClick={() => adjust(priority.id, 10)}
                            disabled={remaining === 0}
                            aria-label={`Add 10 chips to ${priority.label}`}
                            className="grid h-11 w-11 place-items-center rounded-full border border-line/30 bg-panel text-ink transition hover:border-crimson/40 hover:text-crimson active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            <Plus className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-line/20" aria-hidden="true">
                        <div className={cn('h-full rounded-full transition-all duration-500', accentBar[priority.accent])} style={{ width: `${value}%` }} />
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-2xl text-[0.75rem] leading-[1.65] text-muted/80">
                  {isFil
                    ? 'Ito ang iyong sariling prayoridad sa budget. Ang tunay na sukatan ay kung kaya bang ipagtanggol ang pinaglaanan — at kung inilalathala ba ng gobyerno ang bawat linya.'
                    : 'This is your priority mix, not an official budget. The real test is whether you can defend the trade-off — and whether the government publishes the line.'}
                </p>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <ShareButton
                    text={prioritySummary}
                    label={isFil ? 'I-share ang prayoridad ko' : 'Share my priorities'}
                    variant="accent"
                  />
                  <CopyButton
                    text={prioritySummary}
                    label={isFil ? 'Kopyahin ang prayoridad ko' : 'Copy my priorities'}
                    copiedLabel={isFil ? 'Nakopya na' : 'Priorities copied'}
                    variant="primary"
                  />
                </div>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="stakes" className="outline-none">
            <div className="mt-10">
              <HouseholdCalculator />
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  )
}
