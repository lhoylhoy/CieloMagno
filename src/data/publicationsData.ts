import type { Publication, Topic } from './types'
import { publicationsRecent } from './publicationsRecent'
import { publicationsMid } from './publicationsMid'
import { publicationsResearch } from './publicationsResearch'
import { publicationsClassic } from './publicationsClassic'
import { publicationsEarlier } from './publicationsEarlier'

export const publications: Publication[] = [
  ...publicationsRecent,
  ...publicationsMid,
  ...publicationsResearch,
  ...publicationsClassic,
  ...publicationsEarlier,
].sort((a, b) => b.year - a.year)

export const publicationTopics: Topic[] = [
  'Mining & extractives',
  'Fiscal policy & tax',
  'Health economics',
  'Governance & transparency',
  'Local public finance',
  'Climate & disaster',
  'Competition & regulation',
  'Constitutional law',
  'COVID-19 recovery',
  'Energy',
]

export const publicationTypes = [
  'Journal article',
  'Working paper',
  'Policy brief',
  'Report',
  'Conference paper',
  'Thesis',
] as const

export function findPublication(id: string): Publication | undefined {
  return publications.find((publication) => publication.id === id)
}

export const featuredPublications = publications.filter((publication) => publication.featured)
