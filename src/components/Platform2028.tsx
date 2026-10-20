import { ArrowUpRight, BadgeCheck, BookOpen, FileSearch, Sparkles } from 'lucide-react'
import { pillarFilTranslations } from '../data/campaignTranslations'
import { getImageCredit } from '../data/imageCredits'
import { platformPillars } from '../data/platform2028Data'
import type { Topic } from '../data/types'
import { useLanguage } from '../hooks/useLanguage'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { cn } from '../lib/cn'

interface Platform2028Props {
  onExploreTopic: (topic: Topic) => void
}

const accentText = {
  crimson: 'text-crimson',
  amber: 'text-amber',
  emerald: 'text-emerald',
  blue: 'text-blue',
} as const

const accentBorder = {
  crimson: 'border-crimson/25 hover:border-crimson/50',
  amber: 'border-amber/25 hover:border-amber/50',
  emerald: 'border-emerald/25 hover:border-emerald/50',
  blue: 'border-blue/25 hover:border-blue/50',
} as const

const accentBar = {
  crimson: 'bg-crimson',
  amber: 'bg-amber',
  emerald: 'bg-emerald',
  blue: 'bg-blue',
} as const

export function Platform2028({ onExploreTopic }: Platform2028Props) {
  const { isFil } = useLanguage()

  return (
    <section id="agenda" className="relative overflow-hidden border-b border-line/25 py-20 sm:py-28">
      <div className="shell relative">
        <SectionHeading
          index="04"
          eyebrow={isFil ? 'Ang 2028 agenda' : 'The 2028 agenda'}
          accent="amber"
          title={
            isFil ? (
              <>
                Limang laban.
                <br />
                Isang <span className="serif-italic text-amber">paninindigan.</span>
              </>
            ) : (
              <>
                Five fights.
                <br />
                One <span className="serif-italic text-amber">throughline.</span>
              </>
            )
          }
          description={
            isFil
              ? 'Hindi ito listahan ng matatamis na pangako. Ito ay malinaw na tanong: sino ang nakikinabang, sino ang nagbabayad ng gastos, at sino ang nakakakita sa libro ng bayan? Bawat adyenda ay may kaakibat na resibo.'
              : 'Not a list of promises. A set of questions about who captures the value, who bears the cost, and who gets to see the books. Each plank links back to the record.'
          }
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {platformPillars.map((pillar, index) => {
            const photo = getImageCredit(pillar.imageId)
            const receiptPhoto = getImageCredit(pillar.receiptImageId)
            const filCopy = pillarFilTranslations[pillar.id]

            return (
              <Reveal key={pillar.id} delay={Math.min(index * 55, 220)} className={index === 0 ? 'lg:col-span-2' : undefined}>
                <article
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border bg-panel p-5 transition hover:shadow-lift sm:p-6',
                    accentBorder[pillar.accent],
                  )}
                >
                  <span className={cn('absolute inset-x-0 top-0 z-10 h-[2px]', accentBar[pillar.accent])} aria-hidden="true" />

                  {photo ? (
                    <figure className="relative -mx-5 -mt-5 mb-5 sm:-mx-6 sm:-mt-6">
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
                          className={cn(
                            'w-full object-cover',
                            index === 0 ? 'h-40 sm:h-52' : 'h-36 sm:h-40',
                          )}
                        />
                      </a>
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/90 via-night/25 to-transparent"
                        aria-hidden="true"
                      />
                      <figcaption className="pointer-events-none absolute inset-x-3 bottom-2.5 rounded-lg bg-night/45 px-2.5 py-1.5 backdrop-blur-sm sm:inset-x-4">
                        <p className="truncate font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-white/90">
                          {photo.caption}
                        </p>
                        <p className="mt-0.5 flex flex-wrap items-center gap-x-2 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-white/75">
                          <span className="truncate">Photo: {photo.photographer}</span>
                          <a
                            href={photo.licenseUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="pointer-events-auto relative shrink-0 underline decoration-white/40 underline-offset-2 after:absolute after:-inset-2 after:content-[''] transition hover:text-amber"
                          >
                            {photo.license}
                          </a>
                        </p>
                      </figcaption>
                    </figure>
                  ) : null}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <span className={cn('font-mono text-[0.6875rem] uppercase tracking-[0.16em]', accentText[pillar.accent])}>
                        {isFil ? `Adyenda ${pillar.number}` : `Plank ${pillar.number}`}
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-bold leading-tight text-ink sm:text-[1.7rem]">
                        {pillar.title}
                      </h3>
                    </div>
                    <div className="shrink-0 text-left sm:text-right">
                      <p className={cn('font-display text-2xl font-extrabold leading-none sm:text-3xl', accentText[pillar.accent])}>
                        {pillar.stat}
                      </p>
                      <p className="mt-1 max-w-[8rem] text-[0.6875rem] leading-tight text-muted">
                        {isFil && filCopy ? filCopy.statLabel : pillar.statLabel}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-crimson/25 bg-crimson/5 p-4">
                      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-crimson">
                        {isFil ? 'Ang problema' : 'The problem'}
                      </p>
                      <p className="mt-2 text-[0.875rem] leading-[1.65] text-ink/90">
                        {isFil && filCopy ? filCopy.problem : pillar.problem}
                      </p>
                    </div>
                    <div className="rounded-xl border border-emerald/25 bg-emerald/5 p-4">
                      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-emerald">
                        {isFil ? 'Ang plano' : 'The plan'}
                      </p>
                      <p className="mt-2 text-[0.875rem] leading-[1.65] text-ink/90">
                        {isFil && filCopy ? filCopy.plan : pillar.plan}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl border border-line/30 bg-canvas/60 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <p className="inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                        <BadgeCheck className="h-3.5 w-3.5 text-emerald" aria-hidden="true" />
                        {isFil ? 'Ang resibo' : 'The receipt'}
                      </p>
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-emerald">
                        {isFil ? 'Beripikado' : 'Verified'}
                      </span>
                    </div>
                    <div className="mt-2 flex items-start gap-3">
                      {receiptPhoto ? (
                        <a
                          href={receiptPhoto.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="group/receipt relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-line/30 shadow-sm"
                          aria-label={`Photo source: ${receiptPhoto.title}`}
                        >
                          <img
                            src={receiptPhoto.thumbPath ?? receiptPhoto.path}
                            alt={receiptPhoto.alt}
                            width={64}
                            height={64}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition duration-500 group-hover/receipt:scale-105"
                          />
                        </a>
                      ) : null}
                      <div className="min-w-0">
                        <p className="text-[0.8125rem] leading-[1.6] text-muted">
                          {isFil && filCopy ? filCopy.receipt : pillar.receipt}
                        </p>
                        {receiptPhoto ? (
                          <p className="mt-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted/80">
                            Photo: {receiptPhoto.photographer} ·{' '}
                            <a
                              href={receiptPhoto.licenseUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="relative underline decoration-line/30 underline-offset-2 after:absolute after:-inset-2 after:content-[''] transition hover:text-ink"
                            >
                              {receiptPhoto.license}
                            </a>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line/25 pt-4">
                    <a
                      href={pillar.sourceUrl}
                      target={pillar.sourceUrl.startsWith('#') ? undefined : '_blank'}
                      rel={pillar.sourceUrl.startsWith('#') ? undefined : 'noreferrer'}
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-[0.75rem] font-bold text-ink transition hover:text-crimson"
                    >
                      <BookOpen className="h-4 w-4" aria-hidden="true" />
                      {pillar.sourceLabel}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>

                    {pillar.topic ? (
                      <button
                        type="button"
                        onClick={() => onExploreTopic(pillar.topic as Topic)}
                        className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-line/30 bg-panel px-3.5 text-[0.75rem] font-bold text-muted transition hover:border-crimson/40 hover:text-ink"
                      >
                        <FileSearch className="h-3.5 w-3.5" aria-hidden="true" />
                        {isFil ? 'Tingnan ang pananaliksik' : 'Find the research'}
                      </button>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-6">
          <div className="flex flex-col gap-4 rounded-[1.5rem] border border-line/30 bg-panel p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 text-amber" aria-hidden="true" />
              <div>
                <p className="font-display text-base font-bold text-ink">
                  {isFil
                    ? 'Bawat adyenda ay sinusuportahan ng Resibo Vault.'
                    : 'Every plank is backed by the Resibo Vault.'}
                </p>
                <p className="mt-1 text-[0.8125rem] leading-[1.6] text-muted">
                  {isFil
                    ? 'Lahat ng prayoridad sa 2028 legislative agenda ay nakatali sa petisyon sa Supreme Court, aktuwal na laban sa polisiya, o peer-reviewed na pananaliksik.'
                    : 'Every priority in this 2028 legislative agenda is anchored to a Supreme Court petition, a policy fight, or peer-reviewed research in the Resibo Vault.'}
                </p>
              </div>
            </div>
            <a href="#research" className="btn btn-ghost shrink-0">
              {isFil ? 'Buksan ang Resibo Vault' : 'Open the Resibo Vault'}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
