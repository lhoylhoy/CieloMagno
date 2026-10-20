import type {
  Audience,
  EngagementScope,
  SpeakingEngagement,
} from './types'

export interface EngagementSeed {
  role: string
  title: string
  venue: string
  location: string
  date: string
  scope: EngagementScope
  audience: Audience
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function engagementSortKey(date: string): number {
  const years = date.match(/\d{4}/g)
  const year = years ? Number(years[years.length - 1]) : 0
  const monthName = MONTHS.find((month) => date.includes(month))
  const month = monthName ? MONTHS.indexOf(monthName) + 1 : 1
  const dayMatch = date.match(/\b(\d{1,2})\b/)
  const day = dayMatch ? Number(dayMatch[1]) : 1
  return year * 10000 + month * 100 + day
}

export function buildEngagements(
  seeds: EngagementSeed[],
  prefix: string,
): SpeakingEngagement[] {
  return seeds.map((seed, index) => ({
    ...seed,
    id: `${prefix}-${String(index + 1).padStart(3, '0')}`,
    year: engagementSortKey(seed.date) > 0 ? Math.floor(engagementSortKey(seed.date) / 10000) : 0,
    sortKey: engagementSortKey(seed.date),
  }))
}
