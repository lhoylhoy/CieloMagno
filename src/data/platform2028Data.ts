import type { CampaignPillar } from './types'

export const platformPillars: CampaignPillar[] = [
  {
    id: 'kalusugan',
    number: '01',
    title: 'Kalusugan, Hindi Negosyo',
    shortTitle: 'Kalusugan',
    problem:
      'When the health insurance fund is treated as a budget plug, the bill does not disappear. It lands on patients, hospitals, and health workers.',
    plan:
      'Protect PhilHealth’s fund from diversion, enforce transparent procurement, and measure health outcomes — not just money spent.',
    receipt:
      'She was among the petitioners in the 2024 Supreme Court case against the ₱89.9-billion PhilHealth transfer to unprogrammed appropriations.',
    stat: '₱89.9B',
    statLabel: 'PhilHealth transfer challenged',
    sourceLabel: 'Inquirer · Aug. 2, 2024',
    sourceUrl:
      'https://newsinfo.inquirer.net/1968876/petition-filed-at-sc-vs-philhealth-fund-transfer-cites-constitutionality',
    accent: 'crimson',
    topic: 'Health economics',
    imageId: 'kalusugan',
    receiptImageId: 'supreme-court',
  },
  {
    id: 'budget',
    number: '02',
    title: 'Bawal ang Budol sa Budget',
    shortTitle: 'Budget',
    problem:
      'Lump sums, unprogrammed funds, and projects that exist only on paper make the budget impossible to follow — and easy to abuse.',
    plan:
      'Publish line-item spending in real time, open the data to scrutiny, and put consequences behind ghost projects and secret lump sums.',
    receipt:
      'She joined the 2025 petition challenging the ₱26-billion AKAP lump sum and other provisions of the 2025 General Appropriations Act.',
    stat: '₱26B',
    statLabel: 'AKAP lump sum challenged',
    sourceLabel: 'News5 · July 3, 2025',
    sourceUrl:
      'https://news.tv5.com.ph/breaking/read/groups-professors-ask-sc-to-declare-parts-of-2025-budget-unconstitutional',
    accent: 'amber',
    topic: 'Fiscal policy & tax',
    receiptImageId: 'supreme-court',
  },
  {
    id: 'pagkain',
    number: '03',
    title: 'Pagkain at Magsasaka',
    shortTitle: 'Pagkain',
    problem:
      'A price cap without a supply plan can protect the sticker price while emptying the shelf. Farmers still carry the cost of inputs, fuel, and weather.',
    plan:
      'Invest in irrigation, storage, logistics, and local production. Use price data before price controls — and support farmers before the crisis.',
    receipt:
      'On Sept. 1, 2023, she posted the supply-and-demand graph that led to her resignation. The argument was not abstract: it was about rice.',
    stat: '2023',
    statLabel: 'The graph that led to her exit',
    sourceLabel: 'Interaksyon · Sept. 8, 2023',
    sourceUrl:
      'https://interaksyon.philstar.com/politics-issues/2023/09/08/259905/cielo-magnos-exit-a-closer-look-at-facebook-post-that-sparked-her-dof-departure/',
    accent: 'emerald',
    topic: 'Competition & regulation',
    imageId: 'pagkain',
  },
  {
    id: 'yaman',
    number: '04',
    title: 'Yaman ng Bayan para sa Bayan',
    shortTitle: 'Yaman',
    problem:
      'Mining and extractive wealth can leave communities with the holes, the waste, and the health costs while the value leaves somewhere else.',
    plan:
      'Use a fair fiscal regime, enforce EITI transparency, require community consent, and make environmental rehabilitation real.',
    receipt:
      'She served on the EITI International Board, leads Bantay Kita, and built a body of research on mining fiscal regimes.',
    stat: 'EITI',
    statLabel: 'Global extractives board',
    sourceLabel: 'EITI · International Board',
    sourceUrl: 'https://eiti.org/',
    accent: 'blue',
    topic: 'Mining & extractives',
    imageId: 'yaman',
  },
  {
    id: 'kabataan',
    number: '05',
    title: 'Kabataan at Marangal na Sahod',
    shortTitle: 'Kabataan',
    problem:
      'Too many young workers are pushed into precarious jobs, unpaid internships, or the export of their own labor.',
    plan:
      'Build local manufacturing and digital industries, match training to real jobs, and enforce labor protections instead of celebrating endurance.',
    receipt:
      'She has spent 25+ years teaching economics and public finance — and arguing that the classroom should connect to the country’s payroll.',
    stat: '25+',
    statLabel: 'Years teaching the argument',
    sourceLabel: 'UPSE · Social Protection & Recovery Plan',
    sourceUrl: '#journey',
    accent: 'crimson',
    topic: 'COVID-19 recovery',
    imageId: 'kabataan',
  },
]
