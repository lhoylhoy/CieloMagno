import { campaign } from '../data/campaignData'

export function PrivatePreviewBadge() {
  const isPublic =
    campaign.publicRelease && campaign.authorized && campaign.candidateConfirmed
  if (!import.meta.env.DEV || isPublic) return null

  return (
    <div
      data-testid="private-preview-badge"
      className="pointer-events-none fixed bottom-4 left-4 z-[110] hidden rounded-full border border-amber/40 bg-night/90 px-3 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-amber shadow-lift backdrop-blur sm:block"
    >
      Private review build · not for public release
    </div>
  )
}
