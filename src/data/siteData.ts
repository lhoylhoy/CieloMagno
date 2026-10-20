export interface NavItem {
  id: string
  label: string
  shortLabel: string
}

export const navItems: NavItem[] = [
  { id: 'top', label: 'The Brief', shortLabel: 'Brief' },
  { id: 'why', label: 'Why 2028', shortLabel: 'Why' },
  { id: 'agenda', label: 'The 2028 Agenda', shortLabel: 'Agenda' },
  { id: 'budol', label: 'Bawal ang Budol', shortLabel: 'Budol' },
  { id: 'youth', label: 'Youth Wave', shortLabel: 'Youth' },
  { id: 'research', label: 'Resibo Vault', shortLabel: 'Resibo' },
  { id: 'contact', label: 'Open Channel', shortLabel: 'Contact' },
]

export const siteMeta = {
  title: "Cielo Magno for Senator 2028 — The People's Economist",
  description:
    'The official campaign website of Dr. Cielo Magno for Senator 2028: the record, the receipts, the 2028 agenda, and a budget decoder.',
  lastUpdated: 'October 2026',
  cvPages: 19,
}
