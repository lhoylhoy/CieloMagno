import {
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  GraduationCap,
  MapPin,
  Newspaper,
  Users,
} from 'lucide-react'
import { campaign } from '../data/campaignData'
import { profile } from '../data/profileData'
import { linktreeUrl, socialHeadline } from '../data/socialAccountsData'
import { useCopy } from '../hooks/useCopy'
import { useLanguage } from '../hooks/useLanguage'
import { Reveal } from './Reveal'
import { SocialChannelsGrid } from './SocialChannelsGrid'

const invites = [
  {
    icon: GraduationCap,
    label: { en: 'For classrooms', fil: 'Para sa mga klase at kampus' },
    text: {
      en: 'Guest lectures, workshops, and thesis conversations.',
      fil: 'Guest lectures, workshops, at talakayan sa unibersidad.',
    },
    subject: 'Guest lecture invitation',
    accent: 'text-amber',
  },
  {
    icon: Newspaper,
    label: { en: 'For newsrooms', fil: 'Para sa media at mamamahayag' },
    text: {
      en: 'Interviews on fiscal policy, mining, and open government.',
      fil: 'Panayam tungkol sa budget, buwis, pagmimina, at open government.',
    },
    subject: 'Media interview request',
    accent: 'text-crimson',
  },
  {
    icon: Users,
    label: { en: 'For organizers', fil: 'Para sa mga organizer at chapter' },
    text: {
      en: 'Panels, campaigns, and public-interest convenings.',
      fil: 'Town halls, sectoral consultations, at pagbubuo ng lokal na chapter.',
    },
    subject: 'Campaign & speaking invitation',
    accent: 'text-emerald',
  },
]

