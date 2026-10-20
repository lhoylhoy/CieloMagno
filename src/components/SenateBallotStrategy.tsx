import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileSearch,
  Flame,
  Gavel,
  Info,
  Landmark,
  Lock,
  RotateCcw,
  Vote,
} from 'lucide-react'
import {
  ballotChecklist,
  ballotRealityCheck,
  ballotStrategyCopy,
  buildBallotPledge,
  oversightMechanisms,
  senateArithmetic,
  trapoVsPropesor,
} from '../data/ballotStrategyData'
import { useLanguage } from '../hooks/useLanguage'
import { getActionMilestone, usePledgeCounter } from '../hooks/usePledgeCounter'
import { cn } from '../lib/cn'
import { CopyButton } from './CopyButton'

const mechanismIcons = {
  finance: Landmark,
  bicam: FileSearch,
  floor: Gavel,
  vote: Vote,
} as const

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

const EMPTY_SLOTS = Array.from({ length: senateArithmetic.votesPerVoter - 1 }, () => '')

interface SenateBallotStrategyProps {
  className?: string
}

export function SenateBallotStrategy({ className }: SenateBallotStrategyProps) {
  const { isFil } = useLanguage()
  const [otherNames, setOtherNames] = useState<string[]>(EMPTY_SLOTS)
  const [activeMechanismId, setActiveMechanismId] = useState(oversightMechanisms[0]?.id ?? '')

  const namedCount = otherNames.filter((name) => name.trim()).length
  const pledge = buildBallotPledge(otherNames, isFil)
  const { count, celebrating, record } = usePledgeCounter()
  const milestone = getActionMilestone(count, isFil)

  const updateName = (index: number, value: string) => {
    setOtherNames((previous) => {
      const next = [...previous]
      next[index] = value
      return next
    })
  }

  return (
    <div
      id="ballot-strategy"
      className={cn(
        'scroll-mt-24 rounded-[1.5rem] border border-line/30 bg-panel p-6 sm:p-8',
        className,
      )}
      role="group"
      aria-labelledby="ballot-strategy-title"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2">
            <Vote className="h-4 w-4 text-crimson" aria-hidden="true" />
            <span className="label-mono text-crimson">
              {ballotStrategyCopy.eyebrow[isFil ? 'fil' : 'en']}
            </span>
          </div>
          <h3
            id="ballot-strategy-title"
            className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl"
          >
            {ballotStrategyCopy.title[isFil ? 'fil' : 'en']}
          </h3>
          <p className="mt-2 text-[0.9375rem] leading-[1.7] text-muted">
            {ballotStrategyCopy.description[isFil ? 'fil' : 'en']}
          </p>
        </div>

        <div className="grid shrink-0 grid-cols-3 gap-2 text-center">
          {[
            { value: senateArithmetic.seats, label: isFil ? 'puwesto' : 'seats' },
            { value: senateArithmetic.votesPerVoter, label: isFil ? 'boto mo' : 'your votes' },
            { value: senateArithmetic.watchdogSeats, label: isFil ? 'bantay' : 'watchdog' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-line/30 bg-canvas/40 px-3 py-2"
            >
              <p className="font-display text-lg font-extrabold text-ink">{item.value}</p>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="on-inverse rounded-[1.25rem] border border-amber/25 bg-ink p-4 text-canvas sm:p-5">
            <div className="flex items-center justify-between gap-2 border-b border-canvas/10 pb-3">
              <span className="label-mono text-canvas/60">
                {ballotStrategyCopy.ballotLabel[isFil ? 'fil' : 'en']}
              </span>
              <span className="rounded-full border border-amber/30 bg-amber/10 px-2 py-0.5 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-amber">
                1 / 12
              </span>
            </div>

            <ol
              className="mt-3 grid gap-1.5 sm:grid-cols-2"
              aria-label={ballotStrategyCopy.ballotLabel[isFil ? 'fil' : 'en']}
            >
              <li className="flex min-h-[44px] items-center gap-2.5 rounded-xl border border-crimson/40 bg-crimson/15 px-2.5 py-2 sm:col-span-2">
                <span className="w-5 shrink-0 font-mono text-[0.6875rem] font-bold text-amber">01</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-[0.8125rem] font-bold text-canvas">
                    Dr. Cielo Magno
                  </p>
                  <p className="text-[0.6875rem] uppercase tracking-[0.1em] text-canvas/60">
                    {ballotStrategyCopy.lockedSlot[isFil ? 'fil' : 'en']}
                  </p>
                </div>
                <Lock className="h-3.5 w-3.5 shrink-0 text-amber" aria-hidden="true" />
              </li>

              {otherNames.map((value, index) => {
                const slotNumber = index + 2
                return (
                  <li
                    key={slotNumber}
                    className="flex min-h-[44px] items-center gap-2 rounded-xl border border-canvas/15 bg-canvas/5 px-2.5 py-1 transition focus-within:border-amber/50 focus-within:bg-canvas/10 focus-within:ring-2 focus-within:ring-amber/20"
                  >
                    <span className="w-5 shrink-0 font-mono text-[0.6875rem] text-canvas/65">
                      {String(slotNumber).padStart(2, '0')}
                    </span>
                    <label htmlFor={`senate-slot-${slotNumber}`} className="sr-only">
                      {ballotStrategyCopy.openSlot[isFil ? 'fil' : 'en']} {slotNumber}
                    </label>
                    <input
                      id={`senate-slot-${slotNumber}`}
                      value={value}
                      onChange={(event) => updateName(index, event.target.value)}
                      maxLength={40}
                      placeholder={`${ballotStrategyCopy.openSlotHint[isFil ? 'fil' : 'en']} #${slotNumber}`}
                      className="min-h-[44px] min-w-0 flex-1 bg-transparent text-[0.8125rem] font-semibold text-canvas outline-none placeholder:text-canvas/65"
                    />
                  </li>
                )
              })}
            </ol>

            <div className="mt-3 flex flex-col gap-2 border-t border-canvas/10 pt-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[0.75rem] leading-relaxed text-canvas/60" aria-live="polite">
                {ballotStrategyCopy.namedProgress[isFil ? 'fil' : 'en'].replace(
                  '{named}',
                  String(namedCount),
                )}
              </p>
              <button
                type="button"
                onClick={() => setOtherNames(EMPTY_SLOTS)}
                className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 px-2 text-[0.75rem] font-bold text-canvas/70 transition hover:text-amber"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                {ballotStrategyCopy.reset[isFil ? 'fil' : 'en']}
              </button>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <CopyButton
              text={pledge}
              label={ballotStrategyCopy.copyPledge[isFil ? 'fil' : 'en']}
              copiedLabel={ballotStrategyCopy.copiedPledge[isFil ? 'fil' : 'en']}
              variant="accent"
              compact
              onCopied={() => record('Copied the 1-in-12 ballot pledge')}
            />
            <a href="#calculator" className="btn btn-ghost btn-sm">
              {isFil ? 'Tingnan ang stake ng pamilya' : 'See your household stake'}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2" aria-live="polite">
            <span
              className={cn(
                'inline-flex min-h-[36px] items-center gap-1.5 rounded-full border px-3 font-mono text-[0.75rem] uppercase tracking-[0.08em] transition',
                celebrating
                  ? 'border-amber/60 bg-amber/15 text-amber shadow-[0_0_0_4px_rgb(var(--amber)/0.14)]'
                  : 'border-line/30 bg-panel text-muted',
              )}
            >
              <Flame className="h-3.5 w-3.5" aria-hidden="true" />
              {count} {isFil ? 'aksyon sa device na ito' : 'actions on this device'}
            </span>
            <span
              className={cn(
                'inline-flex min-h-[36px] items-center gap-1.5 rounded-full border px-3 font-mono text-[0.75rem] uppercase tracking-[0.08em] transition',
                celebrating
                  ? 'border-emerald/60 bg-emerald/15 text-emerald shadow-[0_0_0_4px_rgb(var(--emerald)/0.12)]'
                  : 'border-line/30 bg-panel text-muted',
              )}
            >
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              {milestone.label}
            </span>
            {milestone.next ? (
              <span className="inline-flex min-h-[36px] items-center font-mono text-[0.75rem] uppercase tracking-[0.08em] text-muted/80">
                {isFil ? `susunod: ${milestone.next}` : `next: ${milestone.next}`}
              </span>
            ) : null}
          </div>
          <p className="mt-2 flex items-start gap-1.5 text-[0.75rem] leading-relaxed text-muted/80">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {ballotStrategyCopy.privacyNote[isFil ? 'fil' : 'en']}
          </p>
        </div>


        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-line/30 bg-canvas/30 p-4 sm:p-5">
            <span className="label-mono text-muted">
              {ballotStrategyCopy.mechanicsLabel[isFil ? 'fil' : 'en']}
            </span>
            <p className="mt-1 text-[0.8125rem] leading-[1.6] text-muted">
              {ballotStrategyCopy.mechanicsHint[isFil ? 'fil' : 'en']}
            </p>

            <div className="mt-3 space-y-2">
              {oversightMechanisms.map((mechanism) => {
                const Icon = mechanismIcons[mechanism.icon]
                const active = mechanism.id === activeMechanismId
                return (
                  <div
                    key={mechanism.id}
                    className={cn(
                      'overflow-hidden rounded-xl border transition',
                      active ? accentSoft[mechanism.accent] : 'border-line/25 bg-panel',
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveMechanismId(active ? '' : mechanism.id)}
                      aria-expanded={active}
                      aria-controls={`mechanism-${mechanism.id}`}
                      className="flex min-h-[44px] w-full items-center gap-2.5 px-3 py-2.5 text-left"
                    >
                      <span className="font-mono text-[0.6875rem] font-bold text-muted">
                        {mechanism.step}
                      </span>
                      <Icon
                        className={cn('h-4 w-4 shrink-0', accentText[mechanism.accent])}
                        aria-hidden="true"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-display text-[0.8125rem] font-bold text-ink">
                          {mechanism.title[isFil ? 'fil' : 'en']}
                        </span>
                        <span className="block truncate font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
                          {mechanism.power[isFil ? 'fil' : 'en']}
                        </span>
                      </span>
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 shrink-0 text-muted transition',
                          active && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    {active ? (
                      <p
                        id={`mechanism-${mechanism.id}`}
                        className="border-t border-line/25 px-3.5 pb-3.5 pt-2.5 text-[0.8125rem] leading-[1.65] text-muted"
                      >
                        {mechanism.detail[isFil ? 'fil' : 'en']}
                      </p>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {ballotChecklist.map((item) => (
              <div
                key={item.en}
                className="flex items-start gap-2 rounded-xl border border-line/25 bg-panel px-3 py-2.5"
              >
                <CheckCircle2
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald"
                  aria-hidden="true"
                />
                <p className="text-[0.8125rem] leading-[1.65] text-ink/90">
                  {item[isFil ? 'fil' : 'en']}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 overflow-hidden rounded-xl border border-line/25">
            <div className="on-inverse grid grid-cols-2 gap-2 bg-ink px-3 py-2 text-canvas">
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-canvas/60">
                Trapo
              </span>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-amber">
                {isFil ? 'Propesor' : 'Professor'}
              </span>
            </div>
            {trapoVsPropesor.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-2 gap-2 border-t border-line/25 px-3 py-2"
              >
                <p className="text-[0.8125rem] leading-[1.6] text-muted">
                  {item.trapo[isFil ? 'fil' : 'en']}
                </p>
                <p className="text-[0.8125rem] leading-[1.6] text-ink">
                  {item.propesor[isFil ? 'fil' : 'en']}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-3 flex items-start gap-2 rounded-xl border border-amber/25 bg-amber/5 px-3.5 py-3 text-[0.75rem] leading-[1.6] text-muted">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber" aria-hidden="true" />
            {ballotRealityCheck[isFil ? 'fil' : 'en']}
          </p>
        </div>
      </div>
    </div>
  )
}

