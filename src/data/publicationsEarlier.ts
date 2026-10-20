import type { Publication } from './types'
import {
  amaro,
  arevalo,
  cortes,
  magno,
  magnoGatmaytan,
  margolin,
  melendez,
} from './publicationAuthors'

export const publicationsEarlier: Publication[] = [
  {
    id: 'addiction-spiritual-self-schema',
    title:
      'Addiction Treatment Intervention: An Uncontrolled Prospective Pilot Study of Spiritual Self-Schema Therapy with Latina Women',
    authors: [amaro, magnoGatmaytan, melendez, cortes, arevalo, margolin],
    year: 2010,
    type: 'Journal article',
    outlet: 'Substance Abuse',
    volume: '31',
    issue: '2',
    pages: '117–125',
    topics: ['Health economics'],
    summary:
      'A pilot study of Spiritual Self-Schema therapy with Latina women in addiction treatment.',
    archivePage: 11,
  },
  {
    id: 'social-accountability-case-study',
    title:
      'Comparative Case Study on Social Accountability Initiatives: Inception, Evolution and Sustainability',
    authors: [magno],
    year: 2009,
    type: 'Report',
    outlet: 'Affiliated Network for Social Accountability (ANSA), BRAC University',
    topics: ['Governance & transparency'],
    summary:
      'Comparative case study of social accountability initiatives across the Philippines, India, Brazil, Mongolia, and Azerbaijan, examining inception, evolution, and sustainability.',
    archivePage: 13,
  },
  {
    id: 'mindfulness-hiv-prevention',
    title:
      'Mindfulness-Based HIV Prevention among Puerto Rican Women in Substance Abuse Treatment: Assessing the Acceptability and Promise of Spiritual Self-Schema Therapy',
    authors: [amaro, magnoGatmaytan, melendez, cortes, arevalo, margolin],
    year: 2009,
    type: 'Conference paper',
    outlet: 'Northeastern University Research and Scholarship Expo, Boston, MA',
    topics: ['Health economics'],
    summary:
      'Assesses the acceptability and promise of mindfulness-based HIV prevention among Puerto Rican women in substance abuse treatment.',
    archivePage: 13,
  },
  {
    id: 'spiritual-self-schema-pilot',
    title: 'Spiritual Self Schema Therapy: Pilot Study',
    authors: [arevalo, amaro, magnoGatmaytan, melendez, cortes, margolin],
    year: 2008,
    type: 'Conference paper',
    outlet:
      'Eighth Annual Conference on Community, Behavioral and Molecular Sciences in Addictive Disorders, Bethesda, MD',
    topics: ['Health economics'],
    summary:
      'A pilot study of Spiritual Self-Schema therapy presented at a research conference on addictive disorders.',
    archivePage: 13,
  },
  {
    id: 'local-economic-development',
    title: 'State of Local Economic Development in the Philippines',
    authors: [magno],
    year: 2004,
    type: 'Report',
    outlet: 'Ateneo Center for Economic Research and Development',
    topics: ['Local public finance', 'Governance & transparency'],
    summary:
      'Assesses the state of local economic development in the Philippines.',
    archivePage: 13,
  },
  {
    id: 'bir-corporatization',
    title:
      'Corporatization of the BIR: Improving Revenue Collection through Institutional Reform',
    authors: [magno],
    year: 2003,
    type: 'Policy brief',
    outlet: 'La Salle Institute of Governance, Policy Notes Series No. 1, May 2003',
    topics: ['Fiscal policy & tax', 'Governance & transparency'],
    summary:
      'Examines the corporatization of the Bureau of Internal Revenue as a route to improving revenue collection through institutional reform.',
    archivePage: 11,
  },
  {
    id: 'devolution-agricultural-health-services',
    title: 'The Devolution of Agricultural and Health Services',
    authors: [magno],
    year: 2001,
    type: 'Report',
    outlet: 'Chapter, Social Watch Philippines 2001 Report',
    topics: ['Local public finance', 'Governance & transparency'],
    summary:
      'A chapter in the Social Watch Philippines 2001 Report examining the devolution of agricultural and health services to local governments.',
    archivePage: 12,
  },
  {
    id: 'rent-seeking-bir',
    title:
      'Rent-Seeking, Revenue Collection and Reform: The Corporatization of the Bureau of Internal Revenue',
    authors: [magno],
    year: 2001,
    type: 'Thesis',
    outlet:
      "Master's paper, School of Economics, University of the Philippines Diliman",
    topics: ['Fiscal policy & tax', 'Governance & transparency'],
    summary:
      'Examines rent-seeking, revenue collection, and reform in the corporatization of the Bureau of Internal Revenue.',
    archivePage: 13,
  },
  {
    id: 'devolution-unhealthy-politics',
    title: 'Devolution: An Unhealthy Mix of Politics',
    authors: [magno],
    year: 2001,
    type: 'Report',
    outlet: 'United Nations Development Programme',
    topics: ['Local public finance', 'Governance & transparency'],
    summary:
      'Examines the politics of devolution in the Philippine context.',
    archivePage: 14,
  },
  {
    id: 'shipping-deregulation',
    title:
      'Irony of Deregulation: A Comprehensive Study on the Deregulation of the Shipping Industry',
    authors: [magno],
    year: 1998,
    type: 'Thesis',
    outlet: 'Undergraduate thesis, University of the Philippines Diliman',
    topics: ['Competition & regulation', 'Governance & transparency'],
    summary:
      'A comprehensive study of the deregulation of the Philippine shipping industry.',
    archivePage: 14,
  },
]
