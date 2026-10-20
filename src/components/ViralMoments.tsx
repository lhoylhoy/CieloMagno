import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Quote,
  TrendingDown,
} from 'lucide-react'
import { graphLesson, viralCitation, viralMoments } from '../data/socialLoreData'
import { getImageCredit } from '../data/imageCredits'
import { useLanguage } from '../hooks/useLanguage'
import { CopyButton } from './CopyButton'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { StampBadge } from './StampBadge'
import { cn } from '../lib/cn'

const accentText = {
  crimson: 'text-crimson',
  amber: 'text-amber',
  emerald: 'text-emerald',
  blue: 'text-blue',
} as const

const accentBorder = {
  crimson: 'border-crimson/30 bg-crimson/5',
  amber: 'border-amber/30 bg-amber/5',
  emerald: 'border-emerald/30 bg-emerald/5',
  blue: 'border-blue/30 bg-blue/5',
} as const

const accentDot = {
  crimson: 'bg-crimson',
  amber: 'bg-amber',
  emerald: 'bg-emerald',
  blue: 'bg-blue',
} as const

const momentFilCopy: Record<string, { title: string; body: string }> = {
  'the-graph': {
    title: 'Ang graph',
    body:
      'Matapos ipataw ng Executive Order 39 ang price cap na ₱41 sa regular milled rice at ₱45 sa well-milled rice, nag-post siya ng supply-and-demand graph — gaya ng itinuturo niya sa klase. Malinaw ang punto sa ekonomiks: ang price ceiling na mas mababa sa presyo sa merkado ay maaaring magdulot ng kakulangan sa suplay.',
  },
  'the-return': {
    title: 'Ang pagbabalik',
    body:
      'Ibinahagi niya ang kanyang pagbabalik sa UP School of Economics. Ang silid-aralan ay hindi atrasan — ito ang entablado kung saan patuloy niyang maituturo ang katotohanan sa publiko.',
  },
  'the-exit': {
    title: 'Ang pagbibitiw',
    body:
      'Kinumpirma ng Malacañang ang kanyang pagbibitiw sa Department of Finance. Nagbabala siya na ang price cap ay maaaring magresulta sa hoarding at kakulangan ng bigas. Hindi siya nagpanggap na tama ang mali.',
  },
}

const graphLessonFil = [
  {
    label: 'Ang price cap',
    text: 'Nagpataw ang gobyerno ng pinakamataas na presyo na mas mababa sa tunay na presyo sa pamilihan.',
  },
  {
    label: 'Ang pag-ipit',
    text: 'Mas maraming gustong bumili sa mababang presyo, ngunit nalulugi ang magsasaka at nagtitinda kaya nababawasan ang suplay.',
  },
  {
    label: 'Ang kakulangan',
    text: 'Kapag hindi sinuportahan ang suplay, hindi nawawala ang problema — lumalabas ito bilang pila, kakulangan ng bigas, o black market.',
  },
]

