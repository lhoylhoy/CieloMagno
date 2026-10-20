import type { Publication } from './types'
import {
  arcenas,
  bustamante,
  cantos,
  chua,
  domado,
  galvez,
  gatmaytan,
  johnson,
  magno,
  mccarthy,
  parks,
  schuler,
  staMaria,
} from './publicationAuthors'

export const publicationsClassic: Publication[] = [
  {
    id: 'corruption-civic-space',
    title:
      'Corruption and Civic Space: Contextual Factors Influencing EITI Compliance',
    authors: [magno, gatmaytan],
    year: 2017,
    type: 'Journal article',
    outlet: 'The Extractive Industries and Society',
    volume: '4',
    pages: '806–815',
    topics: ['Mining & extractives', 'Governance & transparency'],
    summary:
      'Examines contextual factors — including corruption and civic space — that influence compliance with the Extractive Industries Transparency Initiative.',
    archivePage: 11,
    featured: true,
  },
  {
    id: 'natural-resource-federalism',
    title:
      'Natural Resource Management and Federalism in the Philippines: Much Ado About Nothing?',
    authors: [arcenas, magno, bustamante],
    year: 2017,
    type: 'Journal article',
    outlet: 'Public Policy',
    volume: '16–17',
    pages: '15–27',
    topics: ['Mining & extractives', 'Fiscal policy & tax', 'Governance & transparency'],
    summary:
      'Asks whether federalism changes natural resource management in the Philippines, or merely rearranges the debate.',
    archivePage: 11,
  },
  {
    id: 'extractives-child-social-development',
    title:
      'Extractive Industries and the Financing of Child-Inclusive Social Development in the Philippines',
    authors: [magno],
    year: 2016,
    type: 'Report',
    outlet: 'United Nations Research Institute for Social Development (UNRISD)',
    publisher: 'UNRISD',
    topics: ['Mining & extractives', 'Fiscal policy & tax'],
    summary:
      'Explores how extractive industries can finance child-inclusive social development in the Philippines.',
    archivePage: 11,
  },
  {
    id: 'health-financing-assessment',
    title: 'An Assessment of Health Financing Process in the Philippines',
    authors: [magno],
    year: 2016,
    type: 'Report',
    outlet: 'Asia Pacific Network of People Living with HIV and AIDS (APN+), Bangkok',
    topics: ['Health economics', 'Fiscal policy & tax'],
    summary:
      'Assesses the health financing process in the Philippines, with attention to financing for HIV-related support.',
    archivePage: 13,
  },
  {
    id: 'mining-for-development-framework',
    title: 'The Mining for Development Framework for the Philippines',
    authors: [magno],
    year: 2015,
    type: 'Working paper',
    outlet: 'UP School of Economics Discussion Paper 2015-12',
    publisher: 'University of the Philippines School of Economics',
    topics: ['Mining & extractives', 'Fiscal policy & tax'],
    summary:
      'Develops a mining-for-development framework for the Philippines, linking extraction to public development outcomes.',
    archivePage: 13,
    featured: true,
  },
  {
    id: 'fpic-philippines',
    title: 'Free and Prior Informed Consent in the Philippines: Past and Prospects',
    authors: [magno, gatmaytan],
    year: 2013,
    type: 'Report',
    outlet: 'Oxfam America',
    topics: ['Mining & extractives', 'Governance & transparency'],
    summary:
      'Reviews the past and prospects of Free and Prior Informed Consent in the Philippines.',
    archivePage: 11,
  },
  {
    id: 'community-based-development-conflict',
    title:
      'Community-Based Development in Conflict-Affected Areas in the Philippines',
    authors: [parks, schuler, chua, magno, johnson, domado, mccarthy],
    year: 2013,
    type: 'Report',
    outlet: 'The Asia Foundation',
    topics: ['Governance & transparency', 'Local public finance'],
    summary:
      'Examines community-based development in conflict-affected areas of the Philippines.',
    archivePage: 11,
  },
  {
    id: 'sourcebook-local-public-finance',
    title: 'Sourcebook on Local Public Finance',
    authors: [staMaria, magno, galvez, cantos],
    year: 2013,
    type: 'Report',
    outlet: 'UNDP–Social Watch Philippines',
    topics: ['Local public finance', 'Fiscal policy & tax'],
    summary:
      'A sourcebook on local public finance designed to build stakeholder capacity in local government units.',
    archivePage: 11,
    featured: true,
  },
]
