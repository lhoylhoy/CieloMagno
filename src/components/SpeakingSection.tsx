import { useMemo, useState } from 'react'
import { ArrowDown, Globe2, MapPin } from 'lucide-react'
import {
  domesticEngagements,
  engagementAudiences,
  engagementYears,
  internationalCities,
  internationalEngagements,
  internationalRegionCount,
  speakingEngagements,
} from '../data/engagementsData'
import type { Audience, EngagementScope } from '../data/types'
import { AnimatedNumber } from './AnimatedNumber'
import { FilterPill } from './FilterPill'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { Select } from './Select'
import { cn } from '../lib/cn'

type ScopeFilter = EngagementScope | 'All'

const PAGE_SIZE = 12

const stats = [
  { label: 'Total engagements', value: speakingEngagements.length, accent: 'text-ink' },
  { label: 'International', value: internationalEngagements.length, accent: 'text-amber' },
  { label: 'Domestic', value: domesticEngagements.length, accent: 'text-emerald' },
  { label: 'Global locations', value: internationalCities.length, accent: 'text-crimson' },
]

export function SpeakingSection() {
  const [scope, setScope] = useState<ScopeFilter>('All')
  const [audience, setAudience] = useState<Audience | 'All'>('All')
  const [year, setYear] = useState<number | 'All'>('All')
  const [limit, setLimit] = useState(PAGE_SIZE)

  const topLocations = useMemo(() => {
    const counts = new Map<string, number>()
    speakingEngagements.forEach((engagement) => {
      if (['Virtual', 'Regional', 'Online'].includes(engagement.location)) return
      counts.set(engagement.location, (counts.get(engagement.location) ?? 0) + 1)
    })
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6)
  }, [])

  const filtered = useMemo(
    () =>
      speakingEngagements.filter((engagement) => {
        const matchesScope = scope === 'All' || engagement.scope === scope
        const matchesAudience = audience === 'All' || engagement.audience === audience
        const matchesYear = year === 'All' || engagement.year === year
        return matchesScope && matchesAudience && matchesYear
      }),
    [scope, audience, year],
  )

  const visible = filtered.slice(0, limit)
  const hasFilters = scope !== 'All' || audience !== 'All' || year !== 'All'

  const resetFilters = () => {
    setScope('All')
    setAudience('All')
    setYear('All')
    setLimit(PAGE_SIZE)
  }

  return (
    <div className="pt-8 sm:pt-10">
      <div>
        <SectionHeading
          index="07.3"
          eyebrow="Campus &amp; global route"
          accent="blue"
          title={
            <>
              The argument
              <br />
              <span className="serif-italic text-blue">travels.</span>
            </>
          }
          description="From village consultations to OECD forums, the same questions follow: who captures the value, who bears the cost, and who gets to see the books?"
        />

        <div className="mt-7 flex flex-wrap items-center gap-2">
          <span className="label-mono text-muted">Route</span>
          {internationalCities.slice(0, 8).map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-1 rounded-full border border-blue/20 bg-blue/5 px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-blue"
            >
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {city}
            </span>
          ))}
          {internationalCities.length > 8 ? (
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
              +{internationalCities.length - 8} more
            </span>
          ) : null}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="card rounded-[1.5rem] p-5 sm:p-6">
                  <p className="label-mono text-muted">By the numbers</p>
                  <dl className="mt-4 divide-y divide-line/25">
                    {stats.map((stat) => (
                      <div key={stat.label} className="flex items-baseline justify-between gap-3 py-3.5">
                        <dt className="text-[0.75rem] font-semibold leading-snug text-muted">{stat.label}</dt>
                        <dd className={cn('font-display text-[1.6rem] font-extrabold leading-none', stat.accent)}>
                          <AnimatedNumber value={stat.value} />
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-4 border-t border-line/25 pt-4">
                    <div className="flex items-center gap-2">
                      <Globe2 className="h-4 w-4 text-blue" aria-hidden="true" />
                      <p className="label-mono text-muted">{internationalRegionCount} regions</p>
                    </div>
                    <p className="mt-2 text-[0.75rem] leading-[1.6] text-muted">
                      CV record spans {engagementYears[engagementYears.length - 1]}–
                      {engagementYears[0]}. Venues include Paris, Basel, Berlin, Singapore,
                      and virtual convenings.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal className="mt-4" delay={80}>
                <div className="rounded-[1.5rem] border border-line/30 bg-panel p-5 shadow-card sm:p-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-crimson" aria-hidden="true" />
                    <p className="label-mono text-muted">Frequent stages</p>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {topLocations.map(([location, count]) => (
                      <li
                        key={location}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line/30 bg-canvas/40 px-2.5 py-1 text-[0.75rem] font-semibold text-muted"
                      >
                        {location}
                        <span className="font-mono text-[0.6875rem] text-muted/80">{count}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[0.75rem] leading-relaxed text-muted/80">
                    Transcribed from CV pages 14–19.
                  </p>
                </div>
              </Reveal>
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-9">
            <Reveal>
              <div className="card rounded-2xl p-4 sm:p-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <FilterPill
                      active={scope === 'All'}
                      onClick={() => {
                        setScope('All')
                        setLimit(PAGE_SIZE)
                      }}
                      count={speakingEngagements.length}
                    >
                      All
                    </FilterPill>
                    <FilterPill
                      active={scope === 'International'}
                      onClick={() => {
                        setScope('International')
                        setLimit(PAGE_SIZE)
                      }}
                      count={internationalEngagements.length}
                    >
                      International
                    </FilterPill>
                    <FilterPill
                      active={scope === 'Domestic'}
                      onClick={() => {
                        setScope('Domestic')
                        setLimit(PAGE_SIZE)
                      }}
                      count={domesticEngagements.length}
                    >
                      Philippines
                    </FilterPill>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Select
                      label="Filter by audience"
                      accent="blue"
                      value={audience}
                      onValueChange={(next) => {
                        setAudience(next as Audience | 'All')
                        setLimit(PAGE_SIZE)
                      }}
                      options={[
                        { value: 'All', label: 'All audiences' },
                        ...engagementAudiences.map((item) => ({ value: item, label: item })),
                      ]}
                    />
                    <Select
                      label="Filter by year"
                      accent="blue"
                      value={String(year)}
                      onValueChange={(next) => {
                        setYear(next === 'All' ? 'All' : Number(next))
                        setLimit(PAGE_SIZE)
                      }}
                      options={[
                        { value: 'All', label: 'All years' },
                        ...engagementYears.map((item) => ({
                          value: String(item),
                          label: String(item),
                        })),
                      ]}
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[0.8125rem] text-muted">
                <span className="font-bold text-ink">{visible.length}</span> of{' '}
                <span className="font-bold text-ink">{filtered.length}</span> engagements
                {hasFilters ? ' — filtered' : ''}
              </p>
              {hasFilters ? (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex min-h-[44px] items-center rounded-full px-2 text-[0.8125rem] font-bold text-crimson transition hover:text-ink"
                >
                  Reset filters
                </button>
              ) : null}
            </div>


            {visible.length > 0 ? (
              <div className="mt-2 divide-y divide-line/25 border-b border-line/25">
                {visible.map((engagement) => (
                  <article
                    key={engagement.id}
                    className="group grid gap-2.5 py-5 sm:grid-cols-[8.5rem_1fr] sm:gap-5 sm:py-6"
                  >
                    <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-start">
                      <p className="font-mono text-[0.6875rem] leading-relaxed text-amber">
                        {engagement.date}
                      </p>
                      <span
                        className={cn(
                          'inline-flex items-center gap-1 rounded-full px-2 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.1em]',
                          engagement.scope === 'International'
                            ? 'border border-blue/25 bg-blue/10 text-blue'
                            : 'border border-emerald/25 bg-emerald/10 text-emerald',
                        )}
                      >
                        {engagement.scope === 'International' ? 'Global' : 'PH'}
                      </span>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-line/30 bg-panel px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.06em] text-ink">
                          {engagement.role}
                        </span>
                        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
                          {engagement.audience}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-[1.0625rem] font-bold leading-[1.4] text-ink">
                        {engagement.title}
                      </h3>
                      <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted">
                        {engagement.venue}
                        <span className="text-muted/80"> · </span>
                        {engagement.location}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-4 rounded-2xl border border-dashed border-line/30 p-10 text-center">
                <p className="font-display text-lg font-bold text-ink">No engagements found.</p>
                <p className="mt-1 text-[0.875rem] text-muted">
                  Try another audience or year — or reset the filters.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="btn btn-accent btn-sm mt-5"
                >
                  Reset filters
                </button>
              </div>
            )}

            {filtered.length > visible.length ? (
              <div className="mt-7 flex justify-center">
                <button
                  type="button"
                  onClick={() => setLimit((current) => current + PAGE_SIZE)}
                  className="btn btn-ghost"
                >
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                  Show more engagements ({filtered.length - visible.length} left)
                </button>
              </div>
            ) : null}

          </div>
        </div>
      </div>
    </div>
  )
}
