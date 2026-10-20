export const campaign = {
  /**
   * Official campaign build for Dr. Cielo Magno's 2028 Senate candidacy.
   */
  mode: 'official' as const,
  publicRelease: true,
  authorized: true,
  candidateConfirmed: true,
  office: 'Senator',
  year: 2028,
  title: 'Cielo Magno for Senator 2028',
  shortTitle: 'Cielo 2028',
  tagline: "The People's Economist",
  battleCry: 'May Resibo, May Prinsipyo.',
  heroLine: 'May Bagong Option Na Kayo.',
  location: 'Philippines',
  reviewDisclaimer:
    'Private campaign prototype prepared for Dr. Cielo Magno’s review. Not for public release.',
  publicDisclaimer:
    'This is the official campaign website of Cielo Magno for Senator 2028.',
  formEndpoint: (import.meta.env.VITE_CAMPAIGN_FORM_ENDPOINT as string | undefined) ?? '',
  contactEmail: (import.meta.env.VITE_CAMPAIGN_EMAIL as string | undefined) ?? '',
}

export const campaignRoles = [
  'Economist',
  'UP Professor',
  'Former Undersecretary of Finance',
  'OGP Global Steering Committee',
  'Student-leader roots',
]

export const campaignTicker = [
  'May resibo, may prinsipyo',
  'Bawal ang budol sa budget',
  'Kalusugan, hindi negosyo',
  'Pagkain at magsasaka',
  'Yaman ng bayan para sa bayan',
  'Kabataan at marangal na sahod',
  'Cielo Magno · 2028',
]

export const campaignStats = [
  { value: '25+', label: 'Years in economics', detail: 'From UP to the Department of Finance.' },
  { value: '39', label: 'Research outputs', detail: 'Journal articles, briefs, and reports.' },
  { value: '86', label: 'Speaking engagements', detail: '25 global, 61 in the Philippines.' },
  { value: '1', label: 'Resignation on principle', detail: 'She would not stop making the argument.' },
]
