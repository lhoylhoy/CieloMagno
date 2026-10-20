import { useEffect } from 'react'
import { campaign } from '../data/campaignData'

/**
 * Keeps the document-level release state aligned with campaignData.
 * The static index.html meta is still the first line of defense for crawlers;
 * this guard prevents accidental indexing during client-side review sessions.
 */
export function ReleaseGuard() {
  useEffect(() => {
    const isPublic =
      campaign.publicRelease && campaign.authorized && campaign.candidateConfirmed
    const content = isPublic
      ? 'index, follow'
      : 'noindex, nofollow, noarchive, nosnippet, noimageindex'

    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute('content', content)
    document
      .querySelector('meta[name="googlebot"]')
      ?.setAttribute('content', content)
    document.documentElement.dataset.campaignRelease = isPublic ? 'public' : 'private'
  }, [])

  return null
}
