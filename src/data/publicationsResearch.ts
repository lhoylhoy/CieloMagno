import type { Publication } from './types'
import { gatmaytan, guzman, magno, morillo } from './publicationAuthors'

export const publicationsResearch: Publication[] = [
  {
    id: 'judicial-assertiveness',
    title: 'Examining Judicial Assertiveness in the Philippine Supreme Court',
    authors: [magno],
    year: 2023,
    type: 'Working paper',
    outlet: 'PCED Working Paper',
    topics: ['Constitutional law', 'Governance & transparency'],
    summary:
      'Examines judicial assertiveness in the Philippine Supreme Court and how the Court exercises its role.',
    archivePage: 13,
  },
  {
    id: 'mining-human-capital',
    title: 'Large-Scale Mining and Human Capital: Evidence from the Philippines',
    authors: [magno, guzman],
    year: 2020,
    type: 'Working paper',
    outlet: 'Natural Resource Governance Institute Working Paper',
    topics: ['Mining & extractives', 'Health economics'],
    summary:
      'Investigates the relationship between large-scale mining and human capital outcomes in the Philippines.',
    archivePage: 13,
  },
  {
    id: 'mining-water-use',
    title: 'Case Studies on the Water Use of Large-Scale Mining in the Philippines',
    authors: [magno, morillo],
    year: 2020,
    type: 'Working paper',
    outlet: 'Natural Resource Governance Institute Working Paper',
    topics: ['Mining & extractives', 'Climate & disaster'],
    summary:
      'Presents case studies on water use by large-scale mining operations in the Philippines.',
    archivePage: 13,
  },
  {
    id: 'subnational-mining-payments',
    title: 'Subnational Fiscal Payments from Large-Scale Mining and Social Spending',
    authors: [magno],
    year: 2019,
    type: 'Working paper',
    outlet: 'PCED Working Paper',
    topics: ['Mining & extractives', 'Fiscal policy & tax', 'Local public finance'],
    summary:
      'Studies subnational fiscal payments from large-scale mining and how those payments relate to social spending.',
    archivePage: 13,
    featured: true,
  },
  {
    id: 'energy-costs-downstream',
    title:
      'Energy Costs and the Development of the Downstream Extractive Industry Sector: The Case of the Copper Industry',
    authors: [magno],
    year: 2018,
    type: 'Working paper',
    outlet: 'PCED Working Paper',
    topics: ['Mining & extractives', 'Energy'],
    summary:
      'Examines energy costs and the development of the downstream extractive industry sector, focusing on copper.',
    archivePage: 13,
  },
  {
    id: 'prescription-drug-demand',
    title:
      'Examining the Demand for Prescription Drugs: Physician Prescribing Behavior for Lipid-Lowering and Cardio-Selective Blocking Drugs',
    authors: [magno],
    year: 2017,
    type: 'Working paper',
    outlet: 'PCED Working Paper',
    topics: ['Health economics', 'Competition & regulation'],
    summary:
      'Examines physician prescribing behavior for lipid-lowering and cardio-selective blocking drugs.',
    archivePage: 13,
  },
  {
    id: 'judicial-appointments',
    title:
      'Averting Diversity: A Review of Nominations and Appointments to the Philippine Supreme Court (1988–2008)',
    authors: [gatmaytan, magno],
    year: 2012,
    type: 'Journal article',
    outlet: 'Asian Journal of Comparative Law',
    volume: '6',
    issue: '1',
    pages: 'Article 3',
    topics: ['Constitutional law', 'Governance & transparency'],
    summary:
      'Reviews nominations and appointments to the Philippine Supreme Court from 1988 to 2008, with attention to diversity on the bench.',
    archivePage: 11,
  },
]
