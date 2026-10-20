import type { BudgetPriority, BudgetScenario } from './types'

export const budgetScenarios: BudgetScenario[] = [
  {
    id: 'philhealth',
    amount: '₱89.9B',
    label: 'PhilHealth excess funds',
    period: '2024',
    context:
      'Unused PhilHealth subsidies were transferred to unprogrammed appropriations in the national budget.',
    answer: 'red-flag',
    verdict:
      'A Supreme Court petition questioned the transfer’s constitutionality under the Universal Health Care Act. Cielo Magno was among the petitioners.',
    sourceLabel: 'Inquirer · Aug. 2, 2024',
    sourceUrl:
      'https://newsinfo.inquirer.net/1968876/petition-filed-at-sc-vs-philhealth-fund-transfer-cites-constitutionality',
    accent: 'crimson',
  },
  {
    id: 'ovp',
    amount: '₱125M',
    label: 'OVP confidential funds',
    period: '2023',
    context:
      'The ₱125-million confidential and intelligence funds transferred to the Office of the Vice President in 2022 were spent in 11 days. The public can see the total, but not the line-item purpose.',
    answer: 'red-flag',
    verdict:
      'Cielo Magno was among the petitioners — with Christian Monsod, Barry Gutierrez, and others — asking the Supreme Court to declare the 2022 ₱125-million confidential funds transfer to the OVP unconstitutional and to order its return. The case is a challenge, not a conviction.',
    sourceLabel: 'Philstar · Nov. 8, 2023',
    sourceUrl:
      'https://www.philstar.com/headlines/2023/11/08/2309742/sc-asked-declare-saras-secret-funds-unconstitutional',
    accent: 'amber',
  },
  {
    id: 'akap',
    amount: '₱26B',
    label: 'AKAP lump sum',
    period: '2025',
    context:
      'A single program allocation in the 2025 General Appropriations Act, challenged for how it was inserted and itemized.',
    answer: 'red-flag',
    verdict:
      'A 2025 petition asked the Supreme Court to declare the ₱26-billion AKAP allocation and other budget provisions unconstitutional.',
    sourceLabel: 'News5 · July 3, 2025',
    sourceUrl:
      'https://news.tv5.com.ph/breaking/read/groups-professors-ask-sc-to-declare-parts-of-2025-budget-unconstitutional',
    accent: 'emerald',
  },
  {
    id: 'gaa',
    amount: 'Public',
    label: 'The 2025 GAA',
    period: '2025',
    context:
      'The General Appropriations Act is published by the Department of Budget and Management.',
    answer: 'with-receipt',
    verdict:
      'The document is public. The next question is whether every peso is itemized, traceable, and spent the way the law says. Publication is the start of scrutiny, not the end.',
    sourceLabel: 'DBM · 2025 GAA',
    sourceUrl:
      'https://www.dbm.gov.ph/index.php/budget-documents/2025/2025-general-appropriations-act',
    accent: 'blue',
  },
  {
    id: 'dynasty',
    amount: 'No law',
    label: 'Political dynasty prohibition',
    period: '1987 → 2025',
    context:
      'The 1987 Constitution says the State shall prohibit political dynasties. Congress has not passed the enabling law.',
    answer: 'red-flag',
    verdict:
      'Cielo Magno filed a petition for certiorari and mandamus asking the Supreme Court to compel Congress to pass the law. The Constitution names the duty; the statute is still missing.',
    sourceLabel: 'Supreme Court · Apr. 8, 2025',
    sourceUrl:
      'https://sc.judiciary.gov.ph/press-briefer-april-08-2025/',
    accent: 'crimson',
  },
]

export const budgetPriorities: BudgetPriority[] = [
  {
    id: 'health',
    label: 'Kalusugan',
    description: 'Protect PhilHealth and make health benefits real.',
    accent: 'crimson',
  },
  {
    id: 'budget',
    label: 'Budget transparency',
    description: 'Kill lump sums and ghost projects.',
    accent: 'amber',
  },
  {
    id: 'food',
    label: 'Pagkain at magsasaka',
    description: 'Invest in supply before price caps.',
    accent: 'emerald',
  },
  {
    id: 'wealth',
    label: 'Yaman ng bayan',
    description: 'Make extractives pay their fair share.',
    accent: 'blue',
  },
  {
    id: 'youth',
    label: 'Kabataan at sahod',
    description: 'Build local jobs with dignity.',
    accent: 'crimson',
  },
]

export const budgetQuizNote =
  'This is a civic-literacy exercise, not a legal finding. The cases below are public petitions and public documents. Read the sources.'