export function ContactSection() {
  const { isFil, lang } = useLanguage()
  const { copied, copy } = useCopy()
  const headline = socialHeadline[lang]
  const contactEmail = campaign.contactEmail || profile.email

  const mailto = (subject: string) =>
    `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`

  return (
    <section
      id="contact"
      className="on-inverse relative overflow-hidden bg-ink py-20 text-canvas sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full bg-crimson/20 blur-[130px]" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-amber/15 blur-[120px]" />
      </div>
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-canvas/20 to-transparent"
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="label-mono text-amber">08</span>
                <span className="h-px w-9 bg-canvas/20" aria-hidden="true" />
                <span className="label-mono text-canvas/60">
                  {isFil
                    ? 'Media, imbitasyon at pakikipagtulungan'
                    : 'Press, invites & partnerships'}
                </span>
              </div>
              <h2 className="display-tight mt-5 text-[1.75rem] leading-[0.94] sm:text-[clamp(2.2rem,5.2vw,4.5rem)]">
                {isFil ? (
                  <>
                    Dalhin ang usapan
                    <br />
                    sa inyong <span className="serif-italic text-amber">komunidad.</span>
                  </>
                ) : (
                  <>
                    Bring the conversation
                    <br />
                    into the <span className="serif-italic text-amber">room.</span>
                  </>
                )}
              </h2>
              <p className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-canvas/70">
                {isFil
                  ? 'Guest lectures, panayam sa media, kolaborasyon sa pananaliksik, town halls, at pagbubuo ng lokal na koalisyon para sa 2028. Bukas ang linya — at bukas din ang mga resibo.'
                  : 'Guest lectures, media interviews, research collaborations, campaign conversations, and public-interest panels. The inbox is open — and the receipts are too.'}
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {invites.map((invite, index) => {
                const Icon = invite.icon
                return (
                  <Reveal key={invite.label.en} delay={index * 70}>
                    <a
                      href={mailto(invite.subject)}
                      className="group flex h-full flex-col rounded-2xl border border-canvas/15 bg-canvas/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber/40 hover:bg-canvas/10"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-canvas/15 bg-canvas/5">
                        <Icon className={`h-4 w-4 ${invite.accent}`} aria-hidden="true" />
                      </span>
                      <p className="mt-4 font-display text-[0.9375rem] font-bold leading-snug text-canvas">
                        {isFil ? invite.label.fil : invite.label.en}
                      </p>
                      <p className="mt-2 text-[0.8125rem] leading-[1.6] text-canvas/65">
                        {isFil ? invite.text.fil : invite.text.en}
                      </p>
                      <span className="mt-auto inline-flex min-h-[44px] items-center gap-1 pt-4 text-[0.75rem] font-bold uppercase tracking-[0.06em] text-canvas/80 transition group-hover:text-amber">
                        {isFil ? 'Magpadala ng email' : 'Start an email'}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </a>
                  </Reveal>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#youth-join" className="btn btn-accent">
                {isFil ? 'Sumama sa Koalisyon' : 'Join the 2028 Coalition'}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={mailto('Cielo 2028 — Campaign & Public Inquiry')} className="btn btn-amber">
                {isFil ? 'Mag-email kay Dr. Magno' : 'Email Dr. Magno'}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => void copy(contactEmail)}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-canvas/20 px-4 text-[0.8125rem] font-bold text-canvas transition hover:bg-canvas/10"
                aria-live="polite"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
                {copied ? (isFil ? 'Nakopya na' : 'Copied') : isFil ? 'Kopyahin ang email' : 'Copy email'}
              </button>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <Reveal delay={120}>
              <div className="rounded-[1.75rem] border border-canvas/15 bg-canvas/5 p-6 shadow-[0_30px_80px_-50px_rgb(0_0_0/0.8)] backdrop-blur sm:p-7">
                <div className="flex items-center justify-between border-b border-canvas/10 pb-4">
                  <span className="label-mono text-canvas/65">
                    {isFil ? 'Direktang linya' : 'Direct line'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-2 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-emerald">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald" aria-hidden="true" />
                    Open
                  </span>
                </div>

                <p className="mt-5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-canvas/65">
                  Email
                </p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-1 inline-flex min-h-[44px] items-center break-all font-display text-[1.3rem] font-bold leading-tight text-canvas transition hover:text-amber sm:text-[1.5rem]"
                >
                  {contactEmail}
                </a>

                <dl className="mt-6 space-y-4 border-t border-canvas/10 pt-5">
                  <div>
                    <dt className="label-mono text-canvas/65">Academic office</dt>
                    <dd className="mt-1.5 text-[0.875rem] leading-relaxed text-canvas/85">{profile.room}</dd>
                  </div>
                  <div>
                    <dt className="label-mono text-canvas/65">Academic affiliation</dt>
                    <dd className="mt-1.5 text-[0.875rem] leading-[1.65] text-canvas/85">
                      {profile.affiliation}
                    </dd>
                  </div>
                  <div>
                    <dt className="label-mono text-canvas/65">Based in</dt>
                    <dd className="mt-1.5 flex items-center gap-1.5 text-[0.875rem] text-canvas/85">
                      <MapPin className="h-4 w-4 text-amber" aria-hidden="true" />
                      {profile.location}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 rounded-xl border border-canvas/10 bg-canvas/5 p-4">
                  <p className="text-[0.75rem] leading-[1.65] text-canvas/65">
                    {isFil
                      ? 'Walang tracking. Bubuksan ng mga button na ito ang iyong email app na may nakahanda nang subject line. Para sa media o imbitasyon sa kampus/komunidad, isama ang petsa at organisasyon sa subject line.'
                      : 'No tracking. These buttons open your email app with the subject line already set. For press deadlines or campus chapter invitations, include your date and organization in the subject line.'}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Verified Social Media Channels Showcase */}
        <div
          id="social-channels"
          className="mt-16 scroll-mt-[5.5rem] border-t border-canvas/10 pt-12 sm:mt-20 sm:pt-16"
        >
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="label-mono text-amber">{headline.kicker}</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald/30 bg-emerald/15 px-2 py-1 font-mono text-[0.6875rem] font-bold text-emerald">
                    <Check className="h-3 w-3" aria-hidden="true" />
                    {isFil ? 'Beripikadong Accounts' : 'Verified Accounts'}
                  </span>
                </div>
                <h3 className="display-tight mt-2 text-2xl font-bold text-canvas sm:text-3xl">
                  {headline.title}
                </h3>
                <p className="mt-2 max-w-2xl text-[0.9375rem] leading-[1.7] text-canvas/70">
                  {headline.subtitle}
                </p>
              </div>

              <a
                href={linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-full border border-canvas/20 bg-canvas/10 px-4 text-[0.8125rem] font-bold text-amber transition hover:border-amber/40 hover:bg-canvas/20 hover:text-canvas sm:self-auto"
              >
                <span>linktr.ee/cielomagno</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <SocialChannelsGrid className="mt-8" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
