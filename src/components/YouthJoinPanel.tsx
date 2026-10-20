import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Download,
  ExternalLink,
  HeartHandshake,
  Mail,
  Users,
} from 'lucide-react'
import { campaign } from '../data/campaignData'
import { coalitionSectors } from '../data/campaignTranslations'
import { profile } from '../data/profileData'
import { linktreeUrl } from '../data/socialAccountsData'
import {
  discussionQuestions,
  pledgeMessage,
  stickerPack,
  youthActions,
} from '../data/youthMovementData'
import type { YouthAction } from '../data/types'
import { useLanguage } from '../hooks/useLanguage'
import { getActionMilestone, usePledgeCounter } from '../hooks/usePledgeCounter'
import { CampaignSignup } from './CampaignSignup'
import { CopyButton } from './CopyButton'
import { Reveal } from './Reveal'
import { ShareButton } from './ShareButton'
import { SocialFollowBar } from './SocialFollowBar'
import { cn } from '../lib/cn'

const accentText = {
  crimson: 'text-crimson',
  amber: 'text-amber',
  emerald: 'text-emerald',
  blue: 'text-blue',
} as const

const accentBorder = {
  crimson: 'border-crimson/25 bg-crimson/5',
  amber: 'border-amber/25 bg-amber/5',
  emerald: 'border-emerald/25 bg-emerald/5',
  blue: 'border-blue/25 bg-blue/5',
} as const