export function ViralMoments() {
  const { isFil } = useLanguage()
  const activeLesson = isFil ? graphLessonFil : graphLesson

  return (
    <section id="viral" className="relative overflow-hidden border-b border-line/25 py-20 sm:py-28">
      <div className="shell relative">
        <SectionHeading
          index="03"
          eyebrow={isFil ? 'Ang kwento' : 'The story'}
          accent="amber"
          title={
            isFil ? (
              <>
                Ang graph. Ang salita.
                <br />
                Ang <span className="serif-italic text-amber">paninindigan.</span>
              </>
            ) : (
              <>
                The graph. The quote.
                <br />
                The <span className="serif-italic text-amber">exit.</span>
              </>
            )
          }
          description={
            isFil
              ? 'Noong Setyembre 2023, isang supply-and-demand graph ang naging pambansang usapin. Hindi siya nag-resign dahil natalo siya sa argumento — nag-resign siya dahil tumanggi siyang manahimik.'
              : 'In September 2023, a supply-and-demand graph became a national argument. She did not resign because she lost the argument. She resigned because she would not stop making it.'
          }
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div
              className="relative space-y-4 before:absolute before:bottom-6 before:left-[1.15rem] before:top-4 before:w-px before:bg-gradient-to-b before:from-crimson/50 before:via-line/30 before:to-emerald/50 sm:before:left-[1.4rem]"
              aria-label="Timeline of September 2023"
            >
              {viralMoments.map((moment, index) => {
                const photo = getImageCredit(moment.imageId)
                const filMoment = momentFilCopy[moment.id]
                const isKeyMoment = moment.id === 'the-graph'

                return (
                  <Reveal key={moment.id} delay={index * 70}>
                    <article className="relative pl-12 sm:pl-16">
                      <span className="absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full border border-line/40 bg-panel font-mono text-[0.6875rem] font-bold text-ink shadow-[0_0_0_6px_rgb(var(--canvas)),0_0_24px_-2px_rgb(var(--amber)/0.45)] sm:h-11 sm:w-11">
                        <span
                          className={cn('absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-canvas', accentDot[moment.accent])}
                          aria-hidden="true"
                        />
                        0{index + 1}
                      </span>

                      <div
                        className={cn(
                          'rounded-2xl border p-5 transition sm:p-6',
                          accentBorder[moment.accent],
                          isKeyMoment && 'shadow-card ring-1 ring-amber/25',
                        )}
                      >
                        {isKeyMoment ? (
                          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-amber/40 bg-amber/10 px-2.5 py-1 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-amber">
                            <TrendingDown className="h-3.5 w-3.5" aria-hidden="true" />
                            {isFil ? 'Ang price ceiling' : 'The price-ceiling moment'}
                          </span>
                        ) : null}
                        <div className="flex flex-wrap items-center gap-2">
                          <CalendarDays className={cn('h-3.5 w-3.5', accentText[moment.accent])} aria-hidden="true" />
                          <span className={cn('label-mono', accentText[moment.accent])}>{moment.date}</span>
                          <span className="h-px min-w-6 flex-1 bg-line/25" aria-hidden="true" />
                          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">2023</span>
                        </div>

                        <h3 className="mt-3 font-display text-xl font-bold leading-tight text-ink sm:text-2xl">
                          {isFil && filMoment ? filMoment.title : moment.title}
                        </h3>
                        <p className="mt-2 text-[0.9375rem] leading-[1.7] text-muted">
                          {isFil && filMoment ? filMoment.body : moment.body}
                        </p>

                        {moment.quote ? (
                          <figure className="mt-4 rounded-r-xl border-l-2 border-amber/70 bg-amber/5 py-2 pl-4 pr-2">
                            <blockquote className="font-serif text-[1.25rem] italic leading-[1.4] text-ink sm:text-[1.45rem]">
                              “{moment.quote}”
                            </blockquote>
                            <figcaption className="mt-1.5 text-[0.75rem] leading-relaxed text-muted">
                              {moment.attribution}
                            </figcaption>
                          </figure>
                        ) : null}

                        {photo ? (
                          <figure className="mt-4 overflow-hidden rounded-xl border border-line/30 bg-canvas/40">
                            <a
                              href={photo.sourceUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="block"
                              aria-label={`Photo source: ${photo.title}`}
                            >
                              <img
                                src={photo.path}
                                alt={photo.alt}
                                width={photo.width}
                                height={photo.height}
                                loading="lazy"
                                decoding="async"
                                className="h-32 w-full object-cover sm:h-36"
                              />
                            </a>
                            <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-line/25 px-3 py-2">
                              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
                                {photo.caption}
                              </span>
                              <a
                                href={photo.licenseUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-[44px] items-center font-mono text-[0.75rem] uppercase tracking-[0.08em] text-emerald transition hover:text-ink"
                              >
                                Photo: {photo.photographer} · {photo.license}
                              </a>
                            </figcaption>
                          </figure>
                        ) : null}

                        <a
                          href={moment.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="group mt-3 inline-flex min-h-[44px] items-center gap-1.5 text-[0.75rem] font-bold text-ink transition hover:text-crimson"
                        >
                          {moment.sourceLabel}
                          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                        </a>
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>

          <aside className="min-w-0 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal delay={100}>
                <div className="on-inverse relative overflow-hidden rounded-[1.5rem] border border-line/30 bg-ink p-6 text-canvas sm:p-7">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber/15 blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingDown className="h-4 w-4 text-amber" aria-hidden="true" />
                        <span className="label-mono text-canvas/60">
                          {isFil ? 'Paliwanag sa graph' : 'The graph, explained'}
                        </span>
                      </div>
                      <StampBadge className="hidden h-16 w-16 sm:grid" label="ECON 101 · MAY RESIBO ·" />
                    </div>

                    <p className="mt-4 font-display text-2xl font-bold leading-tight">
                      {isFil
                        ? 'Hindi nawawala ang kakulangan sa suplay dahil lang sa price cap.'
                        : 'A price cap does not make the shortage disappear.'}
                    </p>
                    <p className="mt-2 text-[0.9375rem] leading-[1.7] text-canvas/70">
                      {isFil
                        ? 'Binabago lang nito kung sino ang makakabili, sino ang malulugi, at sino ang maiipit sa gitna.'
                        : 'It changes who can buy, who can sell, and who gets stuck in the gap.'}
                    </p>

                    <ol className="mt-5 space-y-3">
                      {activeLesson.map((step, index) => (
                        <li key={step.label} className="flex gap-3">
                          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-canvas/10 font-mono text-[0.6875rem] text-amber">
                            {index + 1}
                          </span>
                          <div>
                            <p className="font-display text-sm font-bold text-canvas">{step.label}</p>
                            <p className="mt-0.5 text-[0.75rem] leading-relaxed text-canvas/60">{step.text}</p>
                          </div>
                        </li>
                      ))}
                    </ol>

                    <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-canvas/10 pt-4">
                      <CopyButton
                        text={viralCitation}
                        label={isFil ? 'Kopyahin ang citation' : 'Copy citation'}
                        copiedLabel={isFil ? 'Nakopya na' : 'Citation copied'}
                        variant="amber"
                        compact
                      />
                      <span className="inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-canvas/65">
                        <Check className="h-3 w-3 text-emerald" aria-hidden="true" />
                        {isFil ? 'May source sa card' : 'Source in the card'}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160} className="mt-4">
                <div className="rounded-2xl border border-line/30 bg-panel p-5 shadow-card sm:p-6">
                  <Quote className="h-6 w-6 text-crimson" aria-hidden="true" />
                  <p className="mt-3 font-serif text-[1.35rem] italic leading-[1.4] text-ink">
                    “I was grateful for the opportunity to serve the Filipino people, but I think
                    the academe will give me the flexibility I need to advocate for good policies.”
                  </p>
                  <p className="mt-3 text-[0.75rem] leading-relaxed text-muted">
                    Cielo Magno, as quoted by Interaksyon, Sept. 8, 2023
                  </p>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col gap-5 rounded-[1.5rem] border border-line/30 bg-panel p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <span className="label-mono text-crimson">
                {isFil ? 'Ang koneksyon' : 'The throughline'}
              </span>
              <p className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
                {isFil
                  ? 'Hindi kailanman naging atrasan ang silid-aralan. Ito ang susunod na entablado ng laban.'
                  : 'The classroom was never the retreat. It was the next podium.'}
              </p>
              <p className="mt-1 text-sm text-muted">
                {isFil
                  ? 'Basahin ang mga laban sa polisiyang nagmula sa desisyong iyon.'
                  : 'Read the policy fights that came out of that decision.'}
              </p>
            </div>
            <a href="#agenda" className="btn btn-primary shrink-0">
              {isFil ? 'Ang 2028 agenda' : 'The 2028 agenda'}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
