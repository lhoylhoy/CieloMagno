import type { Audience, SpeakingEngagement } from './types'
import { buildEngagements } from './engagementUtils'
import { internationalSeedsA } from './engagementsInternationalA'
import { internationalSeedsB } from './engagementsInternationalB'
import { domesticSeedsA } from './engagementsDomesticA'
import { domesticSeedsB } from './engagementsDomesticB'
import { domesticSeedsC } from './engagementsDomesticC'
import { domesticSeedsD } from './engagementsDomesticD'

export const internationalEngagements: SpeakingEngagement[] = buildEngagements(
  [...internationalSeedsA, ...internationalSeedsB],
  'intl',
)

export const domesticEngagements: SpeakingEngagement[] = buildEngagements(
  [...domesticSeedsA, ...domesticSeedsB, ...domesticSeedsC, ...domesticSeedsD],
  'ph',
)

export const speakingEngagements: SpeakingEngagement[] = [
  ...internationalEngagements,
  ...domesticEngagements,
].sort((a, b) => b.sortKey - a.sortKey)

export const engagementYears: number[] = Array.from(
  new Set(speakingEngagements.map((engagement) => engagement.year)),
).sort((a, b) => b - a)

export const engagementAudiences: Audience[] = [
  'Students & youth',
  'Policy & governance',
  'Industry & business',
  'Media & civil society',
  'Academe',
]

export const internationalCities: string[] = Array.from(
  new Set(
    internationalEngagements
      .filter(
        (engagement) =>
          engagement.location !== 'Virtual' && engagement.location !== 'Regional',
      )
      .map((engagement) => engagement.location.split(',')[0]),
  ),
).sort((a, b) => a.localeCompare(b))

export const internationalRegionCount = 5