function ActionCard({ action }: { action: YouthAction }) {
  return (
    <article className={cn('flex h-full flex-col rounded-2xl border p-5 sm:p-6', accentBorder[action.accent])}>
      <div className="flex items-center justify-between">
        <span className={cn('label-mono', accentText[action.accent])}>{action.cta}</span>
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
          {action.kind === 'copy' ? 'Copy' : action.kind === 'download' ? 'Free' : 'Read'}
        </span>
      </div>
      <h3 className="mt-3 font-display text-xl font-bold leading-tight text-ink">{action.title}</h3>
      <p className="mt-2 text-[0.9375rem] leading-[1.7] text-muted">{action.description}</p>

      <div className="mt-auto pt-5">
        {action.kind === 'download' && action.href ? (
          <a href={action.href} download className="btn btn-ghost btn-sm">
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            {action.cta}
          </a>
        ) : null}
        {action.kind === 'copy' && action.copyText ? (
          <CopyButton text={action.copyText} label={action.cta} copiedLabel="Copied" variant="ghost" compact />
        ) : null}
        {action.kind === 'link' && action.href ? (
          <a href={action.href} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
            {action.cta}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  )
}

interface YouthJoinPanelProps {
  initialSectorId?: string
}

export function YouthJoinPanel({ initialSectorId = 'all' }: YouthJoinPanelProps) {
  const { isFil } = useLanguage()
  const [pledged, setPledged] = useState(false)
  const [selectedSectorId, setSelectedSectorId] = useState(initialSectorId)
  const { count, record } = usePledgeCounter()
  const milestone = getActionMilestone(count, isFil)

  const activeSector =
    coalitionSectors.find((sector) => sector.id === selectedSectorId) ?? coalitionSectors[0]
  const contactEmail = campaign.contactEmail || profile.email

  return (
    <div className="space-y-6">
      <Reveal>
        <div className="rounded-[1.5rem] border border-line/30 bg-panel p-5 sm:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-crimson" aria-hidden="true" />
                <span className="label-mono text-crimson">
                  {isFil ? 'Koalisyon ng Taumbayan · 2028' : '2028 People’s Coalition'}
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">
                {isFil
                  ? 'Saan ka mang sektor, kasama ka sa laban.'
                  : 'Wherever you stand, there is a role for you in this campaign.'}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {isFil
                  ? 'Piliin ang iyong sektor para makakuha ng mensaheng pwedeng i-share o magsimula ng chapter sa inyong lugar.'
                  : 'Choose your sector to get a ready-to-share message or connect your local chapter with the campaign desk.'}
              </p>
            </div>
            <a
              href={linktreeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-sm shrink-0 self-start lg:self-auto"
            >
              {isFil ? 'Opisyal na Social Channels' : 'Official Social Channels'}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div
            className="mt-5 flex flex-wrap gap-2"
            role="group"
            aria-label={isFil ? 'Pumili ng sektor' : 'Select your sector'}
          >
            {coalitionSectors.map((sector) => {
              const active = sector.id === activeSector.id
              return (
                <button
                  key={sector.id}
                  type="button"
                  onClick={() => setSelectedSectorId(sector.id)}
                  aria-pressed={active}
                  className={cn(
                    'min-h-[44px] rounded-full border px-3.5 text-[0.8125rem] font-bold transition',
                    active
                      ? 'border-crimson bg-crimson text-on-crimson shadow-sm'
                      : 'border-line/25 bg-canvas/60 text-muted hover:border-line/50 hover:text-ink',
                  )}
                >
                  {isFil ? sector.label.fil : sector.label.en}
                </button>
              )
            })}
          </div>

          <div
            className={cn(
              'mt-4 rounded-2xl border p-5 transition',
              accentBorder[activeSector.accent],
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className={cn('label-mono', accentText[activeSector.accent])}>
                {isFil ? activeSector.tag.fil : activeSector.tag.en}
              </span>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
                {isFil ? activeSector.label.fil : activeSector.label.en}
              </span>
            </div>
            <p className="mt-2 text-[0.9375rem] leading-[1.7] text-ink/90">
              {isFil ? activeSector.pitch.fil : activeSector.pitch.en}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5 border-t border-line/25 pt-4">
              <ShareButton
                text={activeSector.shareMessage}
                label={isFil ? 'I-share sa grupo' : 'Share with your circle'}
                variant="accent"
                compact
              />
              <CopyButton
                text={activeSector.shareMessage}
                label={isFil ? activeSector.actionTitle.fil : activeSector.actionTitle.en}
                copiedLabel={isFil ? 'Nakopya na' : 'Message copied'}
                variant="ghost"
                compact
              />
              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(activeSector.emailSubject)}`}
                className="btn btn-ghost btn-sm"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                {isFil ? 'Magbuo ng chapter' : 'Organize a chapter'}
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="on-inverse relative h-full overflow-hidden rounded-[1.5rem] border border-line/30 bg-ink p-6 text-canvas sm:p-7">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-amber" aria-hidden="true" />
                <span className="label-mono text-canvas/60">
                  {isFil ? 'Ang unang alon' : 'The first wave'}
                </span>
              </div>
              <p className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">
                {isFil
                  ? 'Magsimula sa iyong komunidad. Hindi lang sa hashtag.'
                  : 'Start with your circle. Not a hashtag.'}
              </p>
              <p className="mt-2 text-[0.9375rem] leading-[1.7] text-canvas/70">
                {isFil
                  ? 'Hindi donasyon o personal data ang unang hiling — kundi usapang may limang tanong at malinaw na resibo.'
                  : 'The first ask is not a donation or a data drop. It is a conversation with five questions and a receipt.'}
              </p>

              <ul className="mt-5 space-y-2.5 border-t border-canvas/10 pt-4">
                {discussionQuestions.map((question) => (
                  <li key={question} className="flex items-start gap-2.5 text-[0.74rem] leading-relaxed text-canvas/75">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-amber" />
                    {question}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-canvas/10 bg-canvas/5 p-4">
                {pledged ? (
                  <div className="flex items-start gap-3" aria-live="polite">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald text-on-emerald">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold">
                        {isFil ? 'Kaisa ka na.' : 'You’re in.'}
                      </p>
                      <p className="mt-1 text-[0.75rem] leading-relaxed text-canvas/65">
                        {pledgeMessage}{' '}
                        {isFil
                          ? 'I-share ito sa inyong group chat at sundan ang opisyal na channels.'
                          : 'Share this with your circle and follow the official campaign channels.'}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <ShareButton
                          text={pledgeMessage}
                          label={isFil ? 'I-share ang panata' : 'Share the pledge'}
                          variant="amber"
                          compact
                        />
                        <CopyButton
                          text={pledgeMessage}
                          label={isFil ? 'Kopyahin ang panata' : 'Copy the pledge'}
                          copiedLabel={isFil ? 'Nakopya na' : 'Pledge copied'}
                          variant="ghost"
                          compact
                        />
                        <a
                          href={linktreeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-[44px] items-center gap-1 rounded-full border border-canvas/25 px-3.5 text-[0.75rem] font-bold text-canvas transition hover:bg-canvas/10"
                        >
                          {isFil ? 'Sundan sa Social Media' : 'Follow Official Channels'}
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-display text-sm font-bold">
                        {isFil ? 'Handa ka na bang sumama?' : 'Ready to stand with us?'}
                      </p>
                      <p className="mt-0.5 text-[0.75rem] leading-[1.6] text-canvas/65">
                        {isFil
                          ? 'Ipangako ang 2028 panata. Walang form, walang tracking.'
                          : 'Take the 2028 pledge. No form, no tracking.'}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setPledged(true)
                        record('Took the 2028 pledge')
                      }}
                      className="btn btn-amber btn-sm shrink-0"
                    >
                      {isFil ? 'Kaisa ako' : 'I’m in'}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>

              <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-canvas/60">
                <span>
                  {isFil
                    ? 'Zero-tracking na panata · i-share sa iyong komunidad'
                    : 'Zero-tracking pledge · share it with your circle'}
                </span>
                {count > 0 ? (
                  <span className="rounded-full border border-canvas/15 px-2 py-0.5 text-canvas/60">
                    {count} · {milestone.label}
                  </span>
                ) : null}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {youthActions.map((action, index) => (
              <Reveal key={action.id} delay={index * 70}>
                <ActionCard action={action} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-4" delay={200}>
            <div className="rounded-2xl border border-line/30 bg-panel p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-amber" aria-hidden="true" />
                    <span className="label-mono text-muted">Sticker pack</span>
                  </div>
                  <p className="mt-2 font-display text-lg font-bold text-ink">
                    {isFil
                      ? `${stickerPack.files.length} campaign stickers. Libreng i-print at i-share.`
                      : `${stickerPack.files.length} campaign stickers. Free to print & share.`}
                  </p>
                  <p className="mt-1 text-[0.8125rem] leading-[1.6] text-muted">
                    {isFil
                      ? 'Handang i-print para sa laptop, notebook, sasakyan, at bulletin board sa kampus o barangay.'
                      : 'Typographic, handmade, and ready to print for laptops, notebooks, and campus bulletin boards.'}
                  </p>
                </div>
                <a href={stickerPack.href} download className="btn btn-primary btn-sm shrink-0">
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  {stickerPack.label}
                </a>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {stickerPack.files.map((file, index) => (
                  <div
                    key={file}
                    className={cn(
                      'grid aspect-square place-items-center rounded-xl border p-3 text-center font-display text-[0.75rem] font-extrabold uppercase leading-tight tracking-tight',
                      index === 0 && 'border-crimson/30 bg-crimson text-on-crimson',
                      index === 1 && 'border-amber/40 bg-amber text-on-amber',
                      index === 2 && 'border-line/30 bg-night text-paper',
                      index === 3 && 'border-emerald/30 bg-emerald text-on-emerald',
                    )}
                  >
                    {file}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-4" delay={220}>
            <div className="rounded-2xl border border-line/30 bg-panel p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="label-mono text-crimson">
                      {isFil ? 'Online Movement' : 'Digital Coalition'}
                    </span>
                    <span className="font-mono text-[0.6875rem] uppercase tracking-wider text-muted">
                      {isFil ? 'Opisyal na Accounts' : 'Verified Accounts'}
                    </span>
                  </div>
                  <h4 className="mt-1 font-display text-base font-bold text-ink sm:text-lg">
                    {isFil
                      ? 'I-follow si Dr. Cielo Magno sa lahat ng platforms'
                      : 'Follow Dr. Cielo Magno across verified platforms'}
                  </h4>
                  <p className="mt-1 text-[0.8125rem] leading-[1.6] text-muted max-w-xl">
                    {isFil
                      ? 'I-follow sa Facebook, TikTok, X, Instagram, at YouTube para makatanggap ng pinakabagong budget receipts at mai-share sa inyong mga kaklase at komunidad.'
                      : 'Follow across Facebook, TikTok, X, Instagram, and YouTube to amplify budget receipts and economic decoders in your campuses and local chapters.'}
                  </p>
                </div>
                <div className="shrink-0">
                  <SocialFollowBar variant="light" size="md" />
                </div>
              </div>
            </div>
          </Reveal>

          <CampaignSignup />

          {campaign.contactEmail ? (
            <a href={`mailto:${campaign.contactEmail}`} className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 text-[0.8125rem] font-bold text-ink transition hover:text-crimson">
              {isFil ? 'Kontakin ang campaign desk' : 'Contact the campaign desk'}
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}
