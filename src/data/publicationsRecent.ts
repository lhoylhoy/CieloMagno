import type { Publication } from './types'
import {
  alburo,
  arcenas,
  capistrano,
  cases,
  deDios,
  gatmaytan,
  kraft,
  magno,
  monsod,
  punongbayan,
  quizon,
  solon,
  tan,
} from './publicationAuthors'

export const publicationsRecent: Publication[] = [
  {
    id: 'disaster-preparedness-fiscal-transfers',
    title:
      'Incentivizing Disaster Preparedness: The Role of Intergovernmental Fiscal Transfers and Participatory Governance',
    authors: [magno, gatmaytan],
    year: 2026,
    type: 'Journal article',
    outlet: 'Philippine Political Science Journal',
    volume: '46',
    pages: '183–213',
    topics: ['Climate & disaster', 'Fiscal policy & tax', 'Governance & transparency'],
    summary:
      'Examines how intergovernmental fiscal transfers and participatory governance can create incentives for disaster preparedness rather than relying on post-disaster response alone.',
    archivePage: 9,
    featured: true,
  },
  {
    id: 'constitution-hand-waving',
    title:
      'How to Change a Constitution by Hand-Waving (Or, the Unbearable Lightness of Evidence in Support of Lifting Foreign Ownership Restrictions)',
    authors: [monsod, kraft, magno, punongbayan, solon, tan, arcenas, alburo, deDios],
    year: 2024,
    type: 'Working paper',
    outlet: 'UP School of Economics Discussion Paper 2024-01',
    publisher: 'University of the Philippines School of Economics',
    topics: ['Constitutional law', 'Governance & transparency', 'Fiscal policy & tax'],
    summary:
      'A review of the evidence invoked in debates about lifting foreign ownership restrictions in the Philippine Constitution.',
    archivePage: 9,
    featured: true,
  },
  {
    id: 'constitution-hand-waving-rejoinder',
    title:
      'How to change a constitution by hand-waving (Or, the unbearable lightness of evidence in support of lifting foreign ownership restrictions): A Rejoinder',
    authors: [monsod, kraft, magno, punongbayan, solon, tan, arcenas, alburo, deDios],
    year: 2024,
    type: 'Working paper',
    outlet: 'UP School of Economics Discussion Paper 2024-01',
    publisher: 'University of the Philippines School of Economics',
    topics: ['Constitutional law', 'Governance & transparency'],
    summary:
      'A rejoinder to responses on the evidence behind constitutional foreign-ownership reform.',
    archivePage: 10,
  },
  {
    id: 'jurisprudence-rules-mutable-game',
    title: 'Jurisprudence as a Rules Mutable Game',
    authors: [gatmaytan, magno],
    year: 2023,
    type: 'Journal article',
    outlet: 'Philippine Law Journal',
    volume: '97',
    pages: '1–38',
    topics: ['Constitutional law', 'Governance & transparency'],
    summary:
      'Frames jurisprudence as a rules-based, mutable game and examines how legal interpretation changes over time.',
    archivePage: 10,
  },
  {
    id: 'pharmaceutical-competition',
    title: 'Pharmaceutical Competition in the Philippines',
    authors: [magno],
    year: 2022,
    type: 'Policy brief',
    outlet: 'PCC Discussion Paper No. 01, Series of 2022',
    publisher: 'Philippine Competition Commission',
    url: 'https://www.phcc.gov.ph/pcc-discussion-paper-2022-01-pharmaceutical-competition-in-the-philippines/',
    topics: ['Health economics', 'Competition & regulation'],
    summary:
      'Maps competition concerns in the Philippine pharmaceutical sector and identifies potential policy and regulatory responses.',
    archivePage: 10,
    featured: true,
  },
  {
    id: 'institutions-investment-policies',
    title:
      'Role of Institutions, Investment Policies, and Macroeconomic Conditions on Attracting Foreign Investments',
    authors: [magno, quizon],
    year: 2022,
    type: 'Policy brief',
    outlet: 'UP CIDS Policy Brief',
    publisher: 'University of the Philippines Center for Integrative and Development Studies',
    url: 'https://cids.up.edu.ph/policy-brief/role-institutions-investment-policies-macroeconomic-conditions-attracting-foreign-investments/',
    topics: ['Fiscal policy & tax', 'Governance & transparency'],
    summary:
      'Looks at how institutions, investment policies, and macroeconomic conditions shape the attraction of foreign investment.',
    archivePage: 10,
  },
  {
    id: 'lgu-fiscal-performance',
    title:
      'Breaking Down the LGU Fiscal Performance: A Study on the Budget Utilization Rate in Decentralization, Digitalization, and Development',
    authors: [magno, capistrano, cases],
    year: 2022,
    type: 'Report',
    outlet:
      'A Report on the Mandanas–Garcia Supreme Court Ruling, United Nations Development Programme',
    publisher: 'United Nations Development Programme',
    topics: ['Local public finance', 'Governance & transparency'],
    summary:
      'Studies local government budget utilization rates in the context of the Mandanas–Garcia Supreme Court ruling on decentralization.',
    archivePage: 10,
    featured: true,
  },
]
