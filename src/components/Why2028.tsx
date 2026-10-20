import {
  ArrowUpRight,
  CheckCircle2,
  FileCheck2,
  Landmark,
  Quote,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SenateBallotStrategy } from './SenateBallotStrategy'

interface Why2028Props {
  onOpenCV: () => void
}

const recordProofs = {
  en: [
    'Supreme Court petitioner against the ₱89.9B PhilHealth transfer, OVP confidential funds, and the ₱26B AKAP lump sum.',
    'Former Undersecretary of Finance for Fiscal Policy and Monitoring (2022–2023).',
    'Open Government Partnership Global Co-Chair (2024–2025), Bantay Kita President, and former EITI International Board member.',
  ],
  fil: [
    'Petitioner sa Supreme Court laban sa ₱89.9B PhilHealth transfer, OVP confidential funds, at ₱26B AKAP lump sum.',
    'Dating Undersecretary of Finance para sa Fiscal Policy and Monitoring (2022–2023).',
    'Open Government Partnership Global Co-Chair (2024–2025), Pangulo ng Bantay Kita, at dating miyembro ng EITI International Board.',
  ],
}

const fights = {
  en: [
    'Health financing that protects patients and health workers, not pork barrel.',
    'A national budget published line by line — no secret lump sums, no ghost projects.',
    'Food security built on farmer support and supply, not Band-Aid price caps.',
    'Extractive wealth that pays the communities that host it.',
    'Jobs with dignity and livable wages here at home.',
  ],
  fil: [
    'Pondong pangkalusugan na nagpoprotekta sa pasyente at health workers, hindi ginagawang pork barrel.',
    'Pambansang budget na bukas at mababasa nang linya-por-linya ng bawat mamamayan.',
    'Seguridad sa pagkain na nakatayo sa suporta sa magsasaka at suplay, hindi sa pakitang-taong slogan.',
    'Yaman mula sa pagmimina na tapat na nagbabayad sa mga komunidad at kalikasan.',
    'Marangal na trabaho at sapat na sahod para sa kabataan at manggagawang Pilipino.',
  ],
}

