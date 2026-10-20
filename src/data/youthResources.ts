import type { IdeaCard, ToolkitResource } from './types'

export const ideaCards: IdeaCard[] = [
  {
    id: 'follow-the-money',
    title: 'Follow the money through every layer',
    idea:
      'A natural resource only becomes development when value is captured, shared, and spent well. The gap between a mine and a classroom is a policy choice, not an inevitability.',
    context:
      'A research thread distilled from work on mining fiscal regimes and subnational payments. Paraphrase, not a direct quote.',
    sourceIds: [
      'mining-fiscal-regime',
      'subnational-mining-payments',
      'mining-for-development-framework',
    ],
    archivePages: [11, 13],
    accent: 'amber',
  },
  {
    id: 'transparency-infrastructure',
    title: 'Transparency is infrastructure',
    idea:
      'Disclosure is not the finish line. It is the plumbing that lets citizens, courts, and journalists route a promise into a budget line.',
    context:
      'A research thread distilled from work on EITI compliance and open government. Paraphrase, not a direct quote.',
    sourceIds: ['corruption-civic-space'],
    archivePages: [11],
    accent: 'emerald',
  },
  {
    id: 'sticker-price',
    title: 'The sticker price is not the whole cost',
    idea:
      'Price caps and price tags can hide who is really paying: the supplier, the taxpayer, or the household at the counter.',
    context:
      'A research thread distilled from work on drug pricing and market competition. Paraphrase, not a direct quote.',
    sourceIds: ['drug-price-sensitivity', 'pharmaceutical-competition'],
    archivePages: [11, 10],
    accent: 'crimson',
  },
  {
    id: 'budget-public-argument',
    title: 'A budget is a public argument',
    idea:
      'Every line item is a decision about who counts. Reading it closely is a civic skill, not a technical specialty.',
    context:
      'A research thread distilled from work on local public finance and budget utilization. Paraphrase, not a direct quote.',
    sourceIds: ['sourcebook-local-public-finance', 'lgu-fiscal-performance'],
    archivePages: [11, 10],
    accent: 'blue',
  },
]

export const toolkitResources: ToolkitResource[] = [
  {
    id: 'read-a-paper',
    title: 'Read a paper in 15 minutes',
    description:
      'A repeatable method for getting the argument without getting lost in the appendix.',
    accent: 'amber',
    steps: [
      'Read the title and abstract. Write the question in one sentence.',
      'Find the data and the method. What is being compared, and to what?',
      'Read the results, then the limitations. What would make the finding wrong?',
      'Look for the policy claim. Is it supported by the result, or is it a leap?',
      'Write three sentences: question, finding, caveat. You now own the paper.',
    ],
  },
  {
    id: 'budget-watchdog',
    title: 'Budget watchdog starter kit',
    description:
      'The tabs to keep open when you want to follow public money from proposal to audit.',
    accent: 'crimson',
    links: [
      { label: 'Department of Budget and Management', href: 'https://www.dbm.gov.ph/' },
      { label: 'Commission on Audit', href: 'https://www.coa.gov.ph/' },
      { label: 'Philippine Statistics Authority', href: 'https://psa.gov.ph/' },
      { label: 'Freedom of Information portal', href: 'https://www.foi.gov.ph/' },
      { label: 'PH-EITI', href: 'https://ph-eiti.org/' },
    ],
  },
  {
    id: 'mining-money',
    title: 'Follow the mining money',
    description:
      'Start with disclosure, then move to contracts, ownership, and local spending.',
    accent: 'emerald',
    links: [
      { label: 'PH-EITI reports', href: 'https://ph-eiti.org/' },
      { label: 'EITI global standards', href: 'https://eiti.org/' },
      { label: 'Natural Resource Governance Institute', href: 'https://resourcegovernance.org/' },
      { label: 'Open Government Partnership', href: 'https://www.opengovpartnership.org/' },
    ],
  },
  {
    id: 'first-question',
    title: 'Build your first research question',
    description:
      'A good question is specific, answerable, and connected to a real decision.',
    accent: 'blue',
    steps: [
      'Name the decision: who chooses, and between what options?',
      'Name the outcome: what changes for whom?',
      'Name the comparison: compared with what, over what period?',
      'Name the data: what would you need, and who already collects it?',
      'Shrink it until it fits a semester — then start.',
    ],
  },
]
