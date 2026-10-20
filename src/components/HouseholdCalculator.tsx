import { useState, type CSSProperties, type ReactNode } from 'react'
import {
  Calculator,
  Coins,
  HeartPulse,
  Info,
  ShieldCheck,
  ShoppingBasket,
  Users,
  Wallet,
} from 'lucide-react'
import {
  buildHouseholdSummary,
  calculatorAssumptions,
  calculatorCopy,
  calculatorMethodology,
  computeHouseholdStakes,
  formatPercent,
  formatPeso,
  formatPesoCompact,
  householdPresets,
  unitEconomics,
} from '../data/calculatorData'
import { useLanguage } from '../hooks/useLanguage'
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
  crimson: 'bg-crimson',
  amber: 'bg-amber',
  emerald: 'bg-emerald',
  blue: 'bg-blue',
} as const

interface StakesCardProps {
  icon: ReactNode
  label: string
  value: string
  unit: string
  children: ReactNode
  accent: keyof typeof accentText
}

function StakesCard({ icon, label, value, unit, children, accent }: StakesCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border bg-panel p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-6',
        accentSoft[accent],
      )}
    >
      <div className="flex items-center gap-2">
        <span className={cn('shrink-0', accentText[accent])}>{icon}</span>
        <span className="label-mono text-muted">{label}</span>
      </div>
      <p className="mt-3 font-display text-[clamp(1.6rem,3.4vw,2.1rem)] font-extrabold leading-none tracking-tight text-ink">
        {value}
      </p>
      <p className="mt-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
        {unit}
      </p>
      <div className="mt-4 border-t border-line/30 pt-3.5 text-[0.8125rem] leading-[1.65] text-muted">
        {children}
      </div>
    </div>
  )
}

interface HouseholdCalculatorProps {
  className?: string
}

