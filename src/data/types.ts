export interface Author {
  given: string
  family: string
}

export type PublicationType =
  | 'Journal article'
  | 'Working paper'
  | 'Policy brief'
  | 'Report'
  | 'Conference paper'
  | 'Thesis'

export type Topic =
  | 'Mining & extractives'
  | 'Fiscal policy & tax'
  | 'Health economics'
  | 'Governance & transparency'
  | 'Local public finance'
  | 'Climate & disaster'
  | 'Competition & regulation'
  | 'Constitutional law'
  | 'COVID-19 recovery'
  | 'Energy'

export interface Publication {
  id: string
  title: string
  authors: Author[]
  year: number
  type: PublicationType
  outlet: string
  volume?: string
  issue?: string
  pages?: string
  doi?: string
  url?: string
  pdfUrl?: string
  publisher?: string
  topics: Topic[]
  /** Editorial context written for this portfolio — not the paper's abstract. */
  summary: string
  /** Page of the 19-page CV scan where this publication is listed (9–14). */
  archivePage: number
  featured?: boolean
}

export type EngagementScope = 'International' | 'Domestic'

export type Audience =
  | 'Students & youth'
  | 'Policy & governance'
  | 'Industry & business'
  | 'Media & civil society'
  | 'Academe'

export interface SpeakingEngagement {
  id: string
  role: string
  title: string
  venue: string
  location: string
  date: string
  year: number
  scope: EngagementScope
  audience: Audience
  sortKey: number
}


export interface CareerMilestone {
  id: string
  year: string
  period: string
  role: string
  org: string
  description: string
  highlights: string[]
  accent: 'crimson' | 'amber' | 'emerald' | 'blue'
}

export interface ExplainerSource {
  label: string
  href?: string
}

export interface Explainer {
  id: string
  number: string
  title: string
  kicker: string
  readTime: string
  plainTalk: string
  body: string[]
  whyItMatters: string[]
  myth: { myth: string; reality: string }
  terms: { term: string; definition: string }[]
  sourceIds: string[]
  archivePages: number[]
  accent: 'crimson' | 'amber' | 'emerald' | 'blue'
}

export interface IdeaCard {
  id: string
  title: string
  idea: string
  context: string
  sourceIds: string[]
  archivePages: number[]
  accent: 'crimson' | 'amber' | 'emerald' | 'blue'
}

export interface ToolkitResource {
  id: string
  title: string
  description: string
  steps?: string[]
  links?: { label: string; href: string }[]
  accent: 'crimson' | 'amber' | 'emerald' | 'blue'
}

export interface MediaColumn {
  id: string
  title: string
  outlet: string
  date: string
  year: number
  url?: string
  archived?: boolean
  coAuthors?: string
  archivePage: number
}

export interface Conversation {
  id: string
  title: string
  outlet: string
  date: string
  description: string
  url?: string
  archivePage: number
}


export interface ArchivePage {
  page: number
  label: string
  src: string
}

export interface Role {
  role: string
  org: string
  period: string
  note?: string
}

export interface Profile {
  name: string
  honorific: string
  credential: string
  tagline: string
  roleLine: string
  email: string
  room: string
  affiliation: string
  location: string
  shortBio: string
  bio: string[]
  focusAreas: string[]
  currentRoles: Role[]
  education: Role[]
  teaching: Role[]
  governmentRoles: Role[]
  globalLeadership: Role[]
  affiliations: Role[]
  awards: Role[]
  studentLeadership: Role[]
  programRoles: Role[]
}

export type CampaignAccent = 'crimson' | 'amber' | 'emerald' | 'blue'

export interface CampaignPillar {
  id: string
  number: string
  title: string
  shortTitle: string
  problem: string
  plan: string
  receipt: string
  stat: string
  statLabel: string
  sourceLabel: string
  sourceUrl: string
  accent: CampaignAccent
  topic?: Topic
  /** Optional key into the imageCredits manifest for a card header. */
  imageId?: string
  /** Optional image credit key for a compact legal/institutional receipt. */
  receiptImageId?: string
}

export interface ViralMoment {
  id: string
  date: string
  year: string
  title: string
  body: string
  quote?: string
  attribution?: string
  sourceLabel: string
  sourceUrl: string
  accent: CampaignAccent
  /** Optional key into the imageCredits manifest. */
  imageId?: string
}

export type BudgetAnswer = 'red-flag' | 'with-receipt'

export interface BudgetScenario {
  id: string
  amount: string
  label: string
  period: string
  context: string
  answer: BudgetAnswer
  verdict: string
  sourceLabel: string
  sourceUrl: string
  accent: CampaignAccent
}

export interface BudgetPriority {
  id: string
  label: string
  description: string
  accent: CampaignAccent
}

export type YouthActionKind = 'download' | 'copy' | 'link'

export interface YouthAction {
  id: string
  title: string
  description: string
  cta: string
  kind: YouthActionKind
  href?: string
  copyText?: string
  accent: CampaignAccent
}

export interface SocialAccount {
  id: string
  platform: 'Facebook' | 'TikTok' | 'Instagram' | 'YouTube' | 'X' | 'Linktree'
  handle: string
  displayHandle: string
  url: string
  label: { en: string; fil: string }
  description: { en: string; fil: string }
  actionLabel: { en: string; fil: string }
  verified: boolean
  featured?: boolean
  accent: 'crimson' | 'amber' | 'emerald' | 'blue' | 'ink'
}

/** Shared shape for campaign copy that switches with the EN / FIL toggle. */
export interface BilingualText {
  en: string
  fil: string
}

