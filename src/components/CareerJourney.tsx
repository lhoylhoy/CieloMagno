import { ArrowRight, Library } from 'lucide-react'
import { careerMilestones } from '../data/timelineData'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { cn } from '../lib/cn'

interface CareerJourneyProps {
  onOpenCV: () => void
}

const accentDot = {
  crimson: 'bg-crimson',
  amber: 'bg-amber',
  emerald: 'bg-emerald',
  blue: 'bg-blue',
} as const

const accentText = {
  crimson: 'text-crimson',
  amber: 'text-amber',
  emerald: 'text-emerald',
  blue: 'text-blue',
} as const

export function CareerJourney({ onOpenCV }: CareerJourneyProps) {
  return (
    <div className="pt-8 sm:pt-10">
      <div>
        <SectionHeading
          index="07.2"
          eyebrow="The journey"
          accent="emerald"
          title={
            <>
              From campus politics
              <br />
              to the <span className="serif-italic text-emerald">fiscal cockpit.</span>
            </>
          }
          description="A throughline runs from student councils to the Department of Finance: learn how power works, then make it legible. These are the stops the CV records."
          actions={
            <button type="button" onClick={onOpenCV} className="btn btn-ghost">
              <Library className="h-4 w-4" aria-hidden="true" />
              Download the CV
            </button>
          }
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="card grain-card rounded-[1.5rem] p-6 sm:p-7">
                  <p className="label-mono text-muted">The arc</p>
                  <p className="mt-3 font-display text-[clamp(1.7rem,2.8vw,2.15rem)] font-extrabold leading-[0.9] tracking-tight text-ink">
                    1997
                    <span className="mx-2 text-crimson">→</span>
                    2026
                  </p>
                  <p className="mt-4 text-[0.875rem] leading-[1.7] text-muted">
                    Student councilor. National student chair. Legislative staffer. Fulbright
                    fellow. Professor. Undersecretary. Global board member.
                  </p>

                  <div className="mt-6 space-y-3.5 border-t border-line/25 pt-5">
                    {[
                      { period: '1997–2002', label: 'Campus & legislature', accent: 'crimson' },
                      { period: '2002–2013', label: 'Research & doctorate', accent: 'amber' },
                      { period: '2013–2022', label: 'Academe & EITI', accent: 'emerald' },
                      { period: '2022–2026', label: 'Finance & global governance', accent: 'blue' },
                    ].map((era) => (
                      <div key={era.period} className="flex items-center gap-3">
                        <span
                          className={cn(
                            'h-1.5 w-1.5 shrink-0 rounded-full',
                            accentDot[era.accent as keyof typeof accentDot],
                          )}
                        />
                        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
                          {era.period}
                        </span>
                        <span className="text-[0.8125rem] font-semibold leading-snug text-ink">
                          {era.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#research"
                    className="group mt-5 inline-flex min-h-[44px] items-center gap-2 text-[0.8125rem] font-bold text-ink transition hover:text-crimson"
                  >
                    See what the journey produced
                    <ArrowRight
                      className="h-4 w-4 transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </Reveal>

              <Reveal className="mt-4" delay={80}>
                <div className="flex flex-wrap gap-1.5">
                  {careerMilestones.map((milestone) => (
                    <a
                      key={milestone.id}
                      href={`#${milestone.id}`}
                      className="inline-flex min-h-[44px] items-center rounded-full border border-line/30 bg-panel px-3.5 font-mono text-[0.75rem] text-muted transition hover:border-emerald/40 hover:text-ink"
                    >
                      {milestone.year}
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
          </aside>

          <div className="relative lg:col-span-8">
            <div
              className="absolute bottom-4 left-3.5 top-2 w-px bg-gradient-to-b from-emerald/60 via-line/35 to-blue/50 sm:left-4"
              aria-hidden="true"
            />

            {careerMilestones.map((milestone, index) => (
              <Reveal key={milestone.id} delay={Math.min(index * 45, 220)}>
                <article
                  id={milestone.id}
                  className="relative scroll-mt-28 pb-9 pl-11 sm:pl-16"
                >
                  <span className="absolute left-0 top-0.5 grid h-7 w-7 place-items-center rounded-full border border-line/40 bg-panel shadow-[0_0_0_5px_rgb(var(--canvas))] sm:h-8 sm:w-8">
                    <span
                      className={cn(
                        'h-2.5 w-2.5 rounded-full shadow-[0_0_12px_rgb(var(--emerald)/0.5)]',
                        accentDot[milestone.accent],
                      )}
                    />
                  </span>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className={cn('label-mono', accentText[milestone.accent])}>
                      {milestone.period}
                    </span>
                    <span className="h-px min-w-6 flex-1 bg-line/25" aria-hidden="true" />
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                      {milestone.year}
                    </span>
                  </div>

                  <div className="group mt-3 rounded-2xl border border-line/30 bg-panel p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:shadow-lift sm:p-6">
                    <h3 className="font-display text-[1.15rem] font-bold leading-[1.35] text-ink sm:text-xl">
                      {milestone.role}
                    </h3>
                    <p className="mt-1.5 text-[0.8125rem] font-semibold leading-snug text-muted">
                      {milestone.org}
                    </p>
                    <p className="mt-3 text-[0.9375rem] leading-[1.7] text-muted">
                      {milestone.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {milestone.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="rounded-full border border-line/30 bg-canvas/50 px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.04em] text-muted"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}