export function HouseholdCalculator({ className }: HouseholdCalculatorProps) {
  const { isFil } = useLanguage()
  const [monthlyBudget, setMonthlyBudget] = useState(35_000)
  const [householdSize, setHouseholdSize] = useState(4)

  const stakes = computeHouseholdStakes(monthlyBudget, householdSize)
  const summary = buildHouseholdSummary(stakes, isFil)
  const activePreset = householdPresets.find(
    (preset) =>
      preset.monthlyBudget === monthlyBudget && preset.householdSize === householdSize,
  )

  const budgetProgress =
    ((monthlyBudget - calculatorAssumptions.minBudget) /
      (calculatorAssumptions.maxBudget - calculatorAssumptions.minBudget)) *
    100
  const rangeStyle = { '--range-progress': `${budgetProgress}%` } as CSSProperties
  const copy = (key: keyof typeof calculatorCopy) => calculatorCopy[key][isFil ? 'fil' : 'en']

  const adjustHouseholdSize = (delta: number) => {
    setHouseholdSize((current) =>
      Math.min(
        calculatorAssumptions.maxHouseholdSize,
        Math.max(calculatorAssumptions.minHouseholdSize, current + delta),
      ),
    )
  }

  return (
    <div id="calculator" className={cn('scroll-mt-24', className)}>
      <div className="on-inverse relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink p-6 text-canvas shadow-lift sm:p-8">
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-amber/20 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden="true" />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <Wallet className="h-4 w-4 text-amber" aria-hidden="true" />
            <span className="label-mono text-amber">{copy('eyebrow')}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-emerald">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" aria-hidden="true" />
              {isFil ? 'Live na estimate' : 'Live estimate'}
            </span>
          </div>
          <p className="mt-3 max-w-3xl font-display text-[clamp(1.5rem,3.4vw,2.1rem)] font-bold leading-tight">
            {copy('title')}
          </p>
          <p className="mt-2 max-w-3xl text-[0.9375rem] leading-[1.7] text-canvas/70">
            {copy('description')}
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-3">
            <div className="rounded-xl border border-canvas/15 bg-canvas/5 px-4 py-3">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-canvas/65">
                {copy('monthlyBudget')}
              </p>
              <p className="mt-1 font-display text-[1.35rem] font-extrabold text-amber" aria-live="polite">
                {formatPeso(stakes.monthlyBudget)}
              </p>
            </div>
            <div className="rounded-xl border border-canvas/15 bg-canvas/5 px-4 py-3">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-canvas/65">
                {copy('householdSize')}
              </p>
              <p className="mt-1 font-display text-[1.35rem] font-extrabold text-canvas">
                {stakes.householdSize}
              </p>
            </div>
            <div className="rounded-xl border border-canvas/15 bg-canvas/5 px-4 py-3">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-canvas/65">
                {copy('taxesTitle')}
              </p>
              <p className="mt-1 font-display text-[1.35rem] font-extrabold text-canvas">
                {formatPeso(stakes.totalTaxMonthly)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-line/30 bg-panel p-5 shadow-card sm:p-6">
            <div className="flex items-center gap-2">
              <Calculator className="h-4 w-4 text-crimson" aria-hidden="true" />
              <span className="label-mono text-muted">{copy('presetsLabel')}</span>
            </div>

            <div className="mt-3 space-y-2">
              {householdPresets.map((preset) => {
                const active = activePreset?.id === preset.id
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => {
                      setMonthlyBudget(preset.monthlyBudget)
                      setHouseholdSize(preset.householdSize)
                    }}
                    aria-pressed={active}
                    className={cn(
                      'min-h-[44px] w-full rounded-xl border px-3.5 py-2.5 text-left transition duration-200 active:scale-[0.99]',
                      active
                        ? 'border-crimson bg-crimson text-on-crimson shadow-[0_8px_20px_-8px_rgb(var(--crimson)/0.7)]'
                        : 'border-line/25 bg-canvas/50 text-ink hover:border-crimson/35 hover:bg-panel',
                    )}
                  >
                    <span className="block font-display text-[0.9375rem] font-bold leading-tight">
                      {preset.label[isFil ? 'fil' : 'en']}
                    </span>
                    <span
                      className={cn(
                        'mt-0.5 block font-mono text-[0.6875rem] uppercase tracking-[0.08em]',
                        active ? 'text-on-crimson' : 'text-muted',
                      )}
                    >
                      {preset.detail[isFil ? 'fil' : 'en']}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="mt-5 border-t border-line/25 pt-4">
              <div className="flex items-baseline justify-between gap-2">
                <label htmlFor="household-budget" className="text-xs font-bold text-ink">
                  {copy('monthlyBudget')}
                </label>
                <span className="font-mono text-xs font-bold text-amber">
                  {formatPeso(monthlyBudget)}
                </span>
              </div>
              <input
                id="household-budget"
                type="range"
                min={calculatorAssumptions.minBudget}
                max={calculatorAssumptions.maxBudget}
                step={calculatorAssumptions.budgetStep}
                value={monthlyBudget}
                onChange={(event) => setMonthlyBudget(Number(event.target.value))}
                className="range-stakes mt-3"
                style={rangeStyle}
                aria-valuetext={formatPeso(monthlyBudget)}
              />
              <div className="mt-1.5 flex justify-between font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted/80">
                <span>{formatPesoCompact(calculatorAssumptions.minBudget)}</span>
                <span>{formatPesoCompact(calculatorAssumptions.maxBudget)}</span>
              </div>
            </div>

            <div className="mt-5 border-t border-line/25 pt-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="flex items-center gap-1.5 text-xs font-bold text-ink">
                    <Users className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
                    {copy('householdSize')}
                  </p>
                  <p className="mt-0.5 text-[0.75rem] leading-[1.55] text-muted">
                    {isFil ? 'Para sa rice at food estimate' : 'For the rice and food estimate'}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => adjustHouseholdSize(-1)}
                    disabled={householdSize <= calculatorAssumptions.minHouseholdSize}
                    aria-label={isFil ? 'Bawasan ang katao' : 'Remove one person'}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line/30 bg-panel font-display text-lg font-bold text-ink transition hover:border-crimson/40 hover:text-crimson active:scale-95 disabled:opacity-30 disabled:hover:border-line/30 disabled:hover:text-ink"
                  >
                    −
                  </button>
                  <span
                    className="w-9 text-center font-mono text-base font-bold text-ink"
                    aria-live="polite"
                  >
                    {householdSize}
                  </span>
                  <button
                    type="button"
                    onClick={() => adjustHouseholdSize(1)}
                    disabled={householdSize >= calculatorAssumptions.maxHouseholdSize}
                    aria-label={isFil ? 'Dagdagan ang katao' : 'Add one person'}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line/30 bg-panel font-display text-lg font-bold text-ink transition hover:border-crimson/40 hover:text-crimson active:scale-95 disabled:opacity-30 disabled:hover:border-line/30 disabled:hover:text-ink"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-4 flex items-start gap-1.5 text-[0.75rem] leading-[1.6] text-muted/80">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {copy('privacyNote')}
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="grid gap-3 sm:grid-cols-2">
            <StakesCard
              icon={<Coins className="h-4 w-4" aria-hidden="true" />}
              label={copy('taxesTitle')}
              value={formatPeso(stakes.totalTaxMonthly)}
              unit={copy('perMonth')}
              accent="crimson"
            >
              <p>{copy('taxesDetail')}</p>
              <p className="mt-2 font-display text-sm font-bold text-ink">
                {formatPeso(stakes.totalTaxAnnual)}{' '}
                <span className="font-mono text-[0.6875rem] font-normal uppercase tracking-[0.08em] text-muted">
                  {copy('perYear')}
                </span>
              </p>
              <p className="mt-1">
                {formatPercent(stakes.effectiveTaxRate)}{' '}
                {isFil ? 'ng budget mo' : 'of your budget'}
              </p>
              <div className="mt-2 grid grid-cols-3 gap-1 border-t border-line/25 pt-2 font-mono text-[0.6875rem] uppercase tracking-[0.04em]">
                <span>
                  Income
                  <br />
                  <span className="text-ink">{formatPeso(stakes.incomeTaxMonthly)}</span>
                </span>
                <span>
                  VAT
                  <br />
                  <span className="text-ink">{formatPeso(stakes.vatMonthly)}</span>
                </span>
                <span>
                  Fuel
                  <br />
                  <span className="text-ink">{formatPeso(stakes.fuelExciseMonthly)}</span>
                </span>
              </div>
            </StakesCard>

            <StakesCard
              icon={<HeartPulse className="h-4 w-4" aria-hidden="true" />}
              label={copy('healthTitle')}
              value={formatPeso(stakes.philHealthHouseholdShare)}
              unit={copy('householdShare')}
              accent="emerald"
            >
              <p>{copy('healthDetail')}</p>
              <p className="mt-2 font-display text-sm font-bold text-ink">
                {formatPeso(stakes.oopLow)}–{formatPeso(stakes.oopHigh)}
              </p>
              <p className="mt-1">
                {formatPercent(stakes.oopLowShareOfMonthly)}–
                {formatPercent(stakes.oopHighShareOfMonthly)} {copy('ofOneMonth')}
              </p>
            </StakesCard>

            <StakesCard
              icon={<ShoppingBasket className="h-4 w-4" aria-hidden="true" />}
              label={copy('foodTitle')}
              value={formatPeso(stakes.foodPressureMonthly)}
              unit={copy('perMonth')}
              accent="amber"
            >
              <p>{copy('foodDetail')}</p>
              <p className="mt-2 font-display text-sm font-bold text-ink">
                {formatPeso(stakes.foodPressureAnnual)}{' '}
                <span className="font-mono text-[0.6875rem] font-normal uppercase tracking-[0.08em] text-muted">
                  {copy('perYear')}
                </span>
              </p>
              <p className="mt-1">
                {isFil ? 'Food inflation' : 'Food inflation'}{' '}
                {formatPeso(stakes.foodInflationDragMonthly)} +{' '}
                {isFil ? 'rice gap' : 'rice gap'} {formatPeso(stakes.ricePriceGapMonthly)}
              </p>
            </StakesCard>

            <StakesCard
              icon={<ShieldCheck className="h-4 w-4" aria-hidden="true" />}
              label={copy('watchdogTitle')}
              value={formatPeso(stakes.contestedFundsPerHouseholdPerDay)}
              unit={copy('perDay')}
              accent="blue"
            >
              <p>{copy('watchdogDetail')}</p>
              <p className="mt-2 font-display text-sm font-bold text-ink">
                {formatPeso(stakes.contestedFundsPerHousehold)}{' '}
                <span className="font-mono text-[0.6875rem] font-normal uppercase tracking-[0.08em] text-muted">
                  {copy('perYear')}
                </span>
              </p>
              <p className="mt-1">
                {copy('householdShare')} · {formatPesoCompact(stakes.contestedFunds)}{' '}
                {isFil ? 'na pinag-aagawan' : 'contested'}
              </p>
            </StakesCard>
          </div>

          <div className="mt-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="label-mono text-muted">{copy('unitEconomicsTitle')}</span>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted/80">
                {copy('unitEconomicsHint')}
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
              {unitEconomics.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    'rounded-xl border p-3.5 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm',
                    accentSoft[item.accent],
                  )}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-muted">
                      {item.amount}
                    </span>
                    <span
                      className={cn('h-1.5 w-1.5 rounded-full', accentBar[item.accent])}
                      aria-hidden="true"
                    />
                  </div>
                  <p
                    className={cn(
                      'mt-1 font-display text-[1.35rem] font-extrabold leading-none',
                      accentText[item.accent],
                    )}
                  >
                    {item.value}
                  </p>
                  <p className="mt-1.5 text-[0.75rem] font-medium leading-snug text-ink/90">
                    {item.label[isFil ? 'fil' : 'en']}
                  </p>
                  <p className="mt-1 text-[0.75rem] leading-snug text-muted">
                    {item.assumption[isFil ? 'fil' : 'en']}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-amber/30 bg-amber/5 p-5 shadow-card sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <span className="label-mono text-amber">
                  {isFil ? 'Ang summary mo' : 'Your summary'}
                </span>
                <p className="mt-2 max-w-2xl text-[0.875rem] leading-[1.7] text-ink/90">
                  {isFil
                    ? `${formatPeso(stakes.totalTaxAnnual)} ang tinatayang buwis ng pamilya mo kada taon. Karapatan mong malaman kung saan napupunta ang bawat piso.`
                    : `Your household pays an estimated ${formatPeso(stakes.totalTaxAnnual)} a year in taxes. You have a right to know where every peso goes.`}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <ShareButton
                  text={summary}
                  label={copy('share')}
                  variant="accent"
                  compact
                />
                <CopyButton
                  text={summary}
                  label={copy('copy')}
                  copiedLabel={copy('copied')}
                  variant="ghost"
                  compact
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <details className="mt-4 rounded-2xl border border-line/30 bg-panel p-5 shadow-card sm:p-6">
        <summary className="flex min-h-[44px] cursor-pointer list-none items-center gap-2 text-[0.9375rem] font-bold text-ink [&::-webkit-details-marker]:hidden">
          <Info className="h-4 w-4 text-amber" aria-hidden="true" />
          {copy('methodology')}
          <span className="ml-auto font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
            {isFil ? 'Buksan' : 'Open'}
          </span>
        </summary>
        <ul className="mt-3 space-y-2.5 border-t border-line/30 pt-4">
          {calculatorMethodology.map((item) => (
            <li
              key={item.en}
              className="flex items-start gap-2.5 text-[0.8125rem] leading-[1.65] text-muted"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber" aria-hidden="true" />
              <span>{item[isFil ? 'fil' : 'en']}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[0.75rem] leading-relaxed text-muted/80">{copy('privacyNote')}</p>
      </details>
    </div>
  )
}
