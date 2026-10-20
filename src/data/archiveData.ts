import type { ArchivePage } from './types'

const labels: string[] = [
  'Profile, education & teaching',
  'Government & global leadership',
  'Boards, advisory councils & affiliations',
  'Student leadership, program roles & consultancy',
  'Consultancy & research · 2020–2026',
  'Consultancy & research · 2016–2022',
  'Consultancy & research · 2011–2017',
  'Research & policy roles · 2002–2011',
  'Awards, fellowships & publications',
  'Publications · 2020–2024',
  'Publications · 2003–2020',
  'Publications & newspaper columns',
  'Posters & research papers',
  'Research papers & international speaking · 2017–2026',
  'International & domestic speaking',
  'Domestic speaking · February–July 2026',
  'Domestic speaking · February 2025–February 2026',
  'Domestic speaking · 2024–2025',
  'Domestic speaking · 2012–2024',
]

export const archivePages: ArchivePage[] = labels.map((label, index) => ({
  page: index + 1,
  label,
  src: `/cv/pages/p${String(index + 1).padStart(2, '0')}.jpeg`,
}))
