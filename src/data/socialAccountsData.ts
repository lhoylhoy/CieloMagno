import type { SocialAccount } from './types'

/** Central hub that lists every verified profile in one place. */
export const linktreeUrl = 'https://linktr.ee/cielomagno'

/**
 * Platforms that publish campaign content directly. Linktree is intentionally
 * excluded: it is the hub that points to these channels, not a channel itself.
 */
export const officialSocialPlatforms: SocialAccount['platform'][] = [
  'Facebook',
  'TikTok',
  'X',
  'Instagram',
  'YouTube',
]

/**
 * Audited October 2026 against the live profiles. The active identity is
 * `profcielomagno` on TikTok, X, Instagram, and YouTube; Facebook remains
 * `cielomagno`. The Linktree hub still lists older handles, so update the hub
 * there before changing these URLs back.
 */
export const verifiedSocialAccounts: SocialAccount[] = [
  {
    id: 'facebook',
    platform: 'Facebook',
    handle: 'cielomagno',
    displayHandle: 'facebook.com/cielomagno',
    url: 'https://www.facebook.com/cielomagno',
    label: {
      en: 'Facebook',
      fil: 'Facebook',
    },
    description: {
      en: 'Official campaign statements, budget breakdowns, press releases, and public forums.',
      fil: 'Opisyal na pahayag ng kampanya, pagsusuri sa budget, press releases, at talakayan sa taumbayan.',
    },
    actionLabel: {
      en: 'Follow on Facebook',
      fil: 'I-follow sa Facebook',
    },
    verified: true,
    featured: true,
    accent: 'blue',
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    handle: '@profcielomagno',
    displayHandle: '@profcielomagno',
    url: 'https://www.tiktok.com/@profcielomagno',
    label: {
      en: 'TikTok',
      fil: 'TikTok',
    },
    description: {
      en: 'Bite-sized economic lessons, student Q&As, and #TaxNgInaMoBantayanMo explainers.',
      fil: 'Maikling aralin sa ekonomiya, sagot sa estudyante, at #TaxNgInaMoBantayanMo explainers.',
    },
    actionLabel: {
      en: 'Follow on TikTok',
      fil: 'I-follow sa TikTok',
    },
    verified: true,
    featured: true,
    accent: 'crimson',
  },
  {
    id: 'x',
    platform: 'X',
    handle: '@profcielomagno',
    displayHandle: '@profcielomagno',
    url: 'https://x.com/profcielomagno',
    label: {
      en: 'X (Twitter)',
      fil: 'X (Twitter)',
    },
    description: {
      en: 'Real-time fiscal data, supply-demand graphs, policy threads, and rapid fact-checks.',
      fil: 'Real-time na datos sa kaban ng bayan, supply-demand graphs, at agarang fact-checks.',
    },
    actionLabel: {
      en: 'Follow on X',
      fil: 'I-follow sa X',
    },
    verified: true,
    featured: true,
    accent: 'ink',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@profcielomagno',
    displayHandle: '@profcielomagno',
    url: 'https://www.instagram.com/profcielomagno',
    label: {
      en: 'Instagram',
      fil: 'Instagram',
    },
    description: {
      en: 'Classroom moments, student interaction, UP community life, and daily advocacy dispatch.',
      fil: 'Buhay sa loob ng silid-aralan, pakikisalamuha sa kabataan, at pang-araw-araw na adbokasiya.',
    },
    actionLabel: {
      en: 'Follow on Instagram',
      fil: 'I-follow sa Instagram',
    },
    verified: true,
    featured: true,
    accent: 'amber',
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    handle: '@Profcielomagno',
    displayHandle: '@Profcielomagno',
    url: 'https://www.youtube.com/@Profcielomagno',
    label: {
      en: 'YouTube',
      fil: 'YouTube',
    },
    description: {
      en: 'Full video lectures, broadcast interviews, and deep-dive economic hearings.',
      fil: 'Buong video lectures, panayam sa balita, at malalimang pagsusuri sa mga pagdinig sa Senado.',
    },
    actionLabel: {
      en: 'Subscribe on YouTube',
      fil: 'Mag-subscribe sa YouTube',
    },
    verified: true,
    featured: true,
    accent: 'crimson',
  },
  {
    id: 'linktree',
    platform: 'Linktree',
    handle: 'cielomagno',
    displayHandle: 'linktr.ee/cielomagno',
    url: linktreeUrl,
    label: {
      en: 'Linktree (Official Hub)',
      fil: 'Linktree (Opisyal na Hub)',
    },
    description: {
      en: 'All verified social links, latest interviews, and media features in one single link.',
      fil: 'Lahat ng verified links, pinakabagong panayam, at balita sa iisang opisyal na pahina.',
    },
    actionLabel: {
      en: 'Open Linktree Hub',
      fil: 'Buksan ang Linktree',
    },
    verified: true,
    featured: false,
    accent: 'emerald',
  },
]

export const socialHeadline = {
  en: {
    kicker: 'Verified Channels',
    title: 'Follow Dr. Cielo Magno',
    subtitle:
      'Join the conversation across her verified platforms. From real-time budget receipts to student classroom explainers, stay connected where policy happens.',
  },
  fil: {
    kicker: 'Opisyal at Beripikadong Channels',
    title: 'Sundan si Dr. Cielo Magno',
    subtitle:
      'Makisama sa talakayan sa kanyang mga beripikadong accounts. Mula sa resibo sa budget hanggang sa mga aralin sa klase, sundan ang tunay na diskurso para sa bayan.',
  },
}

