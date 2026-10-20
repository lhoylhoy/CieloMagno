import { ArrowUpRight, FileCheck2 } from 'lucide-react'
import { publications } from '../data/publicationsData'
import { speakingEngagements } from '../data/engagementsData'
import { useLanguage } from '../hooks/useLanguage'
import { AnimatedNumber } from './AnimatedNumber'
import { Reveal } from './Reveal'
import { cn } from '../lib/cn'

interface ImpactStripProps {
  onOpenCV: () => void
}

const accentBar = {
  crimson: 'bg-crimson',
  amber: 'bg-amber',
  emerald: 'bg-emerald',
  blue: 'bg-blue',
} as const

const metrics = [
  {
    prefix: '₱',
    value: 89.9,
    decimals: 1,
    suffix: 'B',
    label: { en: 'PhilHealth funds defended', fil: 'Pondong PhilHealth na ipinaglaban' },
    detail: {
      en: 'Petitioned the Supreme Court to return ₱89.9B in health reserves to patients and hospitals (Inquirer, Aug. 2024).',
      fil: 'Nag-petisyon sa Supreme Court para ibalik sa pasyente at ospital ang ₱89.9B pondo ng PhilHealth (Inquirer, Ago. 2024).',
    },
    href: 'https://newsinfo.inquirer.net/1968876/petition-filed-at-sc-vs-philhealth-fund-transfer-cites-constitutionality',
    linkLabel: { en: 'Read SC petition report', fil: 'Basahin ang ulat' },
    accent: 'emerald' as const,
  },
  {
    prefix: '₱',
    value: 26,
    decimals: 0,
    suffix: 'B',
    label: { en: 'Budget insertions challenged', fil: 'Singit sa budget na kinuwestiyon' },
    detail: {
      en: 'Questioned the ₱26B AKAP lump sum in the 2025 budget and ₱125M OVP secret funds before the Supreme Court.',
      fil: 'Kinuwestiyon sa Supreme Court ang ₱26B AKAP lump sum sa 2025 budget at ang ₱125M OVP confidential funds.',
    },
    href: 'https://news.tv5.com.ph/breaking/read/groups-professors-ask-sc-to-declare-parts-of-2025-budget-unconstitutional',
    linkLabel: { en: 'Check the 2025 budget case', fil: 'Tingnan ang kaso sa budget' },
    accent: 'crimson' as const,
  },
  {
    prefix: '',
    value: 1,
    decimals: 0,
    suffix: '',
    label: { en: 'Cabinet post given up on principle', fil: 'Posisyon na binitawan sa prinsipyo' },
    detail: {
      en: 'Stepped down as Finance Undersecretary in 2023 rather than stay silent on the rice price cap (GMA News, Sept. 12, 2023).',
      fil: 'Bumaba siya sa Department of Finance noong 2023 kaysa manahimik tungkol sa rice price cap (GMA News, Set. 12, 2023).',
    },
    href: '#viral',
    linkLabel: { en: 'See the Sept. 2023 story', fil: 'Basahin ang kwento' },
    accent: 'amber' as const,
  },
  {
    prefix: '',
    value: 25,
    decimals: 0,
    suffix: '+',
    label: { en: 'Years in public finance', fil: 'Taon sa public finance' },
    detail: {
      en: `UP School of Economics professor with ${publications.length} research outputs and ${speakingEngagements.length} domestic & global forums.`,
      fil: `Propesor sa UP School of Economics na may ${publications.length} pananaliksik at ${speakingEngagements.length} talumpati sa Pilipinas at mundo.`,
    },
    href: '#research',
    linkLabel: {
      en: `Browse ${publications.length} papers & ${speakingEngagements.length} talks`,
      fil: `Buksan ang ${publications.length} pananaliksik`,
    },
    accent: 'blue' as const,
  },
]

export function ImpactStrip({ onOpenCV }: ImpactStripProps) {
  const { isFil } = useLanguage()

  return (
    <section id="impact" className="relative border-b border-line/25 py-16 sm:py-20">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="label-mono text-crimson">01</span>
              <span className="h-px w-8 bg-line/40" aria-hidden="true" />
              <span className="label-mono text-muted">
                {isFil ? 'Sa madaling salita' : 'What is at stake'}
              </span>
            </div>
            <p className="display-tight mt-4 text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.04] text-ink">
              {isFil ? 'May resibo sa bawat laban.' : 'Fought in public. Backed by receipts.'}
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.7] text-muted">
              {isFil
                ? 'Bago pa humiling ng boto para sa Senado, dinala na niya sa Supreme Court, silid-aralan, at publiko ang laban para sa PhilHealth, presyo ng bigas, at tapat na budget. Bawat bilang dito ay may link at ebidensyang pwedeng beripikahin.'
                : 'Before asking for a seat in the Senate, she took the biggest budget fights to the Supreme Court, the classroom, and the public square. Every figure below links to a public filing, news report, or her 19-page source CV.'}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
              <a
                href="#agenda"
                className="group inline-flex min-h-[44px] items-center gap-1.5 text-[0.8125rem] font-bold text-crimson transition hover:text-ink"
              >
                {isFil ? 'Basahin ang 2028 Agenda' : 'See the 2028 Agenda'}
                <ArrowUpRight
                  className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <button
                type="button"
                onClick={onOpenCV}
                className="group inline-flex min-h-[44px] items-center gap-1.5 text-[0.8125rem] font-bold text-muted transition hover:text-ink"
              >
                <FileCheck2 className="h-4 w-4 text-emerald" aria-hidden="true" />
                {isFil ? '19-pahina na CV' : '19-page CV'}
              </button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line/30 bg-line/40 shadow-card sm:grid-cols-2 lg:col-span-9 lg:grid-cols-4">
            {metrics.map((metric, index) => {
              const isExternal = metric.href.startsWith('http')
              return (
                <Reveal key={metric.label.en} delay={index * 70}>
                  <div className="group relative flex h-full flex-col justify-between bg-panel p-6 transition-colors duration-300 hover:bg-raised sm:p-7">
                    <span
                      className={cn(
                        'absolute inset-x-6 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100',
                        accentBar[metric.accent],
                      )}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="display-tight text-[clamp(2.5rem,4.4vw,3.75rem)] leading-none text-ink">
                        <AnimatedNumber
                          prefix={metric.prefix}
                          value={metric.value}
                          decimals={metric.decimals}
                          suffix={metric.suffix}
                        />
                      </p>
                      <p className="mt-4 font-mono text-[0.75rem] uppercase tracking-[0.14em] leading-relaxed text-muted">
                        {isFil ? metric.label.fil : metric.label.en}
                      </p>
                    </div>
                    <div className="mt-6">
                      <p className="text-[0.8125rem] leading-relaxed text-muted">
                        {isFil ? metric.detail.fil : metric.detail.en}
                      </p>
                      <a
                        href={metric.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer' : undefined}
                        className="mt-2 inline-flex min-h-[44px] items-center gap-1.5 font-mono text-[0.75rem] font-bold uppercase tracking-[0.08em] text-ink transition hover:text-crimson"
                      >
                        {isFil ? metric.linkLabel.fil : metric.linkLabel.en}
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