export function Why2028({ onOpenCV }: Why2028Props) {
  const { isFil } = useLanguage()
  const activeProofs = isFil ? recordProofs.fil : recordProofs.en
  const activeFights = isFil ? fights.fil : fights.en

  return (
    <section id="why" className="relative overflow-hidden border-b border-line/25 py-20 sm:py-28">
      <div className="shell relative">
        <SectionHeading
          index="02"
          eyebrow={isFil ? 'Ang tindig' : 'Why she is running'}
          accent="crimson"
          title={
            isFil ? (
              <>
                Hindi artista. Hindi dinastiya.
                <br />
                Isang <span className="serif-italic text-crimson">public finance professor.</span>
              </>
            ) : (
              <>
                Not a celebrity. Not a dynasty.
                <br />
                A <span className="serif-italic text-crimson">public finance professor.</span>
              </>
            )
          }
          description={
            isFil
              ? 'Ang Senado ang sumusulat ng pambansang budget, nagtatakda ng buwis, at nagbabantay sa pondo ng PhilHealth, agrikultura, at serbisyo publiko. Kailangan natin sa loob ng Senado ang isang eksperto na alam kung saan itinatago ang pondo — at sa taumbayan lang mananagot.'
              : 'The Senate writes the national budget, taxes your paycheck, and oversees PhilHealth, food supply, and public services. Filipinos deserve someone in that room who knows where the money is hidden — and answers only to the public.'
          }
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="card grain-card flex h-full flex-col rounded-[1.5rem] p-7 sm:p-8">
              <div className="flex items-center gap-2">
                <FileCheck2 className="h-4 w-4 text-emerald" aria-hidden="true" />
                <span className="label-mono text-muted">
                  {isFil ? 'Ang rekord' : 'The track record'}
                </span>
              </div>
              <p className="mt-4 font-display text-[1.55rem] font-bold leading-[1.14] text-ink">
                {isFil ? 'Nanindigan na bago pa kumandidato.' : 'Tested before asking for your vote.'}
              </p>
              <p className="mt-3 text-[0.9375rem] leading-[1.7] text-muted">
                {isFil
                  ? 'Hindi siya naghintay ng posisyon sa Senado bago kumilos. Mula sa Department of Finance hanggang sa Supreme Court, dala niya ang mga resibo ng tapat na pamamahala.'
                  : 'She did not wait for a Senate seat to fight for public money. From the Department of Finance to the Supreme Court, her record is documented in public filings and peer-reviewed research.'}
              </p>

              <ul className="mt-5 space-y-3.5 border-y border-line/25 py-5">
                {activeProofs.map((proof) => (
                  <li key={proof} className="flex items-start gap-3 text-[0.9375rem] leading-[1.65] text-ink/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" aria-hidden="true" />
                    <span>{proof}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={onOpenCV}
                className="group mt-auto inline-flex min-h-[44px] items-center gap-2 pt-5 text-[0.8125rem] font-bold text-ink transition hover:text-crimson"
              >
                <FileCheck2 className="h-4 w-4 text-emerald" aria-hidden="true" />
                {isFil ? 'Buksan ang 19-pahina na source CV' : 'Open the 19-page source CV'}
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={80}>
            <div className="flex h-full flex-col rounded-[1.5rem] border border-line/30 bg-panel p-7 shadow-card sm:p-8">
              <div className="flex items-center gap-2">
                <Landmark className="h-4 w-4 text-amber" aria-hidden="true" />
                <span className="label-mono text-muted">
                  {isFil ? 'Ang mga laban' : 'The fights'}
                </span>
              </div>
              <p className="mt-4 font-display text-[1.55rem] font-bold leading-[1.14] text-ink">
                {isFil ? 'Limang laban. Isang prinsipyo.' : 'Five fights. One throughline.'}
              </p>
              <p className="mt-3 text-[0.9375rem] leading-[1.7] text-muted">
                {isFil
                  ? 'Sino ang nakikinabang, sino ang nagbabayad ng gastos, at sino ang pinapayagang makakita sa libro ng bayan?'
                  : 'Who captures the value, who bears the cost, and who gets to see the books?'}
              </p>

              <ul className="mt-5 divide-y divide-line/25 border-y border-line/25">
                {activeFights.map((fight, index) => (
                  <li key={fight} className="flex items-start gap-3 py-3.5">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink font-mono text-[0.6875rem] font-bold text-canvas">
                      0{index + 1}
                    </span>
                    <span className="text-[0.9375rem] leading-[1.7] text-ink">{fight}</span>
                  </li>
                ))}
              </ul>

              <a href="#agenda" className="group mt-5 inline-flex min-h-[44px] items-center gap-1.5 text-[0.8125rem] font-bold text-ink transition hover:text-crimson">
                {isFil ? 'Basahin ang 2028 agenda' : 'Read the 2028 agenda'}
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-5">
          <figure className="on-inverse relative overflow-hidden rounded-[1.5rem] border border-line/30 bg-ink p-7 text-canvas shadow-lift sm:p-9">
            <Quote className="h-9 w-9 text-amber" aria-hidden="true" />
            <blockquote className="mt-4 max-w-4xl font-serif text-[clamp(1.6rem,3.6vw,2.8rem)] italic leading-[1.22]">
              “The number one consideration for me when I said yes to him is that regardless
              of who’s in Malacañang, the interest of the people remains the same.”
            </blockquote>
            <figcaption className="mt-6 flex flex-wrap items-center gap-2 text-[0.75rem] leading-relaxed text-canvas/65">
              <ShieldCheck className="h-4 w-4 text-emerald" aria-hidden="true" />
              Cielo Magno · 24 Oras interview, GMA Integrated News, Sept. 12, 2023
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="mt-5">
          <SenateBallotStrategy />
        </Reveal>

        <Reveal className="mt-5" delay={80}>
          <div className="grid gap-4 rounded-[1.5rem] border border-amber/25 bg-amber/5 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
            <div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-amber" aria-hidden="true" />
                <span className="label-mono text-amber">
                  {isFil ? 'Ang panawagan' : 'The call'}
                </span>
              </div>
              <p className="mt-2 font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
                {isFil
                  ? 'Nasa laban na siya. Tayo naman.'
                  : 'She’s in the fight. Now it’s our turn.'}
              </p>
              <p className="mt-2.5 max-w-2xl text-[0.9375rem] leading-[1.7] text-muted">
                {isFil
                  ? 'Ang kampanya sa Senado ay dapat magsimula sa rekord, plano, at paninindigan. Tumatakbo si Dr. Cielo Magno sa 2028 — dalhin natin ang mga resibo sa bawat kampus, barangay, at group chat.'
                  : 'A Senate campaign should start with a record, a plan, and a reason. Dr. Cielo Magno is running in 2028 — bring the receipts to your campus, your barangay, and your group chat.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              <a href="#agenda" className="btn btn-primary">
                {isFil ? 'Ang 2028 agenda' : 'The 2028 agenda'}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#youth-join" className="btn btn-ghost">
                {isFil ? 'Sumali sa movement' : 'Join the wave'}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
